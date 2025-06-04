import { useState, useEffect } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageChangerButton from "./LanguageChangerButton";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isMobile, setIsMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    console.log(isMobile);

    // Handle screen size changes
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navItems = [
        { id: "rental", label: t("common.navigation.rental"), href: "/rental" },
        { id: "longTerm", label: t("common.navigation.longTerm"), href: "/long-term" },
        { id: "offers", label: t("common.navigation.offers"), href: "/offers" },
        { id: "location", label: t("common.navigation.locations"), href: "/locations" },
        { id: "about", label: t("common.navigation.about"), href: "/about-us" },
        { id: "blog", label: t("common.navigation.blog"), href: "/blog" },
        { id: "contact", label: t("common.navigation.contact"), href: "/contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="shadow-lg z-50 relative">
            {/* Top bar - Hide on very small screens */}
            <div className="bg-base w-full hidden sm:flex justify-between px-4 sm:px-6 md:px-8 lg:px-[120px] py-[16px] max-h-[100px]">
                <div className="h-[20px] text-neutral flex gap-4 md:gap-[40px] flex-wrap">
                    <div className="flex gap-1 items-center">
                        <LocalPhoneIcon
                            sx={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <p className="text-[14px] leading-[120%]">
                            <strong>{t("common.contact.phone")}</strong> +385 (01) 6264 743
                        </p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <EmailIcon
                            sx={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <p className="text-[14px] leading-[120%]">
                            <strong>{t("common.contact.email")}</strong> info@optimarent.hr
                        </p>
                    </div>
                </div>
                <div className="h-[20px] text-neutral flex gap-4 md:gap-[32px]">
                    <Link
                        to="/manage-booking"
                        className="underline text-[14px] leading-[120%] text-center hover:text-primary"
                    >
                        {t("common.booking.manage")}
                    </Link>
                    <LanguageChangerButton />
                </div>
            </div>

            {/* Main navigation */}
            <div className="h-[80px] bg-white/75 flex w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[120px] max-h-[100px]">
                <Link to="/" onClick={closeMenu}>
                    <img
                        src="/assets/OptimaLogoRed.svg"
                        alt="Optima Rent Logo"
                        className="w-32 md:w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main" className="hidden lg:block">
                    <ul className="h-[33px] flex items-center gap-[16px] text-[14px] leading-[120%] text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.href}
                                    className="px-[12px] py-[8px] hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Navigation Toggle - Always visible on mobile */}
                <button
                    className="lg:hidden p-2 z-[60] relative"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <X size={24} className="text-primary" />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[55] bg-white pt-[80px] overflow-y-auto lg:hidden">
                    <nav className="px-4 py-6">
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.id} className="border-b border-gray-100 pb-3">
                                    <Link
                                        to={item.href}
                                        className="text-lg block hover:text-primary"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile contact info */}
                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <h3 className="font-bold mb-4 text-primary">{t("common.contact.title")}</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-center">
                                    <LocalPhoneIcon />
                                    <p>+385 (01) 6264 743</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <EmailIcon />
                                    <p>info@optimarent.hr</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <Link
                                        to="/manage-booking"
                                        className="underline hover:text-primary"
                                        onClick={closeMenu}
                                    >
                                        {t("common.booking.manage")}
                                    </Link>
                                    <LanguageChangerButton />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;