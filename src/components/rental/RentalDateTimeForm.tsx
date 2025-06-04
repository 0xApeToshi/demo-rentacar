// src/components/rental/RentalDateTimeForm.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { useBooking } from "@/context/BookingContext";
import { useNavigate } from "react-router-dom";
import { carTypes } from "@/utils/types/carTypes";
import { SearchState } from "@/utils/types/searchTypes";
import { DatePicker, TimePicker } from "antd";
import { dateUtils } from "@/utils/dateUtils";
import Button from "../common/Button";
import { Dayjs } from "dayjs";
import { useBooking } from "@/context/BookingContext";

interface RentalDateTimeFormProps {
    selectedCar: carTypes | null;
}

function RentalDateTimeForm({ selectedCar }: RentalDateTimeFormProps) {
    const { t } = useTranslation();
    // const { state, dispatch } = useBooking();
    const { dispatch } = useBooking();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [differentLocation, setDifferentLocation] = useState(false);

    // Initialize search params
    const [searchParams, setSearchParams] = useState<SearchState>({
        location: "",
        pickupDate: "",
        pickupTime: "",
        dropoffDate: "",
        dropoffTime: "",
        dropoffLocation: "",
    });

    // Mock locations for demo purposes
    const mockLocations = [
        { id: "zagreb", name: "Zagreb", label: "Zagreb, Airport" },
        { id: "split", name: "Split", label: "Split, Airport" },
        { id: "dubrovnik", name: "Dubrovnik", label: "Dubrovnik, Center" },
        { id: "zadar", name: "Zadar", label: "Zadar, Center" },
    ];

    const handlePickupDateChange = (date: Dayjs | null) => {
        setSearchParams((prev) => ({
            ...prev,
            pickupDate: date ? dateUtils.formatDate(date.toDate()) : "",
        }));
    };

    const handlePickupTimeChange = (time: Dayjs | null) => {
        setSearchParams((prev) => ({
            ...prev,
            pickupTime: time ? dateUtils.formatTime(time.toDate()) : "",
        }));
    };

    const handleDropoffDateChange = (date: Dayjs | null) => {
        setSearchParams((prev) => ({
            ...prev,
            dropoffDate: date ? dateUtils.formatDate(date.toDate()) : "",
        }));
    };

    const handleDropoffTimeChange = (time: Dayjs | null) => {
        setSearchParams((prev) => ({
            ...prev,
            dropoffTime: time ? dateUtils.formatTime(time.toDate()) : "",
        }));
    };

    const handleSubmit = () => {
        // Validate form
        if (!searchParams.location) {
            setError(t("common.validation.required_field"));
            return;
        }
        if (!searchParams.pickupDate || !searchParams.pickupTime) {
            setError(t("common.validation.required_field"));
            return;
        }
        if (!searchParams.dropoffDate || !searchParams.dropoffTime) {
            setError(t("common.validation.required_field"));
            return;
        }

        const pickup = new Date(
            `${searchParams.pickupDate} ${searchParams.pickupTime}`
        );
        const dropoff = new Date(
            `${searchParams.dropoffDate} ${searchParams.dropoffTime}`
        );

        if (!dateUtils.isValidDateRange(pickup, dropoff)) {
            setError(t("search.validation.invalid_date_range"));
            return;
        }

        // Clear errors and show loading
        setError(null);
        setIsLoading(true);

        // Update booking context
        dispatch({ type: "RESET_BOOKING" });

        if (selectedCar) {
            dispatch({ type: "SELECT_CAR", payload: selectedCar });
            dispatch({
                type: "UPDATE_TOTAL_PRICE",
                payload: parseInt(selectedCar.price.replace(/[^0-9]/g, "")),
            });
        }

        dispatch({ type: "SET_SEARCH_DETAILS", payload: searchParams });

        // Simulate API call with setTimeout
        setTimeout(() => {
            setIsLoading(false);
            navigate("/booking/protection-products");
        }, 1000);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-gilroy text-primary mb-6">
                {t("search.place")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-2">
                    <label className="text-base-black">
                        {t("search.location")}*
                    </label>
                    <select
                        className="w-full px-[14px] py-[12px] border rounded-[6px] border-neutral-700 hover:border-primary"
                        value={searchParams.location}
                        onChange={(e) =>
                            setSearchParams({
                                ...searchParams,
                                location: e.target.value,
                            })
                        }
                        required
                    >
                        <option value="">{t("search.location")}</option>
                        {mockLocations.map((location) => (
                            <option key={location.id} value={location.name}>
                                {location.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2 mt-8">
                    <input
                        type="checkbox"
                        id="differentLocation"
                        checked={differentLocation}
                        onChange={() => setDifferentLocation(!differentLocation)}
                    />
                    <label htmlFor="differentLocation" className="text-neutral-700">
                        {t("search.alternateDropoff")}
                    </label>
                </div>
            </div>

            {differentLocation && (
                <div className="mb-6">
                    <label className="text-base-black">
                        {t("search.custom_dropoff")}*
                    </label>
                    <select
                        className="w-full px-[14px] py-[12px] border rounded-[6px] border-neutral-700 hover:border-primary mt-2"
                        value={searchParams.dropoffLocation}
                        onChange={(e) =>
                            setSearchParams({
                                ...searchParams,
                                dropoffLocation: e.target.value,
                            })
                        }
                    >
                        <option value="">{t("search.location")}</option>
                        {mockLocations.map((location) => (
                            <option key={location.id} value={location.name}>
                                {location.label}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                    <label className="text-base-black">
                        {t("search.pickup")}*
                    </label>
                    <div className="flex">
                        <DatePicker
                            style={{
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                width: "50%",
                            }}
                            onChange={handlePickupDateChange}
                        />
                        <TimePicker
                            style={{
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                width: "50%",
                            }}
                            format="HH:mm"
                            minuteStep={5}
                            onChange={handlePickupTimeChange}
                            needConfirm={false}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-base-black">
                        {t("search.dropoff")}*
                    </label>
                    <div className="flex">
                        <DatePicker
                            style={{
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                width: "50%",
                            }}
                            onChange={handleDropoffDateChange}
                        />
                        <TimePicker
                            style={{
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                width: "50%",
                            }}
                            format="HH:mm"
                            minuteStep={5}
                            onChange={handleDropoffTimeChange}
                            needConfirm={false}
                        />
                    </div>
                </div>
            </div>

            {/* Booking summary */}
            {selectedCar && (
                <div className="bg-secondary-100 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-lg mb-2">
                        {t("booking_process.protection.booking_overview")}
                    </h4>
                    <div className="flex items-center gap-2 text-base-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>
                            {t("booking_process.protection.overview_text1")}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-base-black mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>
                            {t("booking_process.protection.overview_text2")}
                        </span>
                    </div>
                </div>
            )}

            {error && (
                <div className="text-red-500 mb-4">
                    {error}
                </div>
            )}

            <Button
                variant="primary"
                className="w-full bg-success-700"
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? t("common.form.sending") : t("common.buttons.continue")}
            </Button>
        </div>
    );
}

export default RentalDateTimeForm;