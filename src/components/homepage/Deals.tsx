// src/components/homepage/Deals.tsx
import { Card, CardContent } from "../ui/card";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";

function Deals() {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[60px] px-4 sm:px-6 md:px-8 lg:px-[80px] xl:px-[120px] pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[60px] sm:pb-[80px] md:pb-[100px]">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
                <div className="flex flex-col gap-[8px] sm:gap-[16px]">
                    <h3 className="w-full max-w-[842px] text-primary text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-extrabold leading-[110%] flex justify-start">
                        {t("home.deals.title")}
                    </h3>
                    <p className="text-base-black text-lg sm:text-xl md:text-[20px] lg:text-[22px] font-extrabold leading-[120%]">
                        {t("home.deals.subtitle")}
                    </p>
                </div>
                <Button
                    variant="secondary"
                    className="self-start md:self-auto md:min-w-[180px] lg:min-w-[220px] md:text-lg lg:text-xl hover:scale-105 transition-transform"
                >
                    {t("home.deals.special_offers")}
                </Button>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px] lg:gap-[32px]">
                <Card className="relative w-full lg:w-auto h-[320px] sm:h-[396px] md:h-[420px] lg:h-[450px] rounded-[8px] md:rounded-[12px] overflow-hidden col-span-1 lg:col-span-2 border-0 shadow-lg transition-transform hover:transform hover:scale-[1.02] group">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/assets/road.jpg"
                            className="absolute w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                            alt="Road"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                    </div>

                    <div className="absolute top-4 lg:top-6 right-0 bg-primary rounded-s-[8px] p-[8px] lg:p-[12px] text-base text-[12px] lg:text-[14px] leading-[115%] font-light">
                        {t("home.deals.offer_valid")}
                    </div>
                    <CardContent className="w-full h-full flex items-end justify-between p-6 lg:p-8">
                        <div className="flex flex-col gap-[8px] lg:gap-[12px] w-full sm:w-[276px] lg:w-[350px] text-left z-0">
                            <p className="text-[30px] sm:text-[40px] lg:text-[56px] text-primary font-black">
                                15 %
                            </p>
                            <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-primary font-extrabold">
                                {t("common.buttons.first_registration")}
                            </p>
                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>
                        <div className="flex z-2 flex-col items-end gap-[6px] lg:gap-[12px]">
                            <div className="inline-flex items-center w-fit rounded-t-[6px] p-[6px] lg:p-[10px] bg-[#E3F0E6] gap-[4px] lg:gap-[8px]">
                                <img src="/assets/checkStar.svg" alt="Check Star" className="w-4 h-4 lg:w-5 lg:h-5"></img>
                                <a className="z-3 flex text-[12px] lg:text-[14px] text-secondary-1000 leading-[120%] text-left">
                                    {t("home.deals.included_km")}
                                </a>
                            </div>
                            <Button
                                variant="primary"
                                className="md:text-base lg:text-lg hover:scale-105 transition-transform"
                            >
                                {t("common.buttons.view_more")}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="relative w-full h-[320px] sm:h-[396px] md:h-[420px] lg:h-[450px] rounded-[8px] md:rounded-[12px] overflow-hidden border-0 shadow-lg transition-transform hover:transform hover:scale-[1.02] group">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/assets/sunsetCar.jpg"
                            className="absolute w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                            alt="Sunset Car"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                    </div>

                    <div className="absolute top-4 lg:top-6 right-0 bg-primary rounded-s-[8px] p-[8px] lg:p-[12px] text-base text-[12px] lg:text-[14px] leading-[115%] font-light">
                        {t("home.deals.offer_valid")}
                    </div>
                    <CardContent className="w-full h-full z-1 flex items-end justify-start p-6 lg:p-8">
                        <div className="flex flex-col gap-[8px] lg:gap-[12px] w-full sm:w-[276px] lg:w-[300px] text-left z-1">
                            <p className="text-[30px] sm:text-[40px] lg:text-[56px] text-primary font-black">
                                20 %
                            </p>
                            <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-primary font-extrabold">
                                {t("common.buttons.first_registration")}
                            </p>
                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <Button
                                variant="primary"
                                className="md:text-base lg:text-lg hover:scale-105 transition-transform"
                            >
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