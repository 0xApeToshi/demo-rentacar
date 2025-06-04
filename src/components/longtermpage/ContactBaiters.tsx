import {
    BaiterProps,
    contactBaitersTypes,
} from "@/utils/types/contactBaitersTypes";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";

interface ContactBaiterItemProps extends contactBaitersTypes {
    isMirrored?: boolean;
}

function ContactBaiterItem({
    title,
    subtitle,
    text,
    buttonText,
    imageSrc,
    points,
    color,
    isMirrored = false,
}: ContactBaiterItemProps) {
    return (
        <div className="w-full bg-base flex justify-center">
            <section className="w-full max-w-[1440px] relative px-4 sm:px-6 md:px-8 lg:px-[120px] py-[60px] sm:py-[80px] md:py-[120px] lg:py-[200px] flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
                {/* Text Content */}
                <div
                    className={`w-full md:w-[520px] flex flex-col gap-[24px] text-left ${isMirrored ? "md:order-2" : "md:order-1"}`}
                >
                    <div className="flex flex-col gap-[8px] sm:gap-[16px]">
                        <h3 className="font-gilroy text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[110%]">
                            {title}
                        </h3>
                        <h4 className="font-gilroy text-base-black text-lg sm:text-[20px] leading-[120%]">
                            {subtitle}
                        </h4>
                    </div>
                    {text && (
                        <p className="text-base-black text-sm sm:text-base md:text-[16px] leading-[150%]">
                            {text}
                        </p>
                    )}
                    {points && (
                        <div className="flex flex-col gap-[4px]">
                            {points.map((point, index) => (
                                <div className="flex items-start" key={index}>
                                    {color === "blue" ? (
                                        <img src="/assets/heroCheckCircle.svg" alt="Check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    ) : (
                                        <img src="/assets/checkCircle.svg" alt="Check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    )}

                                    <p className="text-sm sm:text-base md:text-[16px] leading-[150%]">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    {buttonText && (
                        <Button variant="primary" className="w-full sm:w-auto">
                            {buttonText}
                        </Button>
                    )}
                </div>

                {/* Image */}
                <div className={`w-full md:w-auto ${isMirrored ? "md:order-1" : "md:order-2"}`}>
                    {/* Mobile image (contained) */}
                    <img
                        className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg md:hidden"
                        src={imageSrc}
                        alt=""
                    />

                    {/* Desktop image (absolute positioning) */}
                    <img
                        className={`hidden md:block w-[400px] lg:w-[703px] h-[400px] lg:h-[765px] object-cover absolute top-0 ${isMirrored ? "left-0" : "right-0"}`}
                        src={imageSrc}
                        alt=""
                    />
                </div>
            </section>
        </div>
    );
}

function ContactBaiters({ items }: BaiterProps) {
    return (
        <>
            {items.map((item, index) => (
                <ContactBaiterItem
                    key={index}
                    {...item}
                    isMirrored={index % 2 !== 0}
                />
            ))}
        </>
    );
}

// Helper function to get translated baiter data
export function getTranslatedBaiterData() {
    const { t } = useTranslation();

    const translatedData: contactBaitersTypes[] = [
        {
            imageSrc: "/assets/contactBaiterOne.jpg",
            title: t("long_term.contact_baiters.private.title"),
            subtitle: t("long_term.contact_baiters.private.subtitle"),
            text: t("long_term.contact_baiters.private.text"),
            buttonText: t("common.buttons.contact_us"),
        },
        {
            imageSrc: "/assets/contactBaiterTwo.jpg",
            title: t("long_term.contact_baiters.business.title"),
            subtitle: t("long_term.contact_baiters.business.subtitle"),
            text: t("long_term.contact_baiters.business.text"),
            buttonText: t("common.buttons.contact_us"),
        },
    ];

    return translatedData;
}

// Helper function for about page data
export function getTranslatedAboutData() {
    const { t } = useTranslation();

    const translatedAboutData: contactBaitersTypes[] = [
        {
            imageSrc: "/assets/fleet.jpg",
            title: t("about.fleet.title"),
            subtitle: t("about.fleet.subtitle"),
            points: [
                t("about.fleet.points.0"),
                t("about.fleet.points.1"),
                t("about.fleet.points.2"),
                t("about.fleet.points.3"),
            ],
            color: "blue",
            buttonText: t("common.buttons.rent_now"),
        },
        {
            imageSrc: "/assets/values.jpg",
            title: t("about.values.title"),
            subtitle: t("about.values.subtitle"),
            points: [
                t("about.values.points.0"),
                t("about.values.points.1"),
                t("about.values.points.2"),
                t("about.values.points.3"),
            ],
            color: "blue",
            buttonText: t("common.buttons.rent_long_term"),
        },
        {
            imageSrc: "/assets/environment.jpg",
            title: t("about.sustainable.title"),
            subtitle: t("about.sustainable.subtitle"),
            points: [
                t("about.sustainable.points.0"),
                t("about.sustainable.points.1"),
                t("about.sustainable.points.2"),
            ],
            color: "green",
            buttonText: "",
        },
    ];

    return translatedAboutData;
}

export default ContactBaiters;