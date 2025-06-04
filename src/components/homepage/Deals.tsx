// src/components/homepage/Deals.tsx
import { Card, CardContent } from "../ui/card";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";

function Deals() {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-[1440px] flex flex-col items-start gap-[20px] sm:gap-[30px] md:gap-[40px] px-4 sm:px-6 md:px-8 lg:px-[120px] pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[60px] sm:pb-[80px] md:pb-[100px]">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0">
                <div className="flex flex-col gap-[8px] sm:gap-[16px]">
                    <h3 className="w-full max-w-[842px] text-primary text-3xl sm:text-4xl md:text-[46px] font-extrabold leading-[110%] flex justify-start">
                        {t("home.deals.title")}
                    </h3>
                    <p className="text-base-black text-lg sm:text-xl md:text-[20px] font-extrabold leading-[120%]">
                        {t("home.deals.subtitle")}
                    </p>
                </div>
                <Button variant="secondary" className="self-start md:self-auto">
                    {t("home.deals.special_offers")}
                </Button>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                <Card className="relative w-full lg:w-[600px] h-[320px] sm:h-[396px] rounded-[8px] overflow-hidden col-span-1 lg:col-span-2">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/assets/road.jpg"
                            className="absolute w-full h-full object-cover"
                            alt="Road"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <div className="absolute top-4 right-0 bg-primary rounded-s-[8px] p-[8px] text-base text-[12px] leading-[115%] font-light">
                        {t("home.deals.offer_valid")}
                    </div>
                    <CardContent className="w-full h-full flex items-end justify-between">
                        <div className="flex flex-col gap-[8px] w-full sm:w-[276px] text-left z-0">
                            <p className="text-[30px] sm:text-[40px] text-primary font-black">
                                15 %
                            </p>
                            <p className="text-[16px] sm:text-[20px] text-primary font-extrabold">
                                {t("common.buttons.first_registration")}
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>
                        <div className="flex z-2 flex-col items-end gap-[6px]">
                            <div className="inline-flex items-center w-fit rounded-t-[6px] p-[6px] bg-[#E3F0E6] gap-[4px]">
                                <img src="/assets/checkStar.svg" alt="Check Star"></img>
                                <a className="z-3 flex text-[12px] text-secondary-1000 leading-[120%] text-left">
                                    {t("home.deals.included_km")}
                                </a>
                            </div>
                            <Button variant="primary">
                                {t("common.buttons.view_more")}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="relative w-full h-[320px] sm:h-[396px] rounded-[8px] overflow-hidden">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/assets/sunsetCar.jpg"
                            className="absolute w-full h-full object-cover"
                            alt="Sunset Car"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <div className="absolute top-4 right-0 bg-primary rounded-s-[8px] p-[8px] text-base text-[12px] leading-[115%] font-light">
                        {t("home.deals.offer_valid")}
                    </div>
                    <CardContent className="w-full h-full z-1 flex items-end justify-start">
                        <div className="flex flex-col gap-[8px] w-full sm:w-[276px] text-left z-1">
                            <p className="text-[30px] sm:text-[40px] text-primary font-black">
                                20 %
                            </p>
                            <p className="text-[16px] sm:text-[20px] text-primary font-extrabold">
                                {t("common.buttons.first_registration")}
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <Button variant="primary">
                                {t("common.buttons.view_more")}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="relative w-full h-[320px] sm:h-[396px] rounded-[8px] overflow-hidden hidden lg:block">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/assets/sunsetCar.jpg"
                            className="absolute w-full h-full object-cover"
                            alt="Sunset Car"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <CardContent className="w-full h-full z-1 flex items-end justify-start">
                        <div className="flex flex-col gap-[8px] w-full sm:w-[276px] text-left z-1">
                            <p className="text-[30px] sm:text-[40px] text-primary font-black">
                                1 €
                            </p>
                            <p className="text-[16px] sm:text-[20px] text-primary font-extrabold">
                                {t("common.buttons.first_registration")}
                            </p>
                            <p className="text-[14px] sm:text-[16px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <Button variant="primary">
                                {t("common.buttons.view_more")}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Deals;