// src/components/homepage/Explore.tsx
import { Card, CardContent } from "../ui/card";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

// TODO use translation
const getCardData = (_t: TFunction<"translation", undefined>) => [
    {
        src: "/assets/zagreb.jpg",
        title: "Zagreb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        src: "/assets/istria.jpg",
        title: "Istria",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        src: "/assets/dalmatia.jpg",
        title: "Dalmatia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        src: "/assets/slavonia.jpg",
        title: "Slavonia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

function Explore() {
    const { t } = useTranslation();
    const data = getCardData(t);

    return (
        <div className="w-full bg-neutral-100 flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-start gap-[20px] sm:gap-[30px] md:gap-[40px] px-4 sm:px-6 md:px-8 lg:px-[120px] pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[60px] sm:pb-[80px] md:pb-[100px]">
                <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0">
                    <div className="flex text-left flex-col gap-[8px] md:gap-[16px]">
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="w-full max-w-[842px] text-primary text-3xl sm:text-4xl md:text-[46px] font-extrabold leading-[110%] flex justify-start">
                                {t("home.explore.title")}
                            </h3>
                            <p className="text-base-black text-lg sm:text-xl md:text-[20px] font-extrabold leading-[120%]">
                                {t("home.explore.subtitle")}
                            </p>
                        </div>
                        <p className="w-full max-w-[409px] text-base-black text-[16px] leading-[150%]">
                            {t("home.explore.description")}
                        </p>
                    </div>
                    <Button variant="secondary" className="self-start md:self-auto">
                        {t("common.buttons.see_all")}
                    </Button>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                    {data.map((loc, index) => (
                        <Card key={index} className="relative w-full rounded-[8px] p-0 overflow-hidden">
                            <CardContent className="w-full h-full flex flex-col p-0 gap-[24px]">
                                <img
                                    className="w-full h-[220px] md:h-[284px] rounded-t-[8px] object-cover"
                                    src={loc.src}
                                    alt={loc.title}
                                ></img>
                                <div className="flex text-left px-[16px] flex-col gap-[4px]">
                                    <p className="text-primary font-extrabold leading-[120%] text-[24px] md:text-[28px]">
                                        {loc.title}
                                    </p>
                                    <p className="text-base-black leading-[120%] text-[14px] md:text-[16px]">
                                        {loc.description}
                                    </p>
                                </div>
                                <div className="flex justify-between px-[20px] py-[8px] border-t border-secondary-100">
                                    <p className="text-base-black leading-[120%] text-[14px] md:text-[16px]">
                                        {t("home.explore.reading_time")}
                                    </p>
                                    <a href="/whatever">
                                        <img
                                            src="/assets/hyperlink.svg"
                                            className="w-[24px] h-[24px]"
                                            alt="Read more"
                                        ></img>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;