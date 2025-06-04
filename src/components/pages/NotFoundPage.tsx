// src/components/pages/NotFoundPage.tsx
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-base px-4 py-16">
            {/* Visual element */}
            <div className="mb-8 relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-gilroy text-lg">404</span>
                </div>
                <img
                    src="/assets/car-lost.svg"
                    alt="Lost car"
                    className="w-64 h-64 object-contain"
                    onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x300?text=Car+Not+Found';
                    }}
                />
            </div>

            {/* Content */}
            <h1 className="text-4xl md:text-5xl font-gilroy text-base-black mb-4 text-center">
                {t('notFound.title', 'Page Not Found')}
            </h1>

            <p className="text-lg text-gray-600 max-w-md text-center mb-8">
                {t('notFound.message', "We couldn't find the page you're looking for. The address may be incorrect or the page may have moved.")}
            </p>

            <p className="text-sm text-gray-500 mb-8">
                {t('notFound.path', 'Attempted path')}: <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code>
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/"
                    className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                    <Home size={18} />
                    {t('notFound.homePage', 'Go to Homepage')}
                </Link>

                <button
                    onClick={() => window.history.back()}
                    className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                    <ArrowLeft size={18} />
                    {t('notFound.back', 'Go Back')}
                </button>
            </div>

            {/* Recommendations */}
            <div className="mt-16 max-w-lg">
                <h3 className="font-gilroy text-base-black text-xl mb-4 text-center">
                    {t('notFound.tryInstead', 'You might be looking for:')}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link to="/rent-zagreb" className="bg-base-light hover:bg-secondary-100 p-3 rounded-lg text-center transition-colors">
                        Rent in Zagreb
                    </Link>
                    <Link to="/rent-split" className="bg-base-light hover:bg-secondary-100 p-3 rounded-lg text-center transition-colors">
                        Rent in Split
                    </Link>
                    <Link to="/long-term" className="bg-base-light hover:bg-secondary-100 p-3 rounded-lg text-center transition-colors">
                        Long Term Rental
                    </Link>
                    <Link to="/about-us" className="bg-base-light hover:bg-secondary-100 p-3 rounded-lg text-center transition-colors">
                        About Us
                    </Link>
                    <Link to="/contact" className="bg-base-light hover:bg-secondary-100 p-3 rounded-lg text-center transition-colors">
                        Contact Us
                    </Link>
                    <Link to="/booking" className="bg-base-light hover:bg-secondary-100 p-3 rounded-lg text-center transition-colors">
                        Book a Car
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;