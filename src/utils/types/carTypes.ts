import { badgeType as Badge } from "./badgeTypes";

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
