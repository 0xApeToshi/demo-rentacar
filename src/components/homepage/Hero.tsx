import { useTranslation } from "react-i18next";
import PolaroidImage from "../common/PolaroidImage";

function Hero() {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="flex h-[582px] justify-between w-[1440px] py-[62px] px-[120px]">
                <div className="w-[605px] flex flex-col gap-[16px] justify-start z-1">
                    <h2 className="text-left text-[64px] font-gilroy text-base-black leading-[110%]">
                        {t("home.hero.title")}
                    </h2>
                    <span className="text-[20px] font-gilroy text-base-black">
                        <span className="flex justify-start whitespace-nowrap">
                            {t("home.hero.subtitle")}
                        </span>
                    </span>
                    <div className="flex flex-col gap-[4px] text-base-black text-[18px] leading-[120%]">
                        <div className="flex gap-[4px]">
                            <img
                                className="w-[24px] text-primary"
                                src="/src/assets/heroCheckCircle.svg"
                                alt=""
                            ></img>
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkOne")}
                            </a>
                        </div>
                        <div className="flex gap-[4px]">
                            <img
                                src="/src/assets/heroCheckCircle.svg"
                                alt=""
                            ></img>
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkTwo")}
                            </a>
                        </div>
                        <div className="flex gap-[4px]">
                            <img
                                src="/src/assets/heroCheckCircle.svg"
                                alt=""
                            ></img>
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkThree")}
                            </a>
                        </div>
                        <div className="flex gap-[4px]">
                            <img
                                src="/src/assets/heroCheckCircle.svg"
                                alt=""
                            ></img>
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkFour")}
                            </a>
                        </div>
                    </div>
                    <span className="w-fit text-base-black text-[14px] leading-[120%]">
                        {t("home.hero.tagline")}
                    </span>
                </div>
                <div className="relative -top-27 right-0">
                    <PolaroidImage
                        alt="Car image"
                        src="src/assets/HeroPic.jfif"
                        tiltDegrees={8.75}
                        className="w-[518px] z-0"
                    ></PolaroidImage>
                </div>
            </div>
        </div>
    );
}

export default Hero;