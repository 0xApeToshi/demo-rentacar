import { aboutData } from "@/utils/types/contactBaitersTypes";
import Promises from "../homepage/Promises";
import ContactBaiters from "../longtermpage/ContactBaiters";
import Reviews from "../homepage/Reviews";
import Banner from "../aboutpage/Banner";
import TeamCarousel from "../aboutpage/TeamCarousel";
import AboutCards from "../aboutpage/AboutCards";
import OurStory from "../aboutpage/OurStory";
import AboutHero from "../aboutpage/AboutHero";

function AboutUsPage() {
    return (
        <div className="flex flex-col items-center bg-base w-full">
            <AboutHero />
            <OurStory />
            <AboutCards />
            <TeamCarousel />
            <Promises />
            <ContactBaiters items={aboutData} />
            <Reviews
                title="Što naši korisnici kažu o nama"
                text="Ne moramo mi govoriti koliko brinemo – naši korisnici kažu sve."
            />
            <Banner />
        </div>
    );
}

export default AboutUsPage;
