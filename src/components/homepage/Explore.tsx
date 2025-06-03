import { Card, CardContent } from "../ui/card";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import { TFunction } from "node_modules/i18next";

const getCardData = (t: TFunction<"translation", undefined>) => [
    {
        src: "src/assets/zagreb.jfif",
        title: "Zagreb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        src: "src/assets/istria.jfif",
        title: "Istria",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        src: "src/assets/dalmatia.jfif",
        title: "Dalmatia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        src: "src/assets/slavonia.jfif",
        title: "Slavonia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

function Explore() {
    const { t } = useTranslation();
    const data = getCardData(t);

    return (
        <div className="w-full bg-neutral-100 flex justify-center">
            <div className="w-[1440px] flex flex-col items-start gap-[40px] px-[120px] pt-[80px] pb-[100px]">
                <div className="w-full flex justify-between items-end">
                    <div className="flex text-left flex-col gap-[16px]">
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="w-[842px] text-primary text-[46px] font-extrabold leading-[110%] flex justify-start">
                                Istražite Hrvatsku
                            </h3>
                            <p className="text-base-black text-[20px] font-extrabold leading-[120%]">
                                Kao pravi lokalac
                            </p>
                        </div>
                        <p className="w-[409px] text-base-black text-[16px] leading-[150%]">
                            Otkrijte najbolje rute, skrivene dragulje i
                            nezaobilazne destinacije uz naše vodiče za
                            putovanja.
                        </p>
                    </div>
                    <Button variant="secondary">Vidi sve</Button>
                </div>
                <div className="flex justify-between w-full">
                    {data.map((loc) => (
                        <Card className="relative w-[285px] rounded-[8px] p-0 overflow-hidden">
                            <CardContent className="w-full h-full flex flex-col p-0 gap-[24px]">
                                <img
                                    className="w-full h-[284px] rounded-[8px] object-cover"
                                    src={loc.src}
                                ></img>
                                <div className="flex text-left px-[16px] flex-col gap-[4px]">
                                    <p className="text-primary font-extrabold leading-[120%] text-[28px]">
                                        {loc.title}
                                    </p>
                                    <p className="text-base-black leading-[120%] text-[16px]">
                                        {loc.description}
                                    </p>
                                </div>
                                <div className="flex justify-between px-[20px] py-[8px] border-t border-secondary-100">
                                    <p className="text-base-black leading-[120%] text-[16px]">
                                        4 min čitanja
                                    </p>
                                    <a href="/whatever">
                                        <img
                                            src="/src/assets/hyperlink.svg"
                                            className="w-[24px] h-[24px]"
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
