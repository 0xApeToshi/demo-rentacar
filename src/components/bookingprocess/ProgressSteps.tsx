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

    // Mobile version only shows current step and next step
    // const displaySteps = steps.filter(step =>
    //     step.id <= currentStep + 1
    // );

    return (
        <>
            {/* Desktop version */}
            <div className="hidden md:flex gap-[19px] flex-wrap">
                <div className="flex gap-[4px]">
                    <img
                        className="w-[24px] h-[24px]"
                        src="/assets/successIcon.svg"
                        alt="Success"
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
                                    alt="Success"
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

            {/* Mobile version */}
            <div className="md:hidden w-full">
                {/* Current step indicator */}
                <div className="w-full flex justify-between items-center mb-4 border-b pb-2">
                    <div className="flex items-center gap-2">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            {currentStep}
                        </span>
                        <span className="font-medium">
                            {currentStep === 1
                                ? t("booking_process.progress.car_selection")
                                : currentStep === 2
                                    ? t("booking_process.progress.protection")
                                    : currentStep === 3
                                        ? t("booking_process.progress.addons")
                                        : t("booking_process.progress.payment")}
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">
                        {currentStep}/4
                    </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${(currentStep / 4) * 100}%` }}
                    ></div>
                </div>

                {/* Rental details summary */}
                <div className="w-full bg-white rounded-lg p-3 mb-4 text-sm">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{t("booking_process.progress.rental_details")}</span>
                        <img
                            className="w-[16px] h-[16px]"
                            src="/assets/successIcon.svg"
                            alt="Success"
                        />
                    </div>
                    <div className="text-xs text-gray-600">
                        <p>{state.search.location} - {state.search.pickupDate}</p>
                        <p>
                            {state.search.dropoffLocation
                                ? state.search.dropoffLocation
                                : state.search.location} - {state.search.dropoffDate}
                        </p>
                    </div>
                </div>

                {/* Current selection details if applicable */}
                {currentStep >= 2 && (
                    <div className="w-full bg-white rounded-lg p-3 mb-4 text-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{t("booking_process.progress.car_selection")}</span>
                            <img
                                className="w-[16px] h-[16px]"
                                src="/assets/successIcon.svg"
                                alt="Success"
                            />
                        </div>
                        <p className="text-xs text-gray-600">{state.selectedCar?.name}</p>
                    </div>
                )}

                {currentStep >= 3 && (
                    <div className="w-full bg-white rounded-lg p-3 mb-4 text-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{t("booking_process.progress.protection")}</span>
                            <img
                                className="w-[16px] h-[16px]"
                                src="/assets/successIcon.svg"
                                alt="Success"
                            />
                        </div>
                        <p className="text-xs text-gray-600">
                            {state.selectedOptions.join(", ")}
                        </p>
                    </div>
                )}

                {currentStep >= 4 && (
                    <div className="w-full bg-white rounded-lg p-3 mb-4 text-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{t("booking_process.progress.addons")}</span>
                            <img
                                className="w-[16px] h-[16px]"
                                src="/assets/successIcon.svg"
                                alt="Success"
                            />
                        </div>
                        <p className="text-xs text-gray-600">
                            {state.selectedAddons.join(", ")}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProgressSteps;