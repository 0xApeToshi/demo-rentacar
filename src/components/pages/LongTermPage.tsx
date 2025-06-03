import { baiterData } from "@/utils/types/contactBaitersTypes";
import PartnerLogos from "../common/PartnerLogos";
import BenefitsLongTerm from "../longtermpage/BenefitsLongTerm";
import CategoryShower from "../longtermpage/CategoryShower";
import ComparisonTable from "../longtermpage/ComparisonTable";
import LongTermFeat from "../longtermpage/LongTermFeat";
import LongTermHero from "../longtermpage/LongTermHero";
import RentFlow from "../longtermpage/RentFlow";
import ContactBaiters from "../longtermpage/ContactBaiters";
import Faq from "../common/Faq";
import ContactForm from "../common/ContactForm";

function LongTermPage() {
    return (
        <div className="flex flex-col items-center bg-base w-full">
            <LongTermHero></LongTermHero>
            <div className="w-full bg-base flex justify-center">
                <div className=" w-[1440px] p-[80px] pb-[40px] flex justify-center">
                    <div className="w-[600px] flex flex-col gap-[16px]">
                        <span className="text-left text-[64px] font-gilroy text-primary leading-[110%]">
                            Više od najma, to je partnerstvo
                        </span>
                        <p className="text-left text-[16px] text-base-black  leading-[150%]">
                            Zašto odabrati Optima Rent za dugoročni najam?
                        </p>
                    </div>
                </div>
            </div>
            <LongTermFeat></LongTermFeat>
            <BenefitsLongTerm></BenefitsLongTerm>
            <PartnerLogos />
            <CategoryShower />
            <ComparisonTable />
            <RentFlow />

            <ContactBaiters items={baiterData} />
            <Faq />
            <ContactForm />
        </div>
    );
}

export default LongTermPage;
