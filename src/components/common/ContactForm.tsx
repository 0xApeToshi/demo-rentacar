import { carCategories } from "@/utils/types/carTypes";
import { useState, FormEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { FormData } from "@/utils/types/formTypes";

function ContactForm() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState<FormData>({
        company: "",
        firstName: "",
        lastName: "",
        email: "",
        carType: "",
        message: "",
        isOver22: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = e.target;
        const newValue =
            type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value;
        setFormData((prev) => ({ ...prev, [name]: newValue }));
    };

    useEffect(() => {
        if (errorMessage || submitSuccess) {
            const timer = setTimeout(() => {
                setErrorMessage("");
                setSubmitSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage, submitSuccess]);

    const validateForm = (): string => {
        if (!formData.firstName) return t("common.validation.required_field");
        if (!formData.lastName) return t("common.validation.required_field");
        if (!formData.email) return t("common.validation.required_field");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            return t("common.validation.invalid_email");
        if (!formData.carType) return t("common.validation.required_field");
        if (!formData.message) return t("common.validation.required_field");
        return "";
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        setIsSubmitting(true);
        setErrorMessage("");
        setSubmitSuccess(false);

        try {
            // Mock API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form submitted:", formData);

            setSubmitSuccess(true);
            // Reset form
            // setFormData({
            //     company: "",
            //     firstName: "",
            //     lastName: "",
            //     email: "",
            //     carType: "",
            //     message: "",
            //     isOver22: false,
            // });
        } catch (error) {
            setErrorMessage(t("common.validation.form_error"));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-base w-full flex justify-center">
            <section className="w-[1440px] h-[913px] overflow-hidden relative px-[120px] pt-[140px] pb-[80]">
                <div className="absolute w-full h-[913px] top-0 left-0">
                    <img
                        className="absolute w-[1088px] h-[821px] top-0 left-0 object-cover"
                        src="/assets/ContactFormBG.png"
                        alt="Background decoration"
                    />
                    <img
                        className="absolute w-[813px] h-[914px] top-0 right-0 object-cover object-[25%_75%]"
                        src="/assets/ContactFormPerson.png"
                        alt="Contact form illustration"
                    />
                    <div className="absolute rounded-tr-[80px] bg-primary w-[983px] h-[865px] bottom-0 left-0"></div>
                </div>

                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="relative max-w-[656px] text-left flex z-1 flex-col gap-[20px] items-end"
                >
                    <h3 className="text-left h-[140px] w-full text-[64px] font-gilroy text-base leading-[110%]">
                        {t("common.navigation.contact")}
                    </h3>

                    <div className="flex w-full flex-col gap-[10px]">
                        <label
                            htmlFor="company"
                            className="text-base text-[14px] leading-[120%]"
                        >
                            {t("common.form.company")}
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-base py-[12px] px-[14px] border border-secondary rounded-[8px]"
                        />
                    </div>

                    <div className="w-full flex gap-[20px]">
                        <div className="w-1/2 flex flex-col gap-[10px]">
                            <label
                                htmlFor="firstName"
                                className="text-base text-[14px] leading-[120%]"
                            >
                                {t("common.form.first_name")} *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="bg-base py-[12px] px-[14px] border border-secondary rounded-[8px]"
                            />
                        </div>

                        <div className="w-1/2 flex flex-col gap-[10px]">
                            <label
                                htmlFor="lastName"
                                className="text-base text-[14px] leading-[120%]"
                            >
                                {t("common.form.last_name")} *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-fill bg-base py-[12px] px-[14px] border border-secondary rounded-[8px]"
                            />
                        </div>
                    </div>

                    <div className="w-full flex gap-[20px]">
                        <div className="w-1/2 flex flex-col gap-[10px]">
                            <label
                                htmlFor="email"
                                className="text-base text-[14px] leading-[120%]"
                            >
                                {t("common.form.email")} *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-base py-[12px] px-[14px] border border-secondary rounded-[8px]"
                            />
                        </div>

                        <div className="w-1/2 flex flex-col gap-[10px]">
                            <label
                                htmlFor="carType"
                                className="text-base text-[14px] leading-[120%]"
                            >
                                {t("common.form.car_type")} *
                            </label>
                            <select
                                id="carType"
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                className="w-fill bg-base py-[12px] px-[14px] border border-secondary rounded-[8px]"
                            >
                                <option value="">
                                    {t("common.form.select_car_type")}
                                </option>
                                {carCategories.map((category) => (
                                    <option
                                        key={category.value}
                                        value={category.value}
                                    >
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                        <label
                            htmlFor="message"
                            className="text-base text-[14px] leading-[120%]"
                        >
                            {t("common.form.message")} *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-base resize-none h-[148px] py-[12px] px-[14px] border border-secondary rounded-[8px]"
                        />
                    </div>

                    <div className="flex w-full gap-[4px]">
                        <input
                            type="checkbox"
                            id="isOver22"
                            name="isOver22"
                            checked={formData.isOver22}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="isOver22"
                            className="text-base text-[14px] leading-[120%]"
                        >
                            {t("common.form.age_confirmation")}
                        </label>
                    </div>

                    <Button
                        variant="primary"
                        className="bg-secondary-1000"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t("common.form.sending") : t("common.buttons.send")}
                        {!isSubmitting && (
                            <img
                                className="pl-[8px]"
                                src="/assets/PaperPlaneTilt.svg"
                                alt=""
                            />
                        )}
                    </Button>

                    {errorMessage && (
                        <div className="bg-base rounded text-primary text-sm self-center">
                            {errorMessage}
                        </div>
                    )}

                    {submitSuccess && (
                        <div className="bg-base rounded text-green-500 text-sm self-center">
                            {t("common.form.form_success")}
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
}

export default ContactForm;