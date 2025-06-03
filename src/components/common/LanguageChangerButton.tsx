import { KeyboardEvent, useEffect, useRef, useState } from "react";
import Flag from "react-flagkit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "GB", i18nCode: "en" },
    { code: "HR", i18nCode: "cro" },
];

const LanguageChangerButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("GB");
    const [activeIndex, setActiveIndex] = useState(0);

    const { i18n } = useTranslation();
    const dropdownRef = useRef(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const currentLang = i18n.language;
        const langObj = languages.find((lang) => lang.i18nCode === currentLang);
        if (langObj) {
            setSelectedLanguage(langObj.code);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !(dropdownRef.current as Node).contains(event.target as Node)
            ) {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && menuRef.current) {
            const menuItems =
                menuRef.current.querySelectorAll('[role="menuitem"]');
            const activeItem = menuItems[activeIndex] as HTMLElement;
            activeItem.focus();
        }
    }, [isOpen, activeIndex]);

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "Enter":
            case " ":
                if (!isOpen) {
                    event.preventDefault();
                    setIsOpen(true);
                }
                break;
            case "Escape":
                setIsOpen(false);
                buttonRef.current?.focus();
                break;
        }
    };

    const handleMenuKeyDown = (event: KeyboardEvent) => {
        const menuItems = languages.length;

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                setActiveIndex((prevIndex) => (prevIndex + 1) % menuItems);
                break;
            case "ArrowUp":
                event.preventDefault();
                setActiveIndex(
                    (prevIndex) => (prevIndex - 1 + menuItems) % menuItems
                );
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                handleLanguageSelect(languages[activeIndex].code);
                break;
            case "Escape":
                event.preventDefault();
                setIsOpen(false);
                buttonRef.current?.focus();
                break;
        }
    };

    const handleBlur = () => {
        // Use setTimeout to allow checking the next focused element after blur
        setTimeout(() => {
            // Get the currently focused element
            const currentFocusedElement = document.activeElement;

            // Check if the focused element is within our dropdown component
            if (
                dropdownRef.current &&
                !(dropdownRef.current as Node).contains(currentFocusedElement)
            ) {
                setIsOpen(false);
            }
        }, 0);
    };

    const handleLanguageSelect = (code: string) => {
        setSelectedLanguage(code);
        const language = languages.find((lang) => lang.code === code);
        i18n.changeLanguage(language!.i18nCode);
        setIsOpen(false);
        buttonRef.current?.focus();
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
                aria-haspopup="menu"
                ref={buttonRef}
                aria-controls="language-menu"
                aria-label="Select language"
                className="-translate-y-1/8 min-w-[55px] h-[27px] px-2 py-[12px] flex items-center justify-between border rounded-md"
            >
                <Flag
                    country={selectedLanguage}
                    size={19}
                    className="rounded-2"
                />
                <ArrowDropDownIcon />
            </button>

            {isOpen && (
                <div
                    id="language-menu"
                    ref={menuRef}
                    onBlur={handleBlur}
                    role="menu"
                    aria-label="Language options"
                    onKeyDown={handleMenuKeyDown}
                    className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-lg z-10"
                >
                    {languages.map(({ code }, index) => (
                        <div
                            key={code}
                            role="menuitem"
                            tabIndex={index === activeIndex ? 0 : -1}
                            onClick={() => handleLanguageSelect(code)}
                            aria-selected={code === selectedLanguage}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer focus:outline-none focus:bg-gray-100"
                        >
                            <Flag country={code} size={24} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageChangerButton;
