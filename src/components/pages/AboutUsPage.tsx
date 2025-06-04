import { aboutData } from "@/utils/types/contactBaitersTypes";
import { useTranslation } from "react-i18next";
import Promises from "../homepage/Promises";
import ContactBaiters from "../longtermpage/ContactBaiters";
import Reviews from "../homepage/Reviews";
import Banner from "../aboutpage/Banner";
import TeamCarousel from "../aboutpage/TeamCarousel";
import AboutCards from "../aboutpage/AboutCards";
import OurStory from "../aboutpage/OurStory";
import AboutHero from "../aboutpage/AboutHero";

function AboutUsPage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center bg-base w-full">
            <AboutHero />
            <OurStory />
            <AboutCards />
            <TeamCarousel />
            <Promises />
            <ContactBaiters items={aboutData} />
            <Reviews
                title={t("about.reviews.title")}
                text={t("about.reviews.subtitle")}
            />
            <Banner />
        </div>
    );
}

export default AboutUsPage;