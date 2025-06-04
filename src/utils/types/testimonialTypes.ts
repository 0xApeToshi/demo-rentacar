import { useTranslation } from "react-i18next";

export interface Testimonial {
    id: string;
    rating: number;
    text: string;
    author: {
        name: string;
        title: string;
        image: string;
    };
}

export interface ReviewsCarouselProps {
    testimonials: Testimonial[];
    autoPlayInterval?: number;
    className?: string;
}

export const exampleTestimonials: Testimonial[] = [
    {
        id: '1',
        rating: 4.5,
        text: 'I have to praise OPTIMA RENT because they saved us when we needed it most, we were left without any transport in the middle of Lucko, no one alive could provide us with transport to Sibenik...',
        author: {
            name: 'Antonia Zorica',
            title: 'Customer',
            image: '/assets/anticaTestimonialmage.jpg',
        },
    },
    {
        id: '2',
        rating: 5,
        text: 'I have been using OPTIMA RENT services for more than three years now and I am extremely satisfied with the cooperation so far. Very friendly and professional guys!',
        author: {
            name: 'Damir Jelinic',
            title: 'Customer',
            image: '/assets/damirTestimonial.jpg',
        },
    },
    {
        id: '3',
        rating: 4.5,
        text: 'I have to praise OPTIMA RENT because they saved us when we needed it most, we were left without any transport in the middle of Lucko, no one alive could provide us with transport to Sibenik...',
        author: {
            name: 'Antonia Zorica',
            title: 'Customer',
            image: '/assets/anticaTestimonialmage.jpg',
        },
    },
    {
        id: '4',
        rating: 5,
        text: 'I have been using OPTIMA RENT services for more than three years now and I am extremely satisfied with the cooperation so far. Very friendly and professional guys!',
        author: {
            name: 'Damir Jelinic',
            title: 'Customer',
            image: '/assets/damirTestimonial.jpg',
        },
    },
];

export const useExampleTestimonials = () => {
    const { t } = useTranslation();

    return [
        {
            id: '1',
            rating: 4.5,
            text: t("testimonials.1.text"),
            author: {
                name: t("testimonials.1.author.name"),
                title: t("testimonials.author.title"),
                image: '/assets/anticaTestimonialmage.jpg',
            },
        },
        {
            id: '2',
            rating: 5,
            text: t("testimonials.2.text"),
            author: {
                name: t("testimonials.2.author.name"),
                title: t("testimonials.author.title"),
                image: '/assets/damirTestimonial.jpg',
            },
        },
        {
            id: '3',
            rating: 4.5,
            text: t("testimonials.3.text"),
            author: {
                name: t("testimonials.3.author.name"),
                title: t("testimonials.author.title"),
                image: '/assets/anticaTestimonialmage.jpg',
            },
        },
        {
            id: '4',
            rating: 5,
            text: t("testimonials.4.text"),
            author: {
                name: t("testimonials.4.author.name"),
                title: t("testimonials.author.title"),
                image: '/assets/damirTestimonial.jpg',
            },
        },
    ];
};