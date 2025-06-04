import { useTranslation } from "react-i18next";
import Button from "../common/Button";

function LongTermHero() {
    const { t } = useTranslation();

    // Function to scroll to the contact section
    const scrollToContact = () => {
        // Find the contact form element
        const contactElement = document.getElementById('contact-form');

        if (contactElement) {
            // Smooth scroll to the element
            contactElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // If no specific contact element is found, scroll to the bottom of the page
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-black w-full flex justify-center">
            <div className="flex flex-col md:flex-row h-auto md:h-[582px] overflow-hidden w-full max-w-[1440px]">
                {/* Text Content */}
                <div className="justify-between py-[40px] sm:py-[50px] md:py-[62px] px-4 sm:px-6 md:px-8 lg:pl-[120px] order-2 md:order-1 relative z-10">
                    <div className="w-full md:w-[605px] flex flex-col gap-[16px] justify-start">
                        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-base leading-[110%]">
                            {t("long_term.hero.title")}
                        </h2>
                        <span className="text-base sm:text-lg md:text-[20px] font-extrabold text-base">
                            <span className="flex justify-start w-full md:w-[527px] text-left">
                                {t("long_term.hero.subtitle")}
                            </span>
                        </span>
                        <div className="flex flex-col gap-[4px] text-base text-[16px] sm:text-[18px] leading-[120%]">
                            <div className="flex gap-[4px] items-start">
                                <img src="/assets/longtermCheckCircle.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <a className="w-fit font-gilroy-medium">
                                    {t("long_term.hero.points.0")}
                                </a>
                            </div>

                            <div className="flex gap-[4px] items-start">
                                <img src="/assets/longtermCheckCircle.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <a className="w-fit font-gilroy-medium">
                                    {t("long_term.hero.points.1")}
                                </a>
                            </div>

                            <div className="flex gap-[4px] items-start">
                                <img src="/assets/longtermCheckCircle.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <a className="w-fit font-gilroy-medium">
                                    {t("long_term.hero.points.2")}
                                </a>
                            </div>
                        </div>
                        <Button
                            variant="primary"
                            className="w-full sm:w-auto mt-2"
                            onClick={scrollToContact}
                        >
                            {t("common.buttons.get_quote")}
                        </Button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative h-[300px] sm:h-[400px] md:h-[582px] w-full order-1 md:order-2">
                    <img
                        className="h-full w-full object-cover"
                        src="/assets/longTerm.png"
                        alt="Long term car rental"
                    />

                    {/* Mobile overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 md:hidden"></div>

                    {/* Desktop overlay gradient */}
                    <div className="absolute -inset-1 rotate-180 bg-gradient-to-l from-[rgba(0,0,0,1)] via-[rgba(34,31,31,0.1)] to-[rgba(34,31,31,0)] hidden md:block"></div>
                </div>
            </div>
        </div>
    );
}

export default LongTermHero;