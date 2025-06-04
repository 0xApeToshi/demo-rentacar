// src/components/homepage/HomeCarPicker.tsx
import { useTranslation } from "react-i18next";
import CarCarousel from "../common/CarCarousel";

function HomeCarPicker() {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] px-4 sm:px-6 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] md:py-[80px]">
                <div className="flex flex-col gap-[8px] text-left w-fit">
                    <h2 className="text-3xl sm:text-4xl md:text-[46px] font-gilroy text-primary leading-[110%]">
                        {t("home.car_picker.title")}
                    </h2>
                    <p className="text-base-black text-lg sm:text-xl md:text-[20px] font-gilroy leading-[120%]">
                        {t("home.car_picker.subtitle")}
                    </p>
                </div>
                <CarCarousel />
            </div>
        </div>
    );
}
export default HomeCarPicker;