import { useTranslation } from "react-i18next";
import PartnerLogos from "../common/PartnerLogos";
import BenefitsLongTerm from "../longtermpage/BenefitsLongTerm";
import CategoryShower from "../longtermpage/CategoryShower";
import ComparisonTable from "../longtermpage/ComparisonTable";
import LongTermFeat from "../longtermpage/LongTermFeat";
import LongTermHero from "../longtermpage/LongTermHero";
import RentFlow from "../longtermpage/RentFlow";
import ContactBaiters, { getTranslatedBaiterData } from "../longtermpage/ContactBaiters";
import Faq from "../common/Faq";
import ContactForm from "../common/ContactForm";

function LongTermPage() {
    const { t } = useTranslation();
    // Get translated baiter data
    const translatedBaiterData = getTranslatedBaiterData();

    return (
        <div className="flex flex-col items-center bg-base w-full">
            <LongTermHero />

            {/* Intro Section - Made responsive with padding and font size adjustments */}
            <div className="w-full bg-base flex justify-center">
                <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[80px] py-8 sm:py-10 md:py-[60px] lg:py-[80px] lg:pb-[40px] flex justify-center">
                    <div className="w-full max-w-[600px] flex flex-col gap-[16px]">
                        <span className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-gilroy text-primary leading-[110%]">
                            {t("long_term.intro.title")}
                        </span>
                        <p className="text-left text-sm sm:text-base md:text-[16px] text-base-black leading-[150%]">
                            {t("long_term.intro.description")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <LongTermFeat />

            {/* Benefits Section */}
            <BenefitsLongTerm />

            {/* Partner Logos */}
            <PartnerLogos />

            {/* Category Shower */}
            <CategoryShower />

            {/* Comparison Table */}
            <ComparisonTable />

            {/* Rent Flow */}
            <RentFlow />

            {/* Contact Baiters Section */}
            <ContactBaiters items={translatedBaiterData} />

            {/* FAQ Section */}
            <Faq />

            {/* Contact Form */}
            <ContactForm />
        </div>
    );
}

export default LongTermPage;