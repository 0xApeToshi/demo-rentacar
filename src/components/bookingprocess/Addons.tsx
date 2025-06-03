import { useBooking } from "@/context/BookingContext";
import Button from "../common/Button";
import ProgressSteps from "./ProgressSteps";
import { Option } from "./ProtectionProducts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Addons() {
    const { state, dispatch } = useBooking();
    const navigation = useNavigate();
    const [selectedAddons, setSelectedAddons] = useState<Option[]>([]);
    const { t } = useTranslation();

    const addons: Option[] = [
        {
            id: "extra-driver",
            name: t("booking_process.addons.extra_driver.name"),
            description: t("booking_process.addons.extra_driver.description"),
            price: 12,
        },
        {
            id: "green-card",
            name: t("booking_process.addons.green_card.name"),
            description: t("booking_process.addons.green_card.description"),
            price: 35,
        },
        {
            id: "gps-navigation",
            name: t("booking_process.addons.gps.name"),
            description: t("booking_process.addons.gps.description"),
            price: 8,
        },
        {
            id: "child-seat",
            name: t("booking_process.addons.child_seat.name"),
            description: t("booking_process.addons.child_seat.description"),
            price: 7,
        },
    ];

    useEffect(() => {
        if (state.selectedAddons && state.selectedAddons.length > 0) {
            const initialSelected = addons.filter((addon) =>
                state.selectedAddons.includes(addon.name)
            );
            setSelectedAddons(initialSelected);
        }
    }, []);

    const handleAddonSelect = () => {
        const selectedAddonNames = selectedAddons.map((addon) => addon.name);

        let priceTotal = 0;

        for (const addon of selectedAddons) {
            if (!state.selectedAddons?.includes(addon.name)) {
                priceTotal += addon.price;
            }
        }
        if (state.selectedAddons) {
            for (const optionName of state.selectedAddons) {
                if (!selectedAddonNames.includes(optionName)) {
                    const deselectedAddons = addons.find(
                        (opt) => opt.name === optionName
                    );
                    if (deselectedAddons) {
                        priceTotal -= deselectedAddons.price;
                    }
                }
            }
        }

        const newPrice = state.totalPrice + priceTotal;
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: newPrice });
        dispatch({ type: "SELECT_ADDONS", payload: selectedAddonNames });
        navigation("/booking/payment");
    };

    const handleCheckboxChange = (addon: Option) => {
        setSelectedAddons((prev) => {
            const isSelected = prev.find((item) => item.id === addon.id);
            if (isSelected) {
                return prev.filter((item) => item.id !== addon.id);
            } else {
                return [...prev, addon];
            }
        });
    };

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="w-[1440px] px-[120px] py-[80px] flex flex-col gap-[60px]">
                <ProgressSteps currentStep={3} />
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
                            {addons.map((addon) => (
                                <div
                                    key={addon.id}
                                    id={addon.id}
                                    className="flex flex-col gap-[16px] bg-white items-start w-full rounded-[8px] px-[14px] py-[20px] border border-secondary-200"
                                >
                                    <div className="flex justify-between w-full items-end">
                                        <div className="flex flex-col items-start text-left leading-[120%] gap-[20px]">
                                            <p className="font-semibold">
                                                {addon.name}
                                            </p>
                                            <div className="flex flex-col gap-[8px] text-[14px]">
                                                <p>{addon.price} €/day</p>
                                                <p className="text-gray-600">
                                                    {addon.description}
                                                </p>
                                                <a className="underline text-secondary-700"></a>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={selectedAddons.some(
                                                (item) => item.id === addon.id
                                            )}
                                            onChange={() =>
                                                handleCheckboxChange(addon)
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                            <Button
                                variant="primary"
                                className="bg-success-700 place-self-end"
                                onClick={() => handleAddonSelect()}
                            >
                                {t("booking_process.addons.continue")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addons;