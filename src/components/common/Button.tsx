import { ButtonItem } from "../../utils/types/buttonTypes";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Button({ variant, icon, className, ...props }: ButtonItem) {
    const style = `${className ? className : ""} size-fit inline-flex items-center gap-[8px] justify-center rounded-[6px] pl-[22px] pr-[20px] py-[12px] font-semibold text-[16px] leading-[120%]`;
    const primaryStyle = `${style} text-white bg-primary hover:bg-primary-800 active:bg-secondary-1000 disabled:bg-neutral-400`;
    const secondaryStyle = `${style} text-primary bg-white border border-primary hover:border-primary-800 hover:text-primary-800 active:border-secondary-1000 active:text-secondary-1000 disabled:border-neutral-400 disabled:text-neutral-400`;

    return (
        <button
            className={variant === "primary" ? primaryStyle : secondaryStyle}
            {...props}
        >
            <p className="text-center flex items-center justify-center  font-semibold leading-[120%] text-[16px]">
                {props.children}
            </p>
            {icon &&
                (icon === "search" ? (
                    <SearchIcon
                        sx={{
                            width: 20,
                            height: 20,
                        }}
                    />
                ) : (
                    <ArrowDownwardIcon
                        sx={{
                            width: 20,
                            height: 20,
                        }}
                    />
                ))}
        </button>
    );
}

export default Button;
