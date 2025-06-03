import { useCallback, useState } from "react";
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

type Location = {
    id: string;
    name: string;
    city: string;
};
const mockLocations: Location[] = [
    { id: "1", name: "Airport", city: "Zagreb" },
    { id: "2", name: "Airport", city: "Split" },
    { id: "3", name: "Center", city: "Zadar" },
    { id: "4", name: "Bus Station", city: "Rijeka" },
];

function SearchBar() {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [differentLocation, setDiffLocation] = useState(false);
    const { state, dispatch } = useBooking();
    const navigate = useNavigate();

    const [searchParams, setParams] = useState<SearchState>(state.search);

    const handleSearch = useCallback(async () => {
        if (!searchParams.location) {
            setError("Please select a location");
            return;
        }
        if (!searchParams.pickupDate || !searchParams.pickupTime) {
            setError("Please select pickup date and time");
            return;
        }
        if (!searchParams.dropoffDate || !searchParams.dropoffTime) {
            setError("Please select dropoff date and time");
            return;
        }

        const pickup = new Date(
            `${searchParams.pickupDate} ${searchParams.pickupTime}`
        );
        const dropoff = new Date(
            `${searchParams.dropoffDate} ${searchParams.dropoffTime}`
        );

        if (!dateUtils.isValidDateRange(pickup, dropoff)) {
            setError("Pickup time must be before dropoff time");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await searchService.searchCars(searchParams);
            console.log("Search results:", response);
        } catch (err) {
            setError("An error occurred while searching. Please try again.");
            console.error("Search error:", err);
        } finally {
            dispatch({ type: "RESET_BOOKING" });
            dispatch({ type: "SET_SEARCH_DETAILS", payload: searchParams });
            setLoading(false);
            navigate("/booking");
        }
    }, [searchParams]);

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

    const { t } = useTranslation();

    return (
        <div className="flex z-1 flex-col justify-start w-[1277px] bg-base px-[48px] pt-[40px] pb-[60px] rounded-[10px] gap-[10px] relative shadow-[4px_-8px_15px_-3px_rgba(0,0,0,0.1)]">
            <div className="absolute inline-flex right-[64px] top-[30px] w-fit rounded-[6px] p-[6px] bg-[#E3F0E6] gap-[4px]">
                <a className="flex text-[12px] text-secondary-1000 leading-[120%]">
                    ⚡Rent your car in 60 seconds
                </a>
            </div>

            <div className="inline-flex place-content-between ">
                <div className="flex flex-col gap-[8px] w-[531px]">
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
                                selected={
                                    searchParams.location === location.city
                                }
                            >
                                {location.city}, {location.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col justify-end gap-[8px] w-[177px] ">
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
                        ></DatePicker>
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
                        ></TimePicker>
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
                        ></DatePicker>
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
                        ></TimePicker>
                    </div>
                </div>

                <div className="flex flex-col justify-end align-middle">
                    <Button
                        className="w-[200px]"
                        variant="primary"
                        onClick={handleSearch}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : t("search.button")}
                    </Button>
                </div>
                {error && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-red-500">
                        {error}
                    </div>
                )}
            </div>

            {differentLocation && (
                <div className="flex flex-col gap-[4px] w-[531px]">
                    <label className="flex text-[14px] text-base-black leading-[120%]">
                        Custom dropoff
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
                            <option key={location.id} value={location.id}>
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
                ></input>
                <label className="flex text-[14px] text-neutral-700 leading-[120%]">
                    {t("search.alternateDropoff")}
                </label>
            </div>
        </div>
    );
}
export default SearchBar;