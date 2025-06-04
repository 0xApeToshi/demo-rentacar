import { useTranslation } from "react-i18next";
import Button from "../common/Button";

function LongTermHero() {
    const { t } = useTranslation();

    return (
        <div className="bg-black w-full flex justify-center">
            <div className="flex h-[582px] overflow-hidden w-[1440px]">
                <div className="justify-between py-[62px] pl-[120px]">
                    <div className="w-[605px] flex flex-col gap-[16px] justify-start z-1">
                        <h2 className="text-left text-[64px] font-extrabold text-base leading-[110%]">
                            {t("long_term.hero.title")}
                        </h2>
                        <span className="text-[20px] font-extrabold text-base">
                            <span className="flex justify-start w-[527px] text-left">
                                {t("long_term.hero.subtitle")}
                            </span>
                        </span>
                        <div className="flex flex-col gap-[4px] text-base text-[18px] leading-[120%]">
                            <div className="flex gap-[4px]">
                                <img src="/assets/longtermCheckCircle.svg" alt=""></img>
                                <a className="w-fit font-gilroy-medium">
                                    {t("long_term.hero.points.0")}
                                </a>
                            </div>

                            <div className="flex gap-[4px]">
                                <img src="/assets/longtermCheckCircle.svg" alt=""></img>

                                <a className="w-fit font-gilroy-medium">
                                    {t("long_term.hero.points.1")}
                                </a>
                            </div>

                            <div className="flex gap-[4px]">
                                <img src="/assets/longtermCheckCircle.svg" alt=""></img>

                                <a className="w-fit font-gilroy-medium">
                                    {t("long_term.hero.points.2")}
                                </a>
                            </div>
                        </div>
                        <Button variant="primary">
                            {t("common.buttons.get_quote")}
                        </Button>
                    </div>
                </div>
                <div className="relative h-[582px] w-full">
                    <img
                        className="h-full aspect-3/2 object-cover"
                        src="/assets/longTerm.png"
                        alt="Long term car rental"
                    ></img>
                    <div className="absolute -inset-1 rotate-180 bg-gradient-to-l from-[rgba(0,0,0,1)] via-[rgba(34,31,31,0.1)] to-[rgba(34,31,31,0)]"></div>
                </div>
            </div>
        </div>
    );
}

export default LongTermHero;