import { TFunction } from "node_modules/i18next";
import { useTranslation } from "react-i18next";
import PolaroidImage from "../common/PolaroidImage";

const getCardData = (t: TFunction<"translation", undefined>) => [
    {
        src: "src/assets/heartIcon.svg",
        title: "Personalized service",
        description:
            "Every customer is unique, and we tailor our services to meet your individual needs.",
    },
    {
        src: "src/assets/fileIcon.svg",
        title: "Flexible options",
        description:
            "From changing your rental car to adjusting your contract, we make things easy because we care about your convenience.",
    },
    {
        src: "src/assets/feedbackIcon.svg",
        title: "Customer feedback",
        description:
            "We actively listen to your feedback and continuously improve our services.",
    },
    {
        src: "src/assets/mountIcon.svg",
        title: "Going the extra mile",
        description:
            "Whether it’s delivering your car to an unusual location or resolving an issue quickly, we do whatever it takes to make sure you’re happy.",
    },
];

function Promises() {
    const { t } = useTranslation();
    const data = getCardData(t);

    return (
        <>
            <div className="bg-secondary-100 z-1 w-full flex justify-center relative">
                <PolaroidImage
                    alt="Car being delivered by helicopter in snowy mountains"
                    src="src/assets/HeroPic.jfif"
                    tiltDegrees={8.75}
                    className="w-[518px] top-45 -right-100"
                    absolute
                ></PolaroidImage>

                <div className="flex flex-col gap-[40px] items-start w-[1440px] px-[120px] pb-[140px] pt-[80px]">
                    <div className="flex flex-col gap-[8px] w-2/5 text-left">
                        <h3 className="text-primary font-extrabold leading-[110%] text-[46px]">
                            We Care More: <br />
                            Our Promise to You
                        </h3>
                        <p className="text-base-black font-extrabold leading-[120%] text-[20px]">
                            At Optima Rent, we live by our tagline, "We Care
                            More." It’s not just something we say; it’s
                            something we do every single day.
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-[20px]">
                        {data.map((promise) => (
                            <div className="flex text-left gap-[20px] rounded-[16px] px-[16px] py-[20px] bg-white w-full shadow-md">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src={promise.src}
                                ></img>
                                <div className="flex flex-col gap-[8px]">
                                    <p className="text-secondary-700 font-extrabold leading-[120%] text-[20px]">
                                        {promise.title}
                                    </p>
                                    <p className="text-base-black leading-[120%] text-[16px] max-w-2/3">
                                        {promise.description}
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
