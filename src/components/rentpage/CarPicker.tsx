// src/components/rentpage/CarPicker.tsx
import { getWordVariation } from "@/utils/cityDeclinations";
import Button from "../common/Button";
import CarCarousel from "../common/CarCarousel";
import { useTranslation } from "react-i18next";

interface CarPickerProps {
    city: string;
    recommendedVehicles?: string[];
}

function CarPicker({ city, recommendedVehicles = [] }: CarPickerProps) {
    const { t } = useTranslation();
    const cityInDative = getWordVariation(city, "dative");

    // Default categories
    const defaultCategories = [
        {
            id: "mini",
            title: t("rent.car_picker.categories.mini.title"),
            description: t("rent.car_picker.categories.mini.description"),
        },
        {
            id: "suv",
            title: t("rent.car_picker.categories.suv.title"),
            description: t("rent.car_picker.categories.suv.description"),
        },
        {
            id: "van",
            title: t("rent.car_picker.categories.van.title"),
            description: t("rent.car_picker.categories.van.description"),
        },
    ];

    // Filter categories based on recommended vehicles for this city
    const filteredCategories = recommendedVehicles?.length
        ? defaultCategories.filter(cat => recommendedVehicles.includes(cat.id))
        : defaultCategories;

    return (
        <div className="w-full bg-white flex justify-center">
            <section className="w-[1440px] px-[120px] py-[80px]">
                <div className="flex flex-col gap-[8px] text-left w-[593px] items-start">
                    <h3 className="font-gilroy text-[46px] leading-[110%] text-primary">
                        {t("rent.car_picker.title", { city: cityInDative })}
                    </h3>
                    <p className="w-[565px] text-base-black text-[20px] font-gilroy leading-[120%]">
                        {t("rent.car_picker.subtitle")}
                    </p>
                </div>
                <div className="pb-[80px] pt-[40px] flex gap-[32px]">
                    {filteredCategories.map((category) => (
                        <div
                            key={category.id}
                            className="p-[22px] rounded-[16px] w-1/3 h-fit flex flex-col gap-[16px] items-center shadow-lg"
                        >
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-gilroy text-[28px] leading-[112%] text-base-black">
                                    {category.title}
                                </p>
                                <p className="text-[16px] leading-[150%] text-base-black">
                                    {category.description}
                                </p>
                            </div>
                            <Button
                                variant="secondary"
                                icon="search"
                                onClick={() => window.location.href = `/booking?category=${category.id}&location=${city}`}
                            >
                                {t("common.buttons.search")}
                            </Button>
                        </div>
                    ))}
                </div>
                <CarCarousel city={city} />
            </section>
        </div>
    );
}

export default CarPicker;