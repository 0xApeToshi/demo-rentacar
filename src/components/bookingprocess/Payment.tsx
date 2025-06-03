import { useBooking } from "@/context/BookingContext";
import Button from "../common/Button";
import ProgressSteps from "./ProgressSteps";
import { useTranslation } from "react-i18next";

function Payment() {
    const { state } = useBooking();
    const { t } = useTranslation();

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="w-[1440px] px-[120px] py-[80px] flex flex-col gap-[60px]">
                <ProgressSteps currentStep={4} />
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
                            <h3 className="text-left text-[24px] font-gilroy leading-[120%] text-primary">
                                {t("booking_process.payment.title")}
                            </h3>

                            <p>TODO: integrate m2pay</p>

                            <Button
                                variant="primary"
                                className="bg-success-700 place-self-end"
                            >
                                {t("booking_process.payment.reserve_now")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;