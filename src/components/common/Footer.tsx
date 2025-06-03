import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import { FooterColumnProps, footerData } from "../../utils/types/footerTypes";

const FooterColumn = ({ title, items, className = "" }: FooterColumnProps) => (
    <div
        className={`flex flex-col gap-[8px] items-start text-[14px] w-[110px]`}
    >
        {title && <p className="font-bold text-base">{title}</p>}
        <ul
            aria-label={title}
            className="flex flex-col items-start w-[110px] gap-[8px] text-secondary-200 text-[14px]"
        >
            {items.map((item) => (
                <li key={item.text}>
                    <a
                        className={`block whitespace-nowrap hover:text-primary ${className}`}
                        href={item.url}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

function Footer() {
    return (
        <footer className="flex w-full bg-secondary-1000 justify-between items-start px-[120px] py-[100px]">
            <div className="flex flex-col min-w-[200px] px-[13px] gap-[32px] items-center">
                <div className="flex flex-col gap-[16px] items-center">
                    <img src="/src/assets/OptimaLogoFooter.svg"></img>

                    <div className="flex flex-col w-[115px] h-[76px] items-center text-base text-[14px] gap-[8px]">
                        <p className="w-[103px] h-[34px]">
                            Monday - Friday
                            <br />
                            07:00 - 23:00
                        </p>
                        <p className="w-[103px] h-[34px]">
                            <span className="block whitespace-nowrap">
                                Saturday - Sunday
                            </span>
                            08:00 - 22:00
                        </p>
                    </div>
                </div>
                <div className="flex gap-[8px] w-[56px] h-[24px]">
                    <a href="/facebook" aria-label="Facebook">
                        <img
                            className="brightness-0 invert"
                            src={Facebook}
                        ></img>
                    </a>
                    <a href="/instagram" aria-label="Instagram">
                        <img
                            className="brightness-0 invert"
                            src={Instagram}
                        ></img>
                    </a>
                </div>
            </div>

            <div className="flex flex-col gap-[36px] w-[180px]">
                <FooterColumn
                    title="LOCATIONS"
                    items={footerData.columns.locations}
                />
                <FooterColumn
                    title="TRAVEL GUIDES"
                    items={footerData.columns.travelGuides}
                />
            </div>

            <div className="flex flex-col gap-[36px] w-[180px]">
                <FooterColumn
                    title="SERVICES"
                    items={footerData.columns.services}
                />
                <FooterColumn
                    title="VEHICLES"
                    items={footerData.columns.vehicles}
                />
            </div>

            <div className="flex flex-col gap-[40px] w-[180px]">
                <FooterColumn
                    title="COMPANY"
                    items={footerData.columns.company}
                />
                <FooterColumn
                    title="SUPPORT"
                    items={footerData.columns.support}
                />
            </div>

            <FooterColumn items={footerData.legal} className="underline" />
        </footer>
    );
}

export default Footer;
