import { useBooking } from "@/context/BookingContext";
import ProgressSteps from "./ProgressSteps";
import Button from "../common/Button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Option {
    id: string;
    name: string;
    description: string;
    price: number;
}

function ProtectionProducts() {
    const { state, dispatch } = useBooking();
    const navigation = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const { t } = useTranslation();

    const options: Option[] = [
        {
            id: "basic-insurance",
            name: t("booking_process.protection.basic_insurance.name"),
            description: t("booking_process.protection.basic_insurance.description"),
            price: 15,
        },
        {
            id: "full-insurance",
            name: t("booking_process.protection.full_insurance.name"),
            description: t("booking_process.protection.full_insurance.description"),
            price: 25,
        },
        {
            id: "additional-driver",
            name: t("booking_process.protection.additional_driver.name"),
            description: t("booking_process.protection.additional_driver.description"),
            price: 10,
        },
        {
            id: "full-tank",
            name: t("booking_process.protection.full_tank.name"),
            description: t("booking_process.protection.full_tank.description"),
            price: 45,
        },
    ];

    useEffect(() => {
        if (state.selectedOptions && state.selectedOptions.length > 0) {
            const initialSelected = options.filter((option) =>
                state.selectedOptions.includes(option.name)
            );
            setSelectedOptions(initialSelected);
        }
    }, []);

    const handleProductSelect = () => {
        const selectedOptionNames = selectedOptions.map(
            (option) => option.name
        );

        let priceTotal = 0;
        for (const option of selectedOptions) {
            if (!state.selectedOptions?.includes(option.name)) {
                priceTotal += option.price;
            }
        }
        if (state.selectedOptions) {
            for (const optionName of state.selectedOptions) {
                if (!selectedOptionNames.includes(optionName)) {
                    const deselectedOption = options.find(
                        (opt) => opt.name === optionName
                    );
                    if (deselectedOption) {
                        priceTotal -= deselectedOption.price;
                    }
                }
            }
        }

        const newPrice = state.totalPrice + priceTotal;
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: newPrice });
        dispatch({ type: "SELECT_OPTIONS", payload: selectedOptionNames });
        navigation("/booking/add-ons");
    };

    const handleCheckboxChange = (option: Option) => {
        setSelectedOptions((prev) => {
            const isSelected = prev.find((addon) => addon.id === option.id);
            if (isSelected) {
                return prev.filter((addon) => addon.id !== option.id);
            } else {
                return [...prev, option];
            }
        });
    };

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="w-[1440px] px-[120px] py-[80px] flex flex-col gap-[60px]">
                <ProgressSteps currentStep={2} />
                <div className="flex gap-[21px]">
                    <div className="w-[287px] h-fit py-[12px] px-[20px] flex flex-col gap-[34px] text-left bg-white rounded-[12px] text-base-black">
                        <img
                            src={state.selectedCar?.image}
                            className="max-h-[245px] object-contain"
                        />
                        <h4 className="text-primary font-gilroy text-[24px] leading-[120%]">
                            {state.selectedCar?.name}
                        </h4>
                        <div className="flex flex-col leading-[120%] text-[14px]">
                            <p>
                                {state.search.location}{" "}
                                {state.search.pickupDate}{" "}
                                {state.search.pickupTime}
                            </p>
                            <p>
                                {state.search.dropoffLocation
                                    ? state.search.dropoffLocation
                                    : state.search.location}{" "}
                                {state.search.dropoffDate}{" "}
                                {state.search.dropoffTime}
                            </p>
                        </div>
                        <div>
                            <p className="font-gilroy text-[24px] leading-[120%]">
                                {state.selectedCar?.price}
                            </p>
                            <a className="underline text-secondary-700">
                                {t("booking_process.addons.price_details")}
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[48px] w-full items-end">
                        <div className="flex flex-col gap-[20px] w-full">
                            {options.map((option) => (
                                <div
                                    key={option.id}
                                    id={option.id}
                                    className="flex flex-col gap-[16px] bg-white items-start w-full rounded-[8px] px-[14px] py-[20px] border border-secondary-200"
                                >
                                    <div className="flex justify-between w-full items-end">
                                        <div className="flex flex-col items-start text-left leading-[120%] gap-[20px]">
                                            <p className="font-semibold">
                                                {option.name}
                                            </p>
                                            <div className="flex flex-col gap-[8px] text-[14px]">
                                                <p>{option.price} €/day</p>
                                                <p className="text-gray-600">
                                                    {option.description}
                                                </p>
                                                <a className="underline text-secondary-700"></a>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={selectedOptions.some(
                                                (addon) =>
                                                    addon.id === option.id
                                            )}
                                            onChange={() =>
                                                handleCheckboxChange(option)
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                            <Button
                                variant="primary"
                                className="bg-success-700 place-self-end"
                                onClick={() => handleProductSelect()}
                            >
                                {t("booking_process.protection.continue")}
                            </Button>
                        </div>
                        <div className="px-[14px] py-[20px] flex flex-col gap-[8px] rounded-[8px] bg-neutral-100 text-base-black text-left leading-[120%]">
                            <p className="font-semibold">
                                {t("booking_process.protection.booking_overview")}
                            </p>
                            <span className="flex gap-[8px]">
                                <Check />
                                {t("booking_process.protection.overview_text1")}
                            </span>
                            <span className="flex gap-[8px]">
                                <Check />
                                {t("booking_process.protection.overview_text2")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProtectionProducts;