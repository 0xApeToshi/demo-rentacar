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
            image: '/src/assets/anticaTestimonialmage.jfif',
        },
    },
    {
        id: '2',
        rating: 5,
        text: 'I have been using OPTIMA RENT services for more than three years now and I am extremely satisfied with the cooperation so far. Very friendly and professional guys!',
        author: {
            name: 'Damir Jelinic',
            title: 'Customer',
            image: '/src/assets/damirTestimonial.jfif',
        },
    },
    {
        id: '3',
        rating: 4.5,
        text: 'I have to praise OPTIMA RENT because they saved us when we needed it most, we were left without any transport in the middle of Lucko, no one alive could provide us with transport to Sibenik...',
        author: {
            name: 'Antonia Zorica',
            title: 'Customer',
            image: '/src/assets/anticaTestimonialmage.jfif',
        },
    },
    {
        id: '4',
        rating: 5,
        text: 'I have been using OPTIMA RENT services for more than three years now and I am extremely satisfied with the cooperation so far. Very friendly and professional guys!',
        author: {
            name: 'Damir Jelinic',
            title: 'Customer',
            image: '/src/assets/damirTestimonial.jfif',
        },
    },
];
