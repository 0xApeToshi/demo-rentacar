// src/App.tsx
import "./App.css";
import { ConfigProvider } from "antd";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LongTermPage from "./components/pages/LongTermPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import BookingProvider from "./context/BookingContext";
import CarSelection from "./components/bookingprocess/CarSelection";
import ProtectionProducts from "./components/bookingprocess/ProtectionProducts";
import Addons from "./components/bookingprocess/Addons";
import Payment from "./components/bookingprocess/Payment";
import CityRentalPage from "./components/pages/CityRentalPage";
import ContactForm from "./components/common/ContactForm";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    DatePicker: {
                        activeBorderColor: "#c70c3c",
                        hoverBorderColor: "#c70c3c",
                        activeBg: "#fafafa",
                        colorBgContainer: "#fafafa",
                    },
                },
            }}
        >
            <BrowserRouter>
                <Header />
                <BookingProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/long-term" element={<LongTermPage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                        <Route path="/contact" element={<ContactForm />} />

                        {/* Dynamic city rental routes */}
                        <Route path="/rent-:citySlug" element={<CityRentalPage />} />

                        {/* Booking process routes */}
                        <Route path="/booking" element={<CarSelection />} />
                        <Route
                            path="/booking/protection-products"
                            element={<ProtectionProducts />}
                        />
                        <Route path="/booking/add-ons" element={<Addons />} />
                        <Route path="/booking/payment" element={<Payment />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BookingProvider>
                <Footer />
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;