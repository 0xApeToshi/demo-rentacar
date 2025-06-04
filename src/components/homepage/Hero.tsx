// src/components/homepage/Hero.tsx
import { useTranslation } from "react-i18next";
import PolaroidImage from "../common/PolaroidImage";
import ResponsiveContainer from "../common/ResponsiveContainer";

function Hero() {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-base flex justify-center">
            <ResponsiveContainer className="py-8 md:py-12 lg:py-[62px] flex flex-col-reverse md:flex-row justify-between items-center md:items-start relative">
                {/* Content Section */}
                <div className="w-full md:w-1/2 lg:w-[605px] flex flex-col gap-4 md:gap-[16px] justify-start z-10 text-center md:text-left mt-8 md:mt-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-gilroy text-base-black leading-[110%]">
                        {t("home.hero.title")}
                    </h2>
                    <span className="text-lg md:text-xl lg:text-[20px] font-gilroy text-base-black">
                        <span className="flex justify-center md:justify-start whitespace-normal md:whitespace-nowrap">
                            {t("home.hero.subtitle")}
                        </span>
                    </span>
                    <div className="flex flex-col gap-[4px] text-base-black text-base md:text-[18px] leading-[120%]">
                        <div className="flex gap-[4px] justify-center md:justify-start">
                            <img
                                className="w-[24px] text-primary"
                                src="/assets/heroCheckCircle.svg"
                                alt=""
                            />
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkOne")}
                            </a>
                        </div>
                        <div className="flex gap-[4px] justify-center md:justify-start">
                            <img
                                src="/assets/heroCheckCircle.svg"
                                alt=""
                            />
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkTwo")}
                            </a>
                        </div>
                        <div className="flex gap-[4px] justify-center md:justify-start">
                            <img
                                src="/assets/heroCheckCircle.svg"
                                alt=""
                            />
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkThree")}
                            </a>
                        </div>
                        <div className="flex gap-[4px] justify-center md:justify-start">
                            <img
                                src="/assets/heroCheckCircle.svg"
                                alt=""
                            />
                            <a className="w-fit font-gilroy-medium">
                                {t("home.hero.checkFour")}
                            </a>
                        </div>
                    </div>
                    <span className="w-fit mx-auto md:mx-0 text-base-black text-[14px] leading-[120%]">
                        {t("home.hero.tagline")}
                    </span>
                </div>

                {/* Image Section - Smaller on mobile, original size on desktop */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:absolute md:-top-12 md:right-0 lg:static">
                    {/* On mobile screens use a simpler image presentation */}
                    <div className="block md:hidden">
                        <img
                            src="/assets/HeroPic.jpg"
                            alt="Car image"
                            className="w-full max-w-[350px] rounded-lg shadow-md"
                        />
                    </div>

                    {/* On desktop use the tilted polaroid effect */}
                    <div className="hidden md:block">
                        <PolaroidImage
                            alt="Car image"
                            src="/assets/HeroPic.jpg"
                            tiltDegrees={8.75}
                            className="w-[350px] lg:w-[518px] z-0"
                        />
                    </div>
                </div>
            </ResponsiveContainer>
        </div>
    );
}

export default Hero;