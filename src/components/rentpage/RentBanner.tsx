// src/components/rentpage/RentBanner.tsx
import { getWordVariation } from "@/utils/cityDeclinations";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface RentBannerProps {
    city: string;
}

function RentBanner({ city }: RentBannerProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const cityInDative = getWordVariation(city, "dative");

    return (
        <div className="w-full bg-white flex justify-center">
            <section className="w-[1440px] px-[120px] py-[80px]">
                <div className="w-full rounded-[32px] bg-primary py-[88px] px-[120px] flex flex-col gap-[32px] items-center">
                    <div className="w-[736px] flex flex-col gap-[16px] items-start text-left">
                        <h3 className="w-[697px] font-gilroy text-[64px] leading-[110%] text-base">
                            {t("rent.banner.title")}
                        </h3>
                        <p className="font-gilroy text-[20px] leading-[120%] text-base">
                            {t("rent.banner.subtitle", { city: cityInDative })}
                        </p>
                        <p className="text-base leading-[120%]">
                            {t("rent.banner.description")}
                        </p>
                    </div>
                    <div className="w-[736px] flex justify-start gap-[16px]">
                        <Button
                            variant="primary"
                            className="border border-base"
                            onClick={() => navigate("/contact")}
                        >
                            {t("common.buttons.contact_us")}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => navigate(`/booking?location=${city}`)}
                        >
                            {t("common.buttons.book")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RentBanner;