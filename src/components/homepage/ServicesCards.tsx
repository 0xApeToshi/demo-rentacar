// src/components/homepage/ServicesCards.tsx
import { Card, CardContent } from "@/components/ui/card";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";

function ServicesCards() {
    const { t } = useTranslation();

    const cardData = [
        {
            id: 1,
            title: t("home.service_cards.car_rental.title"),
            subtitle: t("home.service_cards.car_rental.subtitle"),
            description: t("home.service_cards.car_rental.description"),
            image: "/assets/van.jpg",
            buttonVariant: "primary" as const,
        },
        {
            id: 2,
            title: t("home.service_cards.vans.title"),
            subtitle: t("home.service_cards.vans.subtitle"),
            description: t("home.service_cards.vans.description"),
            image: "/assets/mountain.jpg",
            buttonVariant: "primary" as const,
        },
        {
            id: 3,
            title: t("home.service_cards.long_term.title"),
            subtitle: t("home.service_cards.long_term.subtitle"),
            description: t("home.service_cards.long_term.description"),
            image: "/assets/road.jpg",
            buttonVariant: "primary" as const,
        },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] w-full overflow-x-auto md:overflow-visible py-4">
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    className={`flex flex-col items-center place-content-between min-w-[300px] md:w-1/3 h-[380px] sm:h-[416px] px-[20px] sm:px-[32px] py-[20px] sm:py-[24px] rounded-[8px] relative overflow-hidden bg-neutral-1000`}
                >
                    <div className="absolute inset-0 w-full h-full z-0">
                        <img
                            src={card.image}
                            alt=""
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 rotate-180 bg-gradient-to-t from-[rgba(34,31,31,1)] via-[rgba(34,31,31,0.8)] to-[rgba(34,31,31,0)]"></div>
                    </div>

                    <CardContent className="flex flex-col gap-[8px] z-1">
                        <h3 className="text-left h-[100px] sm:h-[140px] w-full text-[40px] sm:text-[64px] font-extrabold text-base leading-[110%]">
                            {card.title}
                        </h3>
                        <h4 className="text-left w-full text-[18px] sm:text-[24px] font-extrabold text-base leading-[120%]">
                            {card.subtitle}
                        </h4>
                        <p className="text-left h-[38px] w-full text-[14px] sm:text-[16px] font-semibold text-base leading-[120%]">
                            {card.description}
                        </p>
                    </CardContent>
                    <Button
                        variant={card.buttonVariant}
                        icon="show"
                        className="z-1 w-full"
                    >
                        {t("common.buttons.show")}
                    </Button>
                </Card>
            ))}
        </div>
    );
}

export default ServicesCards;