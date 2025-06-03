import { Card, CardContent } from "@/components/ui/card";
import Button from "../common/Button";

function CategoryShower() {
    const features = [
        {
            id: "1",
            text: "3000 kms/month",
        },
        {
            id: "2",
            text: "Standard roadside assistance",
        },
        {
            id: "3",
            text: "Maintainance",
        },
        {
            id: "4",
            text: (
                <span>
                    1x <span className="text-[#337540]">Free</span> additional
                    driver
                </span>
            ),
        },
    ];

    const categoryData = [
        {
            id: "1",
            src: "/src/assets/miniCoverImage.png",
            category: "Mini",
            tagline: "Fiat 500 or similar model",
        },
        {
            id: "2",
            src: "/src/assets/economyCoverImage.png",
            category: "Economy",
            tagline: "Opel Corsa or similar model",
        },
        {
            id: "3",
            src: "/src/assets/suvCoverImage.png",
            category: "SUV",
            tagline: "Mazda CX 30 or similar model",
        },
    ];

    return (
        <div className="w-full bg-base flex justify-center">
            <section className="w-[1440px] px-[160px] py-[80px] flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[16px] text-left">
                    <h3 className="text-[46px] text-primary font-extrabold leading-[110%]">
                        Bez briga, samo nova i pouzdana vozila.
                    </h3>
                    <p className="text-[20px] text-base-black font-extrabold leading-[120%]">
                        Odaberite vozila
                    </p>
                </div>
                <div className="flex gap-[16px]">
                    {categoryData.map((category) => (
                        <Card
                            key={category.id}
                            className="flex py-0 flex-col w-[472px] rounded-[8px] overflow-hidden border border-solid border-neutral-200 shadow-[7px_4px_13.2px_#00000040]"
                        >
                            <div className="h-[209px] px-[44px] flex flex-col items-center justify-center bg-white">
                                <img
                                    className="max-h-[205px] object-contain"
                                    src={category.src}
                                />
                            </div>
                            <CardContent className="flex flex-col items-start gap-[20px] p-[20px] bg-base">
                                <div className="flex flex-col text-left">
                                    <h3 className="text-[40px] font-extrabold leading-[120%] font-extrabold text-primary">
                                        {category.category}
                                    </h3>
                                    <p className="text-base-black font-extrabold leading-[120%] text-[20px]">
                                        {category.tagline}
                                    </p>
                                </div>

                                <div className="flex flex-col text-left gap-[8px]">
                                    {features.map((feature) => (
                                        <div
                                            key={feature.id}
                                            className="flex gap-[8px]"
                                        >
                                            <img src="/src/assets/checkCircle.svg"></img>
                                            <span className="text-[16px] leading-[150%] text-base-black">
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant="primary" icon="search">
                                    Choose
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default CategoryShower;
