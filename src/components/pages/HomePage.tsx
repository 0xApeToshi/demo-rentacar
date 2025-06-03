import { useTranslation } from "react-i18next";
import CarCarousel from "../common/CarCarousel";
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
                <div className="relative flex justify-center items-end top-0 z-0 w-full h-[472px] pt-[160px] pb-[80px] px-[120px] bg-primary">
                    <div className="w-[860px] h-fit">
                        <span className="text-wrap text-[64px] font-extrabold text-base leading-[110%]">
                            {t("red.tagline")}
                        </span>
                    </div>
                </div>
                <div className="absolute left-0 right-0 -top-8  transform z-10 flex justify-center">
                    <SearchBar></SearchBar>
                </div>
            </div>

            <FeatureCards></FeatureCards>

            <div className="w-[1440px] px-[120px] py-[80px] flex flex-col items-center gap-[40px]">
                <span className="w-[842px] h-[51px] text-primary text-[46px] font-extrabold leading-[110%]">
                    Naše usluge
                </span>

                <ServicesCards />
            </div>
            <HomeCarPicker />

            <Deals />

            <Reviews
                title="Iskustva koja nas pokreću"
                text="Od brze podrške do fleksibilnog najma, saznajte zašto vozači vjeruju Optima Rentu."
            />
            <PartnerLogos />

            <Promises />

            <Explore />

            <div className="w-full bg-primary flex justify-center">
                <div className="w-[1440px] flex flex-col items-center px-[120px] pt-[100px] pb-[120px] gap-[40px] ">
                    <span className="text-left w-full max-w-[1440px] text-[46px] font-extrabold text-base leading-[110%]">
                        Rezervirajte svoj automobil za 60 sekundi!
                    </span>
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
