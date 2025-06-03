import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageChangerButton from "./LanguageChangerButton";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function Header() {
    const { t } = useTranslation();

    const navItems = [
        { id: "rental", label: t("nav.rental"), href: "/rental" },
        { id: "longTerm", label: t("nav.longTerm"), href: "/long-term" },
        { id: "offers", label: t("nav.offers"), href: "/offers" },
        { id: "location", label: t("nav.locations"), href: "/locations" },
        { id: "about", label: t("nav.about"), href: "/about-us" },
        { id: "blog", label: t("nav.blog"), href: "/blog" },
        { id: "contact", label: t("nav.contact"), href: "/contact" },
    ];

    return (
        <header className="shadow-lg z-99 relative">
            <div className="bg-base flex w-full place-content-between px-[120px] py-[16px] max-h-[100px]">
                <div className="h-[20px] text-neutral inline-flex gap-[40px]">
                    <div className=" inline-flex gap-1 items-center justify-center">
                        <LocalPhoneIcon
                            sx={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <p className="text-[14px] leading-[120%] text-center">
                            <strong>Tel:</strong> +385 (01) 6264 743
                        </p>
                    </div>
                    <div className=" inline-flex gap-1 items-center justify-center">
                        <EmailIcon
                            sx={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <p className="text-[14px] leading-[120%] text-center">
                            <strong>Email:</strong> info@optimarent.hr
                        </p>
                    </div>
                </div>
                <div className="h-[20px] text-neutral inline-flex gap-[32px]">
                    <a
                        href="/manage-booking"
                        className="underline text-[14px] leading-[120%] text-center hover:text-primary"
                    >
                        {t("booking.manage")}
                    </a>
                    <LanguageChangerButton />
                </div>
            </div>

            <div className="h-[80px] bg-white/75 flex w-full items-center place-content-between px-[120px] max-h-[100px]">
                <Link to={"/"}>
                    <img
                        src="/src/assets/OptimaLogoRed.svg"
                        onClick={() => console.log("wow")}
                    ></img>
                </Link>
                <nav aria-label="Main">
                    <ul className="h-[33px] flex items-center gap-[16px] text-[14px] leading-[120%] text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className="px-[12px] py-[8px] hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;