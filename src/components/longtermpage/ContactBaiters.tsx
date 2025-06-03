import {
    BaiterProps,
    contactBaitersTypes,
} from "@/utils/types/contactBaitersTypes";
import Button from "../common/Button";

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
            <section className="w-[1440px] min-h-[800px] relative px-[120px] py-[200px] flex justify-between">
                <div
                    className={`w-[520px] flex flex-col gap-[24px] text-left ${isMirrored ? "order-2" : "order-1"}`}
                >
                    <div className="flex flex-col gap-[16px]">
                        <h3 className="font-gilroy text-primary text-[46px] leading-[110%]">
                            {title}
                        </h3>
                        <h4 className="font-gilroy text-base-black text-[20px] leading-[120%]">
                            {subtitle}
                        </h4>
                    </div>
                    {text && (
                        <p className=" text-base-black text-[16px] leading-[150%]">
                            {text}
                        </p>
                    )}
                    {points && (
                        <div className="flex flex-col gap-[4px]">
                            {points.map((point) => (
                                <div className="flex items-start">
                                    {color === "blue" ? (
                                        <img src="/src/assets/heroCheckCircle.svg" />
                                    ) : (
                                        <img src="/src/assets/checkCircle.svg" />
                                    )}

                                    <p className="text-[16px] leading-[150%]">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    {buttonText && (
                        <Button variant="primary">{buttonText}</Button>
                    )}
                </div>
                <div className={`w-fill ${isMirrored ? "order-1" : "order-2"}`}>
                    <img
                        className={`w-[703px] h-[765px] object-cover absolute top-0 ${isMirrored ? "left-0" : "right-0"}`}
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

export default ContactBaiters;
