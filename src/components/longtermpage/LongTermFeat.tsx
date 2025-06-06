import { Card, CardContent } from "@/components/ui/card";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

const getCardData = (t: TFunction<"translation", undefined>) => [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-12 h-12 sm:w-16 sm:h-16"
            >
                <path
                    d="M38.4533 20.0007L42.6667 29.334H21.3333L25.12 20.0007H38.4533ZM24 32.0007C22.5333 32.0007 21.3333 33.2007 21.3333 34.6674C21.3333 36.134 22.5333 37.334 24 37.334C25.4667 37.334 26.6667 36.134 26.6667 34.6674C26.6667 33.2007 25.4667 32.0007 24 32.0007ZM40 32.0007C38.5333 32.0007 37.3333 33.2007 37.3333 34.6674C37.3333 36.134 38.5333 37.334 40 37.334C41.4667 37.334 42.6667 36.134 42.6667 34.6674C42.6667 33.2007 41.4667 32.0007 40 32.0007ZM56 13.334V29.334C56 44.134 45.76 57.974 32 61.334C18.24 57.974 8 44.134 8 29.334V13.334L32 2.66736L56 13.334ZM48 32.0007L42.24 18.6674C41.7067 17.1207 40.2133 16.0007 38.4533 16.0007H25.12C23.36 16.0007 21.8667 17.1207 21.3333 18.6674L16 32.0007V42.6674C16 44.134 17.2 45.334 18.6667 45.334H21.3333C22.8 45.334 24 44.134 24 42.6674V40.0007H40V42.6674C40 44.134 41.2 45.334 42.6667 45.334H45.3333C46.8 45.334 48 44.134 48 42.6674V32.0007Z"
                    fill="#0B0A0A"
                />
            </svg>
        ),
        title: t("cards.vehicles.title"),
        description: t("long_term.features.new_vehicles"),
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-12 h-12 sm:w-16 sm:h-16"
            >
                <path
                    d="M50.6667 34.6666C51.5734 34.6666 52.4534 34.7733 53.3334 34.9066V21.3333L37.3334 5.33331H16.0001C13.0401 5.33331 10.6667 7.70665 10.6667 10.6666V53.3333C10.6667 56.2933 13.0401 58.6666 16.0001 58.6666H36.8267C35.4667 56.32 34.6667 53.6 34.6667 50.6666C34.6667 41.84 41.8401 34.6666 50.6667 34.6666ZM34.6667 9.33331L49.3334 24H34.6667V9.33331ZM53.3334 52V48H42.6667V42.6666H53.3334V38.6666L61.3334 45.3333L53.3334 52ZM48.0001 53.3333H58.6667V58.6666H48.0001V62.6666L40.0001 56L48.0001 49.3333V53.3333Z"
                    fill="#0B0A0A"
                />
            </svg>
        ),
        title: t("long_term.features.flexible_terms.title"),
        description: t("long_term.features.flexible_terms.description"),
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-12 h-12 sm:w-16 sm:h-16"
            >
                <path
                    d="M8 16V48H35.52C34.9543 46.2788 34.6662 44.4785 34.6667 42.6667H18.6667C18.6667 41.2522 18.1048 39.8956 17.1046 38.8954C16.1044 37.8952 14.7478 37.3333 13.3333 37.3333V26.6667C16.2933 26.6667 18.6667 24.2933 18.6667 21.3333H45.3333C45.3333 22.7478 45.8952 24.1044 46.8954 25.1046C47.8956 26.1048 49.2522 26.6667 50.6667 26.6667V26.8267C52.4533 26.8267 54.24 27.1467 56 27.7333V16H8ZM32 24C27.4667 24.08 24 27.4667 24 32C24 36.5333 27.4667 39.84 32 40C33.0133 40 34.0533 39.7867 35.04 39.3867C35.76 36.4533 36.96 33.68 39.92 30.96C39.6 27.4133 36.24 23.92 32 24ZM57.68 32.72L47.36 43.12L43.76 39.4667L40 43.2533L47.3333 50.6667L61.4133 36.48L57.68 32.72Z"
                    fill="#0B0A0A"
                />
            </svg>
        ),
        title: t("long_term.features.no_hidden_costs.title"),
        description: t("long_term.features.no_hidden_costs.description"),
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-12 h-12 sm:w-16 sm:h-16"
            >
                <path
                    d="M49.92 39.3609C50.8533 37.0942 51.36 34.6675 51.36 32.0009C51.36 30.0809 51.0666 28.2409 50.56 26.5342C48.8266 26.9342 47.0133 27.1475 45.12 27.1475C41.2426 27.1517 37.421 26.2236 33.9774 24.4415C30.5338 22.6593 27.5691 20.0754 25.3333 16.9075C22.9439 22.6962 18.4312 27.3519 12.72 29.9209C12.6133 30.5875 12.6133 31.3075 12.6133 32.0009C12.6133 34.5468 13.1148 37.0677 14.089 39.4198C15.0633 41.7719 16.4913 43.9091 18.2915 45.7093C21.9272 49.345 26.8583 51.3875 32 51.3875C34.8 51.3875 37.4933 50.7742 39.92 49.6809C41.44 52.5875 42.1333 54.0275 42.08 54.0275C37.7066 55.4942 34.32 56.2142 32 56.2142C25.5466 56.2142 19.3866 53.6809 14.8533 49.1209C12.0934 46.374 10.0434 42.9969 8.87998 39.2809H5.33331V27.1475H8.23998C9.12062 22.8609 11.1453 18.8926 14.0992 15.6638C17.053 12.4349 20.8259 10.066 25.0174 8.80823C29.2089 7.5505 33.6627 7.45093 37.9063 8.52009C42.1498 9.58925 46.0248 11.7873 49.12 14.8809C52.4794 18.2291 54.7714 22.4976 55.7066 27.1475H58.6666V39.2809H58.5066L49.0133 48.0009L34.88 46.4009V41.9475H47.76L49.92 39.3609ZM24.72 31.3875C25.52 31.3875 26.2933 31.7075 26.8533 32.2942C27.4161 32.8616 27.7319 33.6284 27.7319 34.4275C27.7319 35.2267 27.4161 35.9935 26.8533 36.5609C26.2933 37.1209 25.52 37.4409 24.72 37.4409C23.04 37.4409 21.68 36.1075 21.68 34.4275C21.68 32.7475 23.04 31.3875 24.72 31.3875ZM39.2533 31.3875C40.9333 31.3875 42.2666 32.7475 42.2666 34.4275C42.2666 36.1075 40.9333 37.4409 39.2533 37.4409C37.5733 37.4409 36.2133 36.1075 36.2133 34.4275C36.2133 33.6213 36.5336 32.848 37.1037 32.2779C37.6738 31.7078 38.4471 31.3875 39.2533 31.3875Z"
                    fill="#0B0A0A"
                />
            </svg>
        ),
        title: t("cards.support.title"),
        description: t("long_term.features.support"),
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-12 h-12 sm:w-16 sm:h-16"
            >
                <path
                    d="M32 5.33337C42.2933 5.33337 50.6667 13.7067 50.6667 24C50.6667 38 32 58.6667 32 58.6667C32 58.6667 13.3333 38 13.3333 24C13.3333 13.7067 21.7067 5.33337 32 5.33337ZM27.92 37.3334L45.3333 19.76L41.6 16L27.92 29.8134L22.4 24.24L18.6667 28L27.92 37.3334Z"
                    fill="#0B0A0A"
                />
            </svg>
        ),
        title: t("long_term.features.delivery.title"),
        description: t("long_term.features.delivery.description"),
    },
];

function LongTermFeat() {
    const { t } = useTranslation();
    const cardData = getCardData(t);

    return (
        <section className="w-full bg-base mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] md:py-[80px] flex flex-col items-center gap-[24px] sm:gap-[32px] md:gap-[48px]">
            {/* All cards in a responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] w-full max-w-[1200px]">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        className="h-auto min-h-[200px] sm:min-h-[250px] bg-base rounded-2xl shadow-[6px_7px_25.2px_#00000012] border-none w-full max-w-[400px] mx-auto transition-transform hover:shadow-lg hover:scale-[1.01]"
                    >
                        <CardContent className="h-full p-[16px] sm:p-[22px] flex flex-col items-center justify-center gap-2 sm:gap-4">
                            {card.icon}
                            <h3 className="font-gilroy text-base-black text-xl sm:text-2xl md:text-[28px] text-center leading-[120%]">
                                {card.title}
                            </h3>
                            <p className="text-base-black text-sm sm:text-base text-center leading-[140%]">
                                {card.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default LongTermFeat;