import { useTranslation } from "react-i18next";

function OurStory() {
    const { t } = useTranslation();

    return (
        <div className="w-full flex justify-center bg-neutral-100">
            <section className="w-[1440px] px-[120px] py-[80px] flex gap-[80px] items-end">
                <div className="max-w-[600px] text-left flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[8px]">
                        <h3 className="font-gilroy text-[46px] leading-[110%] text-primary">
                            {t("about.story.title")}
                        </h3>
                        <p className="text-[20px] leading-[120%] font-gilroy">
                            {t("about.story.subtitle")}
                        </p>
                    </div>
                    <p className="leading-[150%] text-[16px]">
                        {t("about.story.description")}
                    </p>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[20px] leading-[120%] font-gilroy">
                            {t("about.story.additional_title")}
                        </p>
                        <p className="leading-[150%] text-[16px]">
                            {t("about.story.additional_description")}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-[13px] w-full leading-[120%] text-[16px] font-semibold">
                    <div className="flex">
                        <div className="bg-secondary-200 flex items-center rounded-s-[8px] px-[16px] py-[12px]">
                            <img
                                className="w-[24px] h-[24px]"
                                src="/assets/userLogo.svg"
                                alt="User icon"
                            />
                        </div>

                        <p className="bg-secondary-100 w-full text-base-black w-[408px] h-[62px] px-[28px] py-[20px] flex items-center">
                            <span className="h-fit bg-primary rounded-[999px] text-base px-[8px] pt-[1px] pb-[2px]">
                                {t("about.story.values.customer_commitment")}
                            </span>
                            {t("about.story.values.from_day_one")}
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-secondary-200 flex items-center rounded-s-[8px] px-[16px] py-[12px]">
                            <img
                                className="w-[24px] h-[24px]"
                                src="/assets/chartLogo.svg"
                                alt="Chart icon"
                            />
                        </div>

                        <p className="bg-secondary-100 w-full text-base-black w-[408px] h-[62px] px-[28px] py-[20px] flex items-center">
                            <span className="h-fit bg-primary rounded-[999px] text-base px-[8px] pt-[1px] pb-[2px]">
                                {t("about.story.values.rapid_growth")}
                            </span>
                            {t("about.story.values.thanks_to")}
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-secondary-200 flex items-center rounded-s-[8px] px-[16px] py-[12px]">
                            <img
                                className="w-[24px] h-[24px]"
                                src="/assets/handHeartLogo.svg"
                                alt="Heart icon"
                            />
                        </div>

                        <p className="bg-secondary-100 w-full text-base-black w-[408px] h-[62px] px-[28px] py-[20px] flex items-center">
                            {t("about.story.values.our_promise")}
                            <span className="h-fit bg-primary rounded-[999px] text-base px-[8px] pt-[1px] pb-[2px]">
                                {t("about.story.values.we_care_more")}
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurStory;