import { useBooking } from "@/context/BookingContext";
import { Check, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProgressStepsProps {
    currentStep: number;
}

function ProgressSteps({ currentStep }: ProgressStepsProps) {
    const { t } = useTranslation();

    const steps = [
        { id: 2, name: t("booking_process.progress.car_selection"), current: true },
        { id: 3, name: t("booking_process.progress.protection"), current: false },
        { id: 4, name: t("booking_process.progress.addons"), current: false },
        { id: 5, name: t("booking_process.progress.payment"), current: false },
    ];

    const { state } = useBooking();

    return (
        <div className="flex gap-[19px]">
            <div className="flex gap-[4px]">
                <img
                    className="w-[24px] h-[24px]"
                    src="/assets/successIcon.svg"
                />
                <div className="flex flex-col gap-[7px] text-base-black">
                    <p className="font-gilroy text-[20px] leading-[120%]">
                        {t("booking_process.progress.rental_details")}
                    </p>
                    <div className="flex flex-col leading-[120%] text-[14px]">
                        <p>
                            {state.search.location} {state.search.pickupDate}{" "}
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
                </div>
            </div>
            {steps.map((step) => (
                <div className="flex gap-[19px]" key={step.id}>
                    <ChevronRight />
                    <div className="flex gap-[4px]">
                        {step.id <= currentStep && (
                            <img
                                className="w-[24px] h-[24px]"
                                src="/assets/successIcon.svg"
                            />
                        )}
                        {step.id === currentStep + 1 && <Check />}
                        <div className="flex flex-col gap-[7px] text-base-black">
                            <p
                                className={`font-gilroy text-[20px] leading-[120%] ${step.id > currentStep + 1 ? "text-neutral-400" : ""}`}
                            >
                                {step.name}
                            </p>
                            {step.id <= currentStep && step.id === 2 && (
                                <p className="leading-[120%] text-[14px]">
                                    {state.selectedCar?.name}
                                </p>
                            )}
                            {step.id <= currentStep && step.id === 3 && (
                                <p className="flex flex-col leading-[120%] text-[14px]">
                                    {state.selectedOptions.map((option, index) => (
                                        <span key={index}>{option}</span>
                                    ))}
                                </p>
                            )}
                            {step.id <= currentStep && step.id === 4 && (
                                <p className="leading-[120%] text-[14px]">
                                    {state.selectedAddons.join(", ")}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProgressSteps;