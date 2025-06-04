import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import RangeSlider from "../common/RangeSlider";
import ProgressSteps from "./ProgressSteps";
import { carTypes } from "@/utils/types/carTypes";
import Button from "../common/Button";
import { useBooking } from "@/context/BookingContext";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FilterIcon, X } from "lucide-react";

const carData: carTypes[] = [
    {
        id: 1,
        name: "Suzuki SWIFT",
        image: "/assets/suzukiSwift.png",
        description: "Free GPS included",
        type: "Family",
        price: "20 €",
        passengers: 5,
        luggage: 4,
        doors: 4,
        hasManualTransmission: true,
        buttonText: "Select",
        badges: [
            {
                text: "Best value for money",
                type: "offer",
            },
        ],
    },
    {
        id: 2,
        name: "Opel Corsa Aut",
        image: "/assets/opelCorsa.png",
        description: "Free GPS included",
        type: "Luxury",

        price: "20 €",
        passengers: 5,
        luggage: 4,
        doors: 4,
        hasManualTransmission: true,
        buttonText: "Select",
        badges: [
            {
                text: "Limited availability",
                type: "warning",
            },
            {
                text: "Eco-friendly",
                type: "benefit",
            },
        ],
    },
    {
        id: 3,
        name: "Fiat 500, Cabrio",
        image: "/assets/fiat500.png",
        description: "Free GPS included",
        type: "Sports",

        price: "44 €",
        passengers: 5,
        luggage: 1,
        doors: 2,
        hasManualTransmission: true,
        buttonText: "Select",
        badges: [],
    },
    {
        id: 4,
        name: "Opel Crossland",
        image: "/assets/opelCrossland.png",
        description: "Free GPS included",
        type: "SUV",

        price: "63 €",
        passengers: 5,
        luggage: 4,
        doors: 4,
        hasManualTransmission: true,
        buttonText: "Select",
        badges: [],
    },
];

function CarSelection() {
    const { dispatch } = useBooking();
    const navigation = useNavigate();
    const { t } = useTranslation();
    const [showFilters, setShowFilters] = useState(false);

    const [sortBy, setSortBy] = useState<string>("Featured");
    const [carTypes, setCarTypes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({
        min: "12€",
        max: "124€",
    });
    const [gearshiftType, setGearshiftType] = useState<string>("Manual");
    const [passengers, setPassengers] = useState<number[]>([]);
    const [appliedFilters, setAppliedFilters] = useState<{
        sortBy: string;
        carTypes: string[];
        priceRange: { min: string; max: string };
        gearshiftType: string;
        passengers: number[];
    }>({
        sortBy: "Featured",
        carTypes: [],
        priceRange: { min: "12€", max: "124€" },
        gearshiftType: "Manual",
        passengers: [],
    });

    const [filteredCars, setFilteredCars] = useState(carData);

    useEffect(() => {
        // Close filters on larger screens
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowFilters(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleCarType = (type: string) => {
        if (carTypes.includes(type)) {
            setCarTypes(carTypes.filter((t) => t !== type));
        } else {
            setCarTypes([...carTypes, type]);
        }
    };

    const togglePassengers = (num: number) => {
        if (passengers.includes(num)) {
            setPassengers(passengers.filter((p) => p !== num));
        } else {
            setPassengers([...passengers, num]);
        }
    };

    const handlePriceRangeChange = (range: { min: string; max: string }) => {
        setPriceRange(range);
    };

    const handleFilterClick = () => {
        setAppliedFilters({
            sortBy,
            carTypes,
            priceRange,
            gearshiftType,
            passengers,
        });

        // Close filters panel on mobile after applying
        if (window.innerWidth < 768) {
            setShowFilters(false);
        }

        filterCars();
    };

    const filterCars = () => {
        const filtered = carData
            .filter((car) => {
                // Filter by car type
                if (
                    appliedFilters.carTypes.length > 0 &&
                    !appliedFilters.carTypes.includes(car.type)
                ) {
                    return false;
                }

                // Filter by transmission type
                if (
                    appliedFilters.gearshiftType === "Automatic" &&
                    car.hasManualTransmission
                ) {
                    return false;
                }
                if (
                    appliedFilters.gearshiftType === "Manual" &&
                    !car.hasManualTransmission
                ) {
                    return false;
                }

                // Filter by passengers
                if (
                    appliedFilters.passengers.length > 0 &&
                    !appliedFilters.passengers.includes(car.passengers)
                ) {
                    return false;
                }

                // Filter by price
                const carPriceNum = parseInt(car.price.replace(/[^0-9]/g, ""));
                const minPriceNum = parseInt(
                    appliedFilters.priceRange.min.replace(/[^0-9]/g, "")
                );
                const maxPriceNum = parseInt(
                    appliedFilters.priceRange.max.replace(/[^0-9]/g, "")
                );

                if (
                    isNaN(carPriceNum) ||
                    isNaN(minPriceNum) ||
                    isNaN(maxPriceNum)
                ) {
                    return true;
                }

                if (
                    carPriceNum < minPriceNum ||
                    (maxPriceNum < 120 && carPriceNum > maxPriceNum)
                ) {
                    return false;
                }

                return true;
            })
            .sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
                const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));

                if (appliedFilters.sortBy === "High to Low") {
                    return priceB - priceA;
                } else if (appliedFilters.sortBy === "Low to High") {
                    return priceA - priceB;
                }
                return 0;
            });

        setFilteredCars(filtered);
    };

    useEffect(() => {
        filterCars();
    }, [appliedFilters]);

    useEffect(() => {
        dispatch({ type: "RESET_BOOKING" });
    }, []);

    const handleCarSelect = (car: carTypes) => {
        dispatch({ type: "SELECT_CAR", payload: car });
        dispatch({
            type: "UPDATE_TOTAL_PRICE",
            payload: parseInt(car.price.replace(/[^0-9]/g, "")),
        });
        navigation("/booking/protection-products");
    };

    const toggleFiltersPanel = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] md:py-[80px] flex flex-col gap-[30px] md:gap-[60px]">
                <ProgressSteps currentStep={1} />

                {/* Mobile filter toggle */}
                <div className="flex justify-between items-center md:hidden">
                    <h2 className="text-xl font-medium">{t("booking_process.car_selection.filter_title")}</h2>
                    <button
                        onClick={toggleFiltersPanel}
                        className="flex items-center gap-1 bg-white p-2 rounded-lg shadow-sm border border-gray-200"
                    >
                        {showFilters ? <X size={18} /> : <FilterIcon size={18} />}
                        <span>{showFilters ? t("common.close") : t("common.filter")}</span>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[21px]">
                    {/* Filters panel - hidden on mobile until toggled */}
                    <div className={`${showFilters ? 'fixed inset-0 z-50 bg-white p-4 overflow-auto' : 'hidden'} md:relative md:block md:z-auto md:bg-transparent md:p-0 md:overflow-visible md:w-[287px] h-fit py-[12px] px-[20px] flex flex-col gap-[20px] md:gap-[37px] bg-white rounded-[12px] text-base-black`}>
                        {/* Mobile close button */}
                        <div className="flex justify-between items-center md:hidden">
                            <h3 className="font-bold text-lg">{t("booking_process.car_selection.filter_title")}</h3>
                            <button
                                onClick={toggleFiltersPanel}
                                className="p-2"
                                aria-label="Close filters"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <h4 className="font-gilroy text-left text-lg md:text-[20px] leading-[120%] hidden md:block">
                            {t("booking_process.car_selection.filter_title")}
                        </h4>

                        <div className="flex flex-col items-start gap-[8px]">
                            <p className="font-gilroy leading-[120%]">
                                {t("booking_process.car_selection.sort_by")}
                            </p>
                            <fieldset className="flex flex-col">
                                <div className="flex gap-[8px] leading-[150%]">
                                    <input
                                        type="radio"
                                        id="featured"
                                        value="Featured"
                                        checked={sortBy === "Featured"}
                                        onChange={() => setSortBy("Featured")}
                                    />
                                    <label htmlFor="featured">
                                        {t("booking_process.car_selection.featured")}
                                    </label>
                                </div>
                                <div className="flex gap-[8px] leading-[150%]">
                                    <input
                                        type="radio"
                                        id="hiLow"
                                        value="High to Low"
                                        checked={sortBy === "High to Low"}
                                        onChange={() => setSortBy("High to Low")}
                                    />
                                    <label htmlFor="hiLow">
                                        {t("booking_process.car_selection.price_high_low")}
                                    </label>
                                </div>
                                <div className="flex gap-[8px] leading-[150%]">
                                    <input
                                        type="radio"
                                        id="lowHi"
                                        value="Low to High"
                                        checked={sortBy === "Low to High"}
                                        onChange={() => setSortBy("Low to High")}
                                    />
                                    <label htmlFor="lowHi">
                                        {t("booking_process.car_selection.price_low_high")}
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <div className="flex flex-col items-start gap-[8px]">
                            <p className="font-gilroy leading-[120%]">
                                {t("booking_process.car_selection.car_type")}
                            </p>
                            <div className="flex flex-wrap gap-[8px]">
                                {["Luxury", "Sports", "SUV", "Limousine", "Family"].map((type) => (
                                    <button
                                        key={type}
                                        className={`p-[12px] text-[14px] leading-[120%] rounded-[999px] ${carTypes.includes(type) ? "bg-secondary-200" : "bg-neutral-100"
                                            }`}
                                        onClick={() => toggleCarType(type)}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-[8px]">
                            <p className="font-gilroy leading-[120%]">
                                {t("booking_process.car_selection.price_per_day")}
                            </p>
                            <RangeSlider
                                initialMin={priceRange.min}
                                initialMax={priceRange.max}
                                onChange={handlePriceRangeChange}
                            />
                        </div>

                        <div className="flex flex-col items-start gap-[8px]">
                            <p className="font-gilroy leading-[120%]">
                                {t("booking_process.car_selection.gearshift")}
                            </p>
                            <div className="flex gap-[8px]">
                                <button
                                    className={`flex gap-[3px] p-[8px] rounded-[999px] ${gearshiftType === "Automatic" ? "bg-secondary-200" : "bg-neutral-100"
                                        }`}
                                    onClick={() => setGearshiftType("Automatic")}
                                >
                                    <img src="/assets/automaticIcon.svg" alt="Automatic" />
                                    {t("booking_process.car_selection.automatic")}
                                </button>
                                <button
                                    className={`flex gap-[3px] p-[8px] rounded-[999px] ${gearshiftType === "Manual" ? "bg-secondary-200" : "bg-neutral-100"
                                        }`}
                                    onClick={() => setGearshiftType("Manual")}
                                >
                                    <img src="/assets/manualIcon.svg" alt="Manual" />
                                    {t("booking_process.car_selection.manual")}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-[8px]">
                            <p className="font-gilroy leading-[120%]">
                                {t("booking_process.car_selection.passengers")}
                            </p>
                            <div className="flex flex-wrap gap-[8px]">
                                {[2, 3, 4, 5, 6].map((number) => (
                                    <button
                                        key={number}
                                        className={`p-[12px] flex gap-[3px] text-[14px] leading-[120%] rounded-[999px] ${passengers.includes(number) ? "bg-secondary-200" : "bg-neutral-100"
                                            }`}
                                        onClick={() => togglePassengers(number)}
                                    >
                                        <img
                                            src="/assets/personIcon.svg"
                                            className="w-[20px] h-[20px]"
                                            alt="Person"
                                        />
                                        {number}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            className="w-full py-[12px] px-[24px] text-base font-gilroy rounded-[8px] bg-success-700 text-white"
                            onClick={handleFilterClick}
                        >
                            {t("booking_process.car_selection.filter_button")}
                        </button>
                    </div>

                    {/* Car grid */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px] md:gap-[32px]">
                        {filteredCars.map((car) => (
                            <Card
                                key={car.id}
                                className="flex-shrink-0 max-h-[476px] py-0 flex-col w-full rounded-[8px] overflow-hidden border border-solid border-neutral-200 shadow-[7px_4px_13.2px_#00000040]"
                            >
                                <div className="h-[160px] sm:h-[209px] flex flex-col items-center justify-center bg-white">
                                    <img
                                        className="max-h-[150px] sm:max-h-[205px] object-contain"
                                        alt={car.name}
                                        src={car.image}
                                    />
                                </div>
                                <CardContent className="flex flex-col items-end gap-[20px] p-[16px] sm:p-[20px] bg-base">
                                    <div className="flex flex-col gap-[16px] sm:gap-[20px] w-full">
                                        <div className="flex flex-col text-left items-start gap-[8px] sm:gap-[12px]">
                                            <h4 className="text-xl sm:text-[24px] font-gilroy leading-[120%] text-primary">
                                                {car.name}
                                            </h4>
                                            <p className="max-w-[226px] text-base-black leading-[120%] text-sm sm:text-[16px]">
                                                {car.description}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-[8px]">
                                                <div className="inline-flex items-center justify-center p-2 bg-secondary-100 rounded-md">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 28 28"
                                                        fill="none"
                                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                                    >
                                                        <path
                                                            d="M14 4.66675C15.2377 4.66675 16.4247 5.15841 17.2998 6.03358C18.175 6.90875 18.6667 8.09574 18.6667 9.33342C18.6667 10.5711 18.175 11.7581 17.2998 12.6332C16.4247 13.5084 15.2377 14.0001 14 14.0001C12.7623 14.0001 11.5753 13.5084 10.7002 12.6332C9.82499 11.7581 9.33332 10.5711 9.33332 9.33342C9.33332 8.09574 9.82499 6.90875 10.7002 6.03358C11.5753 5.15841 12.7623 4.66675 14 4.66675ZM14 16.3334C19.1567 16.3334 23.3333 18.4217 23.3333 21.0001V23.3334H4.66666V21.0001C4.66666 18.4217 8.84332 16.3334 14 16.3334Z"
                                                            fill="#1E3555"
                                                        />
                                                    </svg>
                                                    {car.passengers && (
                                                        <span className="text-secondary-900 text-center">
                                                            {car.passengers}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="inline-flex items-center justify-center p-2 bg-secondary-100 rounded-md">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 28 28"
                                                        fill="none"
                                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                                    >
                                                        <path
                                                            d="M19.8683 7.00016C21.1283 7.00016 22.1667 8.02683 22.1667 9.3335V22.1668C22.1667 23.4852 21.1283 24.5002 19.8683 24.5002C19.8683 25.1768 19.32 25.6668 18.6667 25.6668C18.0833 25.6668 17.5 25.1768 17.5 24.5002H10.5C10.5 25.1768 9.91666 25.6668 9.33333 25.6668C8.68 25.6668 8.13166 25.1768 8.13166 24.5002C6.87166 24.5002 5.83333 23.4852 5.83333 22.1668V9.3335C5.83333 8.02683 6.87166 7.00016 8.13166 7.00016H10.5V3.50016C10.5 2.8235 11.0367 2.3335 11.6667 2.3335H16.3333C16.9633 2.3335 17.5 2.8235 17.5 3.50016V7.00016H19.8683ZM15.75 7.00016V4.0835H12.25V7.00016H15.75ZM9.33333 10.5002V21.0002H11.0833V10.5002H9.33333ZM16.9167 10.5002V21.0002H18.6667V10.5002H16.9167ZM13.125 10.5002V21.0002H14.875V10.5002H13.125Z"
                                                            fill="#1E3555"
                                                        />
                                                    </svg>
                                                    {car.luggage && (
                                                        <span className="text-secondary-900 text-center">
                                                            {car.luggage}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="inline-flex items-center justify-center p-2 bg-secondary-100 rounded-md">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 28 28"
                                                        fill="none"
                                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                                    >
                                                        <path
                                                            d="M20.8421 15.6111H17.6842V17.7222H20.8421V15.6111ZM24 23H4V12.4444L12.4211 4H22.9474C23.2265 4 23.4943 4.11121 23.6917 4.30917C23.8891 4.50712 24 4.7756 24 5.05556V23ZM13.2947 6.11111L6.97895 12.4444H21.8947V6.11111H13.2947Z"
                                                            fill="#1E3555"
                                                        />
                                                    </svg>
                                                    {car.doors && (
                                                        <span className="text-secondary-900 text-center">
                                                            {car.doors}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="inline-flex items-center justify-center p-2 bg-secondary-100 rounded-md">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 28 28"
                                                        fill="none"
                                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                                    >
                                                        <path
                                                            d="M9.33332 5.8335H4.66666V2.3335H9.33332V5.8335ZM4.66666 25.6668H9.33332V22.1668H4.66666V25.6668ZM16.3333 2.3335H11.6667V5.8335H16.3333V2.3335ZM11.6667 25.6668H16.3333V22.1668H11.6667V25.6668ZM18.6667 2.3335V5.8335H23.3333V2.3335H18.6667ZM19.8333 12.8335H15.1667V8.16683H12.8333V12.8335H8.16666V8.16683H5.83332V19.8335H8.16666V15.1668H12.8333V19.8335H15.1667V15.1668H22.1667V8.16683H19.8333V12.8335Z"
                                                            fill="#1E3555"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="text-left text-[14px] leading-[120%] text-secondary-500 underline">
                                            {t("booking_process.car_selection.details")}
                                        </a>

                                        <div className="flex justify-between items-center">
                                            <span className="text-base-black font-gilroy leading-[120%] text-2xl sm:text-[32px]">
                                                {car.price}
                                            </span>
                                            <Button
                                                variant="primary"
                                                className="bg-success-700 text-sm sm:text-base"
                                                onClick={() => handleCarSelect(car)}
                                            >
                                                {t("booking_process.car_selection.select_button")}
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Empty state if no cars match filters */}
                        {filteredCars.length === 0 && (
                            <div className="col-span-full flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow text-center">
                                <img
                                    src="/assets/noCars.svg"
                                    alt="No cars found"
                                    className="w-24 h-24 mb-4 opacity-60"
                                />
                                <h3 className="text-xl font-medium mb-2">
                                    {t("booking_process.car_selection.no_cars_found")}
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    {t("booking_process.car_selection.try_different_filters")}
                                </p>
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        setCarTypes([]);
                                        setPassengers([]);
                                        setGearshiftType("Manual");
                                        setPriceRange({ min: "12€", max: "124€" });
                                        setSortBy("Featured");
                                        handleFilterClick();
                                    }}
                                >
                                    {t("booking_process.car_selection.reset_filters")}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarSelection;