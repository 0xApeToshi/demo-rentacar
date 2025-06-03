import { Card, CardContent } from "@/components/ui/card";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";

function ServicesCards() {
    const { t } = useTranslation();

    const cardData = [
        {
            id: 1,
            title: "Car Rental",
            subtitle: "with personalized care for every client",
            description:
                "New vehicles, delivery to your address, and 24/7 support for worry-free driving.",
            image: "/src/assets/van.jfif",
            buttonVariant: "primary" as const,
        },
        {
            id: 2,
            title: "Optima Vans",
            subtitle: "Big plans? We have the van to match.",
            description:
                "Spacious, modern vans and fast, reliable service – wherever you need it.",
            image: "/src/assets/mountain.jfif",
            buttonVariant: "primary" as const,
        },
        {
            id: 3,
            title: "Long-Term Rental",
            subtitle: "Worry-free continuous care",
            description:
                "No long-term contracts, pay monthly and change vehicles when it suits you.",
            image: "/src/assets/road.jfif",
            buttonVariant: "primary" as const,
        },
    ];

    return (
        <div className="flex items-center justify-center gap-[20px] w-full">
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    className={`flex flex-col items-center place-content-between h-[416px] px-[32px] py-[24px] rounded-[8px] relative overflow-hidden bg-neutral-1000`}
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
                        <h3 className="text-left h-[140px] w-[348px] text-wrap text-[64px] font-extrabold text-base leading-[110%]">
                            {card.title}
                        </h3>
                        <h4 className="text-left w-[348px] text-wrap text-[24px] font-extrabold text-base leading-[120%]">
                            {card.subtitle}
                        </h4>
                        <p className="text-left h-[38px] w-[348px] text-wrap text-[16px] font-semibold text-base leading-[120%]">
                            {card.description}
                        </p>
                    </CardContent>
                    <Button
                        variant={card.buttonVariant}
                        icon="show"
                        className="z-1 w-full"
                    >
                        Show
                    </Button>
                </Card>
            ))}
        </div>
    );
}

export default ServicesCards;