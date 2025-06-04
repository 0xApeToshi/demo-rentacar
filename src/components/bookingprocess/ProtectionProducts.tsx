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
    const [showCarDetails, setShowCarDetails] = useState(false);

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

    const toggleCarDetails = () => {
        setShowCarDetails(!showCarDetails);
    };

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] md:py-[80px] flex flex-col gap-[30px] md:gap-[60px]">
                <ProgressSteps currentStep={2} />

                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[21px]">
                    {/* Car details - collapsible on mobile */}
                    <div className="md:w-[287px] h-fit md:py-[12px] md:px-[20px] flex flex-col gap-[16px] md:gap-[34px] text-left bg-white rounded-[12px] text-base-black">
                        {/* Mobile toggle header */}
                        <div
                            className="flex justify-between items-center p-4 border-b cursor-pointer md:hidden"
                            onClick={toggleCarDetails}
                        >
                            <h3 className="font-medium">
                                {t("booking_process.protection.car_details")}
                            </h3>
                            <span className="text-sm text-gray-500">
                                {showCarDetails ? t("common.buttons.hide") : t("common.buttons.show")}
                            </span>
                        </div>

                        {/* Content - hidden on mobile unless expanded */}
                        <div className={`${showCarDetails ? 'block' : 'hidden'} md:block p-4 md:p-0`}>
                            <img
                                src={state.selectedCar?.image}
                                className="max-h-[180px] md:max-h-[245px] object-contain mx-auto"
                                alt={state.selectedCar?.name}
                            />
                            <h4 className="text-primary font-gilroy text-xl md:text-[24px] leading-[120%] mt-4 md:mt-0">
                                {state.selectedCar?.name}
                            </h4>
                            <div className="flex flex-col leading-[120%] text-[14px] mt-2">
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
                            <div className="mt-2">
                                <p className="font-gilroy text-xl md:text-[24px] leading-[120%]">
                                    {state.selectedCar?.price}
                                </p>
                                <a className="underline text-secondary-700 text-sm">
                                    {t("booking_process.addons.price_details")}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex flex-col gap-[24px] md:gap-[48px] w-full">
                        <div className="flex flex-col gap-[16px] md:gap-[20px] w-full">
                            <h2 className="text-xl md:text-2xl font-medium text-primary">
                                {t("booking_process.protection.title")}
                            </h2>

                            {options.map((option) => (
                                <div
                                    key={option.id}
                                    id={option.id}
                                    className="flex flex-col gap-[16px] bg-white items-start w-full rounded-[8px] px-[14px] py-[16px] md:py-[20px] border border-secondary-200"
                                >
                                    <div className="flex justify-between w-full items-start md:items-end">
                                        <div className="flex flex-col items-start text-left leading-[120%] gap-[12px] md:gap-[20px]">
                                            <p className="font-semibold">
                                                {option.name}
                                            </p>
                                            <div className="flex flex-col gap-[8px] text-[13px] md:text-[14px]">
                                                <p>{option.price} €/day</p>
                                                <p className="text-gray-600">
                                                    {option.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 ml-2">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5"
                                                checked={selectedOptions.some(
                                                    (addon) => addon.id === option.id
                                                )}
                                                onChange={() => handleCheckboxChange(option)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Button
                                variant="primary"
                                className="bg-success-700 place-self-end w-full sm:w-auto"
                                onClick={() => handleProductSelect()}
                            >
                                {t("booking_process.protection.continue")}
                            </Button>
                        </div>

                        <div className="px-[14px] py-[20px] flex flex-col gap-[8px] rounded-[8px] bg-neutral-100 text-base-black text-left leading-[120%]">
                            <p className="font-semibold">
                                {t("booking_process.protection.booking_overview")}
                            </p>
                            <span className="flex gap-[8px] items-start">
                                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-sm md:text-base">
                                    {t("booking_process.protection.overview_text1")}
                                </span>
                            </span>
                            <span className="flex gap-[8px] items-start">
                                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-sm md:text-base">
                                    {t("booking_process.protection.overview_text2")}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProtectionProducts;