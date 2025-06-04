// src/components/common/CarCarousel.tsx
import { Card, CardContent } from "@/components/ui/card";
import { carTypes as CarData } from "@/utils/types/carTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface CarCarouselProps {
    city?: string;
}

function CarCarousel({ city }: CarCarouselProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const carData: CarData[] = [
        {
            id: 1,
            name: "Suzuki SWIFT",
            image: "/assets/suzukiSwift.png",
            description: t("cars.features.unlimited_mileage"),
            type: "Family",
            price: "20 €",
            passengers: 5,
            luggage: 4,
            doors: 4,
            hasManualTransmission: true,
            buttonText: t("common.buttons.book"),
            badges: [
                {
                    text: t("cars.badges.best_value"),
                    type: "offer",
                },
            ],
        },
        {
            id: 2,
            name: "Opel Corsa Aut",
            image: "/assets/opelCorsa.png",
            description: t("cars.features.unlimited_mileage"),
            type: "Luxury",
            price: "20 €",
            passengers: 5,
            luggage: 4,
            doors: 4,
            hasManualTransmission: true,
            buttonText: t("common.buttons.book"),
            badges: [
                {
                    text: t("cars.badges.limited"),
                    type: "warning",
                },
                {
                    text: t("cars.badges.eco_friendly"),
                    type: "benefit",
                },
            ],
        },
        {
            id: 3,
            name: "Fiat 500, Cabrio",
            image: "/assets/fiat500.png",
            description: t("cars.features.unlimited_mileage"),
            type: "Sports",
            price: "44 €",
            passengers: 5,
            luggage: 1,
            doors: 2,
            hasManualTransmission: true,
            buttonText: t("common.buttons.book"),
            badges: [],
        },
        {
            id: 4,
            name: "Opel Crossland",
            image: "/assets/opelCrossland.png",
            description: t("cars.features.free_gps"),
            type: "SUV",
            price: "63 €",
            passengers: 5,
            luggage: 4,
            doors: 4,
            hasManualTransmission: true,
            buttonText: t("common.buttons.book"),
            badges: [],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
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

    const goToSlide = useCallback(
        (index: number) => {
            setCurrentIndex(() => {
                const newIndex = (index + carData.length) % carData.length;
                return newIndex;
            });
        },
        [carData.length]
    );

    const nextSlide = useCallback(() => {
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
        }
    }, [nextSlide, isPaused]);

    const handleBookClick = (car: CarData) => {
        // Add city parameter if available
        const locationParam = city ? `&location=${city}` : '';
        navigate(`/booking?carId=${car.id}${locationParam}`);
    };

    // For mobile view, just show one car at a time
    if (isMobile) {
        return (
            <div className="w-full flex flex-col gap-[22px]">
                <div
                    className="overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="flex flex-col items-center">
                        {carData.map((car, index) => (
                            <Card
                                key={car.id}
                                className={`flex-shrink-0 py-0 flex-col w-full rounded-[8px] overflow-hidden border border-solid border-neutral-200 shadow-[7px_4px_13.2px_#00000040] transition-all duration-500 ease-in-out mb-4 ${index === currentIndex ? "block" : "hidden"}`}
                            >
                                <div className="absolute pt-[4px] pl-[4px] w-fit flex flex-col gap-[4px]">
                                    {car.badges.map((badge, idx) => (
                                        <Badge
                                            key={idx}
                                            type={badge.type}
                                            text={badge.text}
                                        />
                                    ))}
                                </div>

                                <div className="h-[180px] px-[20px] flex flex-col items-center justify-center bg-white">
                                    <img
                                        className="max-h-[160px] object-contain"
                                        alt={car.name}
                                        src={car.image}
                                    />
                                </div>
                                <CardContent className="flex flex-col items-end gap-[20px] p-[20px] bg-base">
                                    <div className="flex items-start justify-between w-full">
                                        <div className="flex flex-col text-left items-start gap-3">
                                            <h3 className="text-[20px] font-extrabold leading-[120%] text-primary">
                                                {car.name}
                                            </h3>
                                            <p className="max-w-[226px] text-base-black leading-[120%] text-[14px]">
                                                {car.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col text-right items-end">
                                            <span className="text-neutral-500 leading-[150%] text-[14px]">
                                                {t("cars.features.from")}
                                            </span>
                                            <span className="text-base-black font-extrabold leading-[120%] text-[24px]">
                                                {car.price}
                                            </span>
                                            <span className="text-neutral-500 leading-[150%] text-[14px]">
                                                {t("cars.features.per_day")}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between w-full">
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex items-center justify-center p-2 bg-secondary-100 rounded-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 28 28"
                                                    fill="none"
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
                                        </div>

                                        <Button
                                            variant="primary"
                                            icon="search"
                                            onClick={() => handleBookClick(car)}
                                            className="text-sm px-3"
                                        >
                                            {car.buttonText}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-[25px]">
                    <button
                        onClick={prevSlide}
                        className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 border border-secondary-900"
                        aria-label={t("common.buttons.previous_slide")}
                    >
                        <ChevronLeft className="w-6 h-6 text-secondary-700" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 border border-secondary-900"
                        aria-label={t("common.buttons.next_slide")}
                    >
                        <ChevronRight className="w-6 h-6 text-secondary-700" />
                    </button>
                </div>
            </div>
        );
    }

    // Desktop version
    return (
        <div className="w-full flex flex-col gap-[22px]">
            <div
                className="overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className="flex gap-[32px] transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex === carData.length - 1
                            ? (carData.length - 2) * (472 + 32)
                            : currentIndex * (472 + 32)
                            }px)`,
                    }}
                >
                    {carData.map((car, index) => (
                        <Card
                            key={car.id}
                            className={`flex-shrink-0 py-0 flex-col w-[472px] rounded-[8px] overflow-hidden border border-solid border-neutral-200 shadow-[7px_4px_13.2px_#00000040] transition-all duration-500 ease-in-out ${index === currentIndex
                                ? "scale-100"
                                : "scale-80"
                                }`}
                        >
                            <div className="absolute pt-[4px] pl-[4px] w-fit flex flex-col gap-[4px]">
                                {car.badges.map((badge, idx) => (
                                    <Badge
                                        key={idx}
                                        type={badge.type}
                                        text={badge.text}
                                    />
                                ))}
                            </div>

                            <div className="h-[209px] px-[44px] flex flex-col items-center justify-center bg-white">
                                <img
                                    className="max-h-[205px] object-contain"
                                    alt={car.name}
                                    src={car.image}
                                />
                            </div>
                            <CardContent className="flex flex-col items-end gap-[20px] p-[20px] bg-base">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex flex-col text-left items-start gap-3">
                                        <h3 className="text-[24px] font-extrabold leading-[120%] text-primary">
                                            {car.name}
                                        </h3>
                                        <p className="max-w-[226px] text-base-black leading-[120%] text-[16px]">
                                            {car.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col text-right items-end">
                                        <span className="text-neutral-500 leading-[150%] text-[16px]">
                                            {t("cars.features.from")}
                                        </span>
                                        <span className="text-base-black font-extrabold leading-[120%] text-[32px]">
                                            {car.price}
                                        </span>
                                        <span className="text-neutral-500 leading-[150%] text-[16px]">
                                            {t("cars.features.per_day")}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <div className="inline-flex items-center justify-center p-2 bg-secondary-100 rounded-md">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
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
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
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
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
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
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9.33332 5.8335H4.66666V2.3335H9.33332V5.8335ZM4.66666 25.6668H9.33332V22.1668H4.66666V25.6668ZM16.3333 2.3335H11.6667V5.8335H16.3333V2.3335ZM11.6667 25.6668H16.3333V22.1668H11.6667V25.6668ZM18.6667 2.3335V5.8335H23.3333V2.3335H18.6667ZM19.8333 12.8335H15.1667V8.16683H12.8333V12.8335H8.16666V8.16683H5.83332V19.8335H8.16666V15.1668H12.8333V19.8335H15.1667V15.1668H22.1667V8.16683H19.8333V12.8335Z"
                                                    fill="#1E3555"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <Button
                                        variant="primary"
                                        icon="search"
                                        onClick={() => handleBookClick(car)}
                                    >
                                        {car.buttonText}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-[25px]">
                <button
                    onClick={prevSlide}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 border border-secondary-900"
                    aria-label={t("common.buttons.previous_slide")}

                >
                    <ChevronLeft className="w-6 h-6 text-secondary-700" />
                </button>

                <button
                    onClick={nextSlide}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 border border-secondary-900"
                    aria-label={t("common.buttons.next_slide")}
                >
                    <ChevronRight className="w-6 h-6 text-secondary-700" />
                </button>
            </div>
        </div>
    );
}

export default CarCarousel;