import { useTranslation } from "react-i18next";
import Button from "../common/Button";

function Banner() {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-base flex justify-center">
            <section className="w-[1440px] px-[120px] py-[80px]">
                <div className="bg-primary rounded-[32px] w-[1279px] px-[120px] py-[88px] flex flex-col gap-[32px] justify-center items-center">
                    <div className="flex max-w-[779px] flex-col gap-[16px] text-left">
                        <h3 className="font-gilroy text-base text-[64px] leading-[110%]">
                            {t("about.banner.title")}
                        </h3>
                        <p className="font-gilroy text-base text-[20px] leading-[120%]">
                            {t("about.banner.subtitle")}
                        </p>
                        <p className="text-base font-semibold text-[16px] leading-[120%]">
                            {t("about.banner.description")}
                        </p>
                    </div>
                    <div className="flex w-[779px] gap-[16px] justify-start">
                        <Button
                            variant="primary"
                            className="border border-base"
                        >
                            {t("common.buttons.contact_us")}
                        </Button>
                        <Button variant="secondary">
                            {t("common.buttons.contact_us")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Banner;