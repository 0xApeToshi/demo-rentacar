// src/components/pages/HomePage.tsx
import { useTranslation } from "react-i18next";
import Deals from "../homepage/Deals";
import FeatureCards from "../homepage/FeatureCards";
import Hero from "../homepage/Hero";
import PartnerLogos from "../common/PartnerLogos";
import SearchBar from "../common/SearchBar";
import ServicesCards from "../homepage/ServicesCards";
import Promises from "../homepage/Promises";
import Explore from "../homepage/Explore";
import Reviews from "../homepage/Reviews";
import HomeCarPicker from "../homepage/HomeCarPicker";

function HomePage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center bg-base w-full">
            <Hero />
            <div className="relative w-full">
                <div className="relative flex justify-center items-end top-0 z-0 w-full h-auto pt-[100px] sm:pt-[120px] md:pt-[160px] pb-[60px] sm:pb-[80px] px-4 sm:px-6 md:px-8 lg:px-[120px] bg-primary">
                    <div className="w-full max-w-[860px] h-fit">
                        <span className="text-wrap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-base leading-[110%]">
                            {t("home.red.tagline")}
                        </span>
                    </div>
                </div>
                <div className="absolute left-0 right-0 -top-8 transform z-10 flex justify-center px-4 sm:px-0">
                    <SearchBar></SearchBar>
                </div>
            </div>

            <FeatureCards></FeatureCards>

            <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] md:py-[80px] flex flex-col items-center gap-[20px] sm:gap-[30px] md:gap-[40px]">
                <span className="w-full max-w-[842px] text-primary text-3xl sm:text-4xl md:text-[46px] font-extrabold leading-[110%] text-center">
                    {t("common.navigation.services")}
                </span>

                <ServicesCards />
            </div>
            <HomeCarPicker />

            <Deals />

            <Reviews
                title={t("home.reviews.title")}
                text={t("home.reviews.subtitle")}
            />
            <PartnerLogos />

            <Promises />

            <Explore />

            <div className="w-full bg-primary flex justify-center">
                <div className="w-full max-w-[1440px] flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[120px] pt-[60px] sm:pt-[80px] md:pt-[100px] pb-[80px] sm:pb-[100px] md:pb-[120px] gap-[20px] sm:gap-[30px] md:gap-[40px]">
                    <span className="text-left w-full max-w-[1440px] text-3xl sm:text-4xl md:text-[46px] font-extrabold text-base leading-[110%]">
                        {t("home.reservation_banner.title")}
                    </span>
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default HomePage;