import { badgeType as Badge } from "./badgeTypes";
import { useTranslation } from "react-i18next";

export interface carTypes {
    id: number;
    name: string;
    image: string;
    type: "Luxury" | "Sports" | "SUV" | "Limousine" | "Family";
    description: string;
    price: string;
    passengers: number;
    luggage: number;
    doors: number;
    hasManualTransmission: boolean;
    buttonText: string;
    badges: Badge[];
}

export const carCategories = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "truck", label: "Truck" },
    { value: "hybrid", label: "Hybrid" },
    { value: "electric", label: "Electric" },
];

export const useCarCategories = () => {
    const { t } = useTranslation();

    return [
        { value: "sedan", label: t("car_categories.sedan") },
        { value: "suv", label: t("car_categories.suv") },
        { value: "truck", label: t("car_categories.truck") },
        { value: "hybrid", label: t("car_categories.hybrid") },
        { value: "electric", label: t("car_categories.electric") },
    ];
};