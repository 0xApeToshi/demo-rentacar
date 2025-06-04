import { useTranslation } from "react-i18next";
import PolaroidImage from "../common/PolaroidImage";

function Promises() {
    const { t } = useTranslation();

    const promisesData = [
        {
            src: "/assets/heartIcon.svg",
            title: t("home.promises.items.personalized.title"),
            text: t("home.promises.items.personalized.description"),
        },
        {
            src: "/assets/fileIcon.svg",
            title: t("home.promises.items.flexible.title"),
            text: t("home.promises.items.flexible.description"),
        },
        {
            src: "/assets/feedbackIcon.svg",
            title: t("home.promises.items.feedback.title"),
            text: t("home.promises.items.feedback.description"),
        },
        {
            src: "/assets/mountIcon.svg",
            title: t("home.promises.items.extra_mile.title"),
            text: t("home.promises.items.extra_mile.description"),
        },
    ];

    return (
        <>
            <div className="bg-secondary-100 z-1 w-full flex justify-center relative">
                <PolaroidImage
                    alt="Car being delivered by helicopter in snowy mountains"
                    src="/assets/HeroPic.jpg"
                    tiltDegrees={8.75}
                    className="w-[518px] top-45 -right-100"
                    absolute
                ></PolaroidImage>

                <div className="flex flex-col gap-[40px] items-start w-[1440px] px-[120px] pb-[140px] pt-[80px]">
                    <div className="flex flex-col gap-[8px] w-2/5 text-left">
                        <h3 className="text-primary font-extrabold leading-[110%] text-[46px]">
                            {t("home.promises.title")}
                        </h3>
                        <p className="text-base-black font-extrabold leading-[120%] text-[20px]">
                            {t("home.promises.subtitle")}
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-[20px]">
                        {promisesData.map((promise, index) => (
                            <div
                                key={index}
                                className="flex text-left gap-[20px] rounded-[16px] px-[16px] py-[20px] bg-white w-full shadow-md"
                            >
                                <img
                                    className="w-[64px] h-[64px]"
                                    src={promise.src}
                                    alt={promise.title}
                                ></img>
                                <div className="flex flex-col gap-[8px]">
                                    <p className="text-secondary-700 font-extrabold leading-[120%] text-[20px]">
                                        {promise.title}
                                    </p>
                                    <p className="text-base-black leading-[120%] text-[16px] max-w-2/3">
                                        {promise.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Promises;