// src/components/pages/RentalPage.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import RentalVehicleGrid from "../rental/RentalVehicleGrid";
import RentalDateTimeForm from "../rental/RentalDateTimeForm";
import ProgressSteps from "../bookingprocess/ProgressSteps";
// import { useBooking } from "@/context/BookingContext";
import FeatureCards from "../homepage/FeatureCards";
import { carTypes } from "@/utils/types/carTypes";

function RentalPage() {
    const { t } = useTranslation();
    // const { state } = useBooking();
    const [selectedCar, setSelectedCar] = useState<carTypes | null>(null);
    const [step, setStep] = useState<"vehicles" | "details">("vehicles");

    const handleVehicleSelect = (car: carTypes) => {
        setSelectedCar(car);
        setStep("details");
    };

    const handleBackToVehicles = () => {
        setStep("vehicles");
    };

    return (
        <div className="flex flex-col items-center bg-base w-full">
            <div className="w-full bg-primary h-[200px] flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-gilroy text-base leading-tight">
                    {t("common.navigation.rental")}
                </h1>
            </div>

            <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] md:py-[80px]">
                {step === "vehicles" ? (
                    <>
                        <div className="flex flex-col gap-8 mb-12">
                            <h2 className="text-3xl md:text-4xl text-primary font-gilroy">
                                {t("rent.car_picker.title", { city: "" })}
                            </h2>
                            <p className="text-lg text-base-black">
                                {t("rent.car_picker.subtitle")}
                            </p>
                        </div>
                        <RentalVehicleGrid onSelectVehicle={handleVehicleSelect} />
                    </>
                ) : (
                    <div className="w-full">
                        <ProgressSteps currentStep={0} />
                        <div className="flex flex-col md:flex-row gap-8 mt-12">
                            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                                {selectedCar && (
                                    <div className="flex flex-col gap-4">
                                        <img
                                            src={selectedCar.image}
                                            alt={selectedCar.name}
                                            className="w-full object-contain h-[200px]"
                                        />
                                        <h3 className="text-2xl font-gilroy text-primary">{selectedCar.name}</h3>
                                        <p className="text-base-black">{selectedCar.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold">{selectedCar.price}</span>
                                            <span className="text-sm text-neutral-500">{t("cars.features.per_day")}</span>
                                        </div>
                                        <button
                                            onClick={handleBackToVehicles}
                                            className="text-secondary-700 underline"
                                        >
                                            {t("booking_process.car_selection.details")}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="w-full md:w-2/3">
                                <RentalDateTimeForm selectedCar={selectedCar} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full bg-neutral-100 py-12">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
                    <h2 className="text-3xl md:text-4xl text-primary font-gilroy mb-12">
                        {t("rent.why_choose.title", { city: "" })}
                    </h2>
                    <FeatureCards />
                </div>
            </div>
        </div>
    );
}

export default RentalPage;