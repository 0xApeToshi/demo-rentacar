import { badgeType } from "@/utils/types/badgeTypes";

function Badge({ type, text }: badgeType) {
    let iconSrc;
    let bgColor;
    if (type === "offer") {
        iconSrc = "/src/assets/handCoin.svg";
        bgColor = "bg-secondary";
    } else if (type === "benefit") {
        iconSrc = "/src/assets/leafIcon.svg";
        bgColor = "bg-success-700";
    } else {
        iconSrc = null;
        bgColor = "bg-warning-600";
    }

    return (
        <div
            className={`${bgColor} flex gap-[8px] rounded-full px-[16px] py-[8px] bg-black w-fit text-base`}
        >
            {iconSrc && <img src={iconSrc}></img>}
            <p className="font-[16px] font-semibold leading-[120%]">{text}</p>
        </div>
    );
}

export default Badge;
