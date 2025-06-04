// src/components/common/SearchBar.tsx
import { useCallback, useState, useEffect } from "react";
import Button from "./Button";
import { SearchState } from "../../utils/types/searchTypes";
import { DatePicker } from "antd";
import { TimePicker } from "antd";
import { dateUtils } from "../../utils/dateUtils";
import { searchService } from "../../services/searchService";
import { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { useBooking } from "@/context/BookingContext";
import { useNavigate } from "react-router-dom";
import { getAllCities } from "@/utils/cityRepository";

type Location = {
    id: string;
    name: string;
    city: string;
};

interface SearchBarProps {
    initialLocation?: string;
}

function SearchBar({ initialLocation = "" }: SearchBarProps) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [differentLocation, setDiffLocation] = useState(false);
    const { state, dispatch } = useBooking();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Initialize search params from state or with initial location if provided
    const initialSearchParams = initialLocation
        ? { ...state.search, location: initialLocation }
        : state.search;

    const [searchParams, setParams] = useState<SearchState>(initialSearchParams);
    const { t } = useTranslation();

    // Generate locations from city repository
    const cities = getAllCities();
    const mockLocations: Location[] = [
        ...cities.map(city => ({
            id: city.slug,
            name: "Airport",
            city: city.name
        })),
        ...cities.map(city => ({
            id: `${city.slug}-center`,
            name: "Center",
            city: city.name
        })),
    ];

    const handleSearch = useCallback(async () => {
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

        setLoading(true);
        setError(null);

        try {
            const response = await searchService.searchCars(searchParams);
            console.log("Search results:", response);
        } catch (err) {
            setError(t("common.validation.form_error"));
            console.error("Search error:", err);
        } finally {
            dispatch({ type: "RESET_BOOKING" });
            dispatch({ type: "SET_SEARCH_DETAILS", payload: searchParams });
            setLoading(false);
            navigate("/booking");
        }
    }, [searchParams, t, dispatch, navigate]);

    const handlePickupDateChange = (date: Dayjs | null) => {
        setParams((prev) => ({
            ...prev,
            pickupDate: date ? dateUtils.formatDate(date.toDate()) : "",
        }));
    };

    const handlePickupTimeChange = (time: Dayjs | null) => {
        setParams((prev) => ({
            ...prev,
            pickupTime: time ? dateUtils.formatTime(time.toDate()) : "",
        }));
    };

    const handleDropoffDateChange = (date: Dayjs | null) => {
        setParams((prev) => ({
            ...prev,
            dropoffDate: date ? dateUtils.formatDate(date.toDate()) : "",
        }));
    };

    const handleDropoffTimeChange = (time: Dayjs | null) => {
        setParams((prev) => ({
            ...prev,
            dropoffTime: time ? dateUtils.formatTime(time.toDate()) : "",
        }));
    };

    return (
        <div className="flex z-1 flex-col justify-start w-full max-w-[1277px] bg-base px-6 sm:px-8 md:px-12 lg:px-[48px] pt-[24px] md:pt-[40px] pb-[30px] md:pb-[60px] rounded-[10px] gap-[10px] relative shadow-[4px_-8px_15px_-3px_rgba(0,0,0,0.1)]">
            <div className="absolute inline-flex right-4 sm:right-[64px] top-[15px] sm:top-[30px] w-fit rounded-[6px] p-[6px] bg-[#E3F0E6] gap-[4px]">
                <a className="flex text-[12px] text-secondary-1000 leading-[120%]">
                    ⚡{t("home.reservation_banner.title")}
                </a>
            </div>

            {/* Mobile Layout - Stack vertically */}
            {isMobile && (
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-base-black leading-[120%]">
                            {t("search.place")}
                        </label>
                        <select
                            className="w-full px-[14px] py-[12px] border rounded-[6px] appearance-none border-neutral-700 hover:border-primary"
                            value={searchParams.location}
                            onChange={(e) =>
                                setParams({
                                    ...searchParams,
                                    location: e.target.value,
                                })
                            }
                        >
                            {!searchParams.location && (
                                <option value="">{t("search.location")}</option>
                            )}
                            {mockLocations.map((location) => (
                                <option
                                    key={location.id}
                                    value={location.city}
                                >
                                    {location.city}, {location.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-base-black leading-[120%]">
                            {t("search.pickup")}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <DatePicker
                                style={{
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                }}
                                className="w-full"
                                onChange={handlePickupDateChange}
                            />
                            <TimePicker
                                style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }}
                                className="w-full"
                                format="HH:mm"
                                minuteStep={5}
                                onChange={handlePickupTimeChange}
                                needConfirm={false}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-base-black leading-[120%]">
                            {t("search.dropoff")}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <DatePicker
                                style={{
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                }}
                                className="w-full"
                                onChange={handleDropoffDateChange}
                            />
                            <TimePicker
                                style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }}
                                className="w-full"
                                format="HH:mm"
                                minuteStep={5}
                                onChange={handleDropoffTimeChange}
                                needConfirm={false}
                            />
                        </div>
                    </div>

                    {differentLocation && (
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] text-base-black leading-[120%]">
                                {t("search.custom_dropoff")}
                            </label>
                            <select
                                className="w-full px-[14px] py-[12px] border rounded-[6px] appearance-none border-neutral-700 hover:border-primary"
                                value={searchParams.dropoffLocation}
                                onChange={(e) =>
                                    setParams({
                                        ...searchParams,
                                        dropoffLocation: e.target.value,
                                    })
                                }
                            >
                                <option value="">{t("search.location")}</option>
                                {mockLocations.map((location) => (
                                    <option key={location.id} value={location.city}>
                                        {location.city}, {location.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="flex w-fit gap-[4px] mb-4">
                        <input
                            type="checkbox"
                            onClick={() => setDiffLocation(!differentLocation)}
                        />
                        <label className="text-[14px] text-neutral-700 leading-[120%]">
                            {t("search.alternateDropoff")}
                        </label>
                    </div>

                    <Button
                        variant="primary"
                        className="w-full"
                        onClick={handleSearch}
                        disabled={isLoading}
                    >
                        {isLoading ? t("common.form.sending") : t("search.button")}
                    </Button>
                </div>
            )}

            {/* Desktop Layout - Horizontal */}
            {!isMobile && (
                <>
                    <div className="inline-flex place-content-between">
                        <div className="flex flex-col gap-[8px] w-full md:w-[531px]">
                            <label className="flex text-[14px] text-base-black leading-[120%]">
                                {t("search.place")}
                            </label>
                            <select
                                className="w-full px-[14px] py-[12px] border rounded-[6px] appearance-none border-neutral-700 hover:border-primary"
                                value={searchParams.location}
                                onChange={(e) =>
                                    setParams({
                                        ...searchParams,
                                        location: e.target.value,
                                    })
                                }
                            >
                                {!searchParams.location && (
                                    <option value="">{t("search.location")}</option>
                                )}
                                {mockLocations.map((location) => (
                                    <option
                                        key={location.id}
                                        value={location.city}
                                    >
                                        {location.city}, {location.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col justify-end gap-[8px] w-[177px]">
                            <label className="flex text-[14px] text-base-black leading-[120%]">
                                {t("search.pickup")}
                            </label>
                            <div className="flex">
                                <DatePicker
                                    style={{
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 0,
                                    }}
                                    className="w-[87px] h-[42px]"
                                    onChange={handlePickupDateChange}
                                />
                                <TimePicker
                                    style={{
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }}
                                    className="w-[87px] h-[42px]"
                                    format="HH:mm"
                                    minuteStep={5}
                                    onChange={handlePickupTimeChange}
                                    needConfirm={false}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-end gap-[8px] w-[177px]">
                            <label className="flex text-[14px] text-base-black leading-[120%]">
                                {t("search.dropoff")}
                            </label>
                            <div className="flex">
                                <DatePicker
                                    style={{
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 0,
                                    }}
                                    className="w-[87px] h-[42px]"
                                    onChange={handleDropoffDateChange}
                                />
                                <TimePicker
                                    style={{
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }}
                                    className="w-[87px] h-[42px]"
                                    format="HH:mm"
                                    minuteStep={5}
                                    onChange={handleDropoffTimeChange}
                                    needConfirm={false}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-end align-middle">
                            <Button
                                className="w-[200px]"
                                variant="primary"
                                onClick={handleSearch}
                                disabled={isLoading}
                            >
                                {isLoading ? t("common.form.sending") : t("search.button")}
                            </Button>
                        </div>
                    </div>

                    {differentLocation && (
                        <div className="flex flex-col gap-[4px] w-[531px]">
                            <label className="flex text-[14px] text-base-black leading-[120%]">
                                {t("search.custom_dropoff")}
                            </label>
                            <select
                                className="w-full px-[14px] py-[12px] border rounded-[6px] appearance-none border-neutral-700 hover:border-primary"
                                value={searchParams.dropoffLocation}
                                onChange={(e) =>
                                    setParams({
                                        ...searchParams,
                                        dropoffLocation: e.target.value,
                                    })
                                }
                            >
                                <option value="">{t("search.location")}</option>
                                {mockLocations.map((location) => (
                                    <option key={location.id} value={location.city}>
                                        {location.city}, {location.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="flex w-fit gap-[4px]">
                        <input
                            type="checkbox"
                            onClick={() => setDiffLocation(!differentLocation)}
                        />
                        <label className="flex text-[14px] text-neutral-700 leading-[120%]">
                            {t("search.alternateDropoff")}
                        </label>
                    </div>
                </>
            )}

            {error && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-red-500 text-sm md:text-base">
                    {error}
                </div>
            )}
        </div>
    );
}
export default SearchBar;