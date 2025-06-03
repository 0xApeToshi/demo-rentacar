import { carCategories } from "@/utils/types/carTypes";
import { useState, FormEvent, useEffect } from "react";
import Button from "./Button";
import { FormData } from "@/utils/types/formTypes";

function ContactForm() {
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
        if (!formData.firstName) return "First name is required";
        if (!formData.lastName) return "Last name is required";
        if (!formData.email) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            return "Invalid email format";
        if (!formData.carType) return "Please select a car type";
        if (!formData.message) return "Message is required";
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
            setErrorMessage("Failed to submit form. Please try again.");
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
                        src="/src/assets/ContactFormBG.png"
                        alt="Background decoration"
                    />
                    <img
                        className="absolute w-[813px] h-[914px] top-0 right-0 object-cover object-[25%_75%]"
                        src="/src/assets/ContactFormPerson.png"
                        alt="Contact form illustration"
                    />
                    <div className="absolute rounded-tr-[80px] bg-primary w-[983px] h-[865px] bottom-0 left-0"></div>
                </div>

                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="relative max-w-[656px] text-left flex z-1 flex-col gap-[20px] items-end"
                >
                    <h3 className="text-[64px] w-full leading-[106%] font-gilroy text-base">
                        Kontaktirajte nas
                    </h3>

                    <div className="flex w-full flex-col gap-[10px]">
                        <label
                            htmlFor="company"
                            className="text-base text-[14px] leading-[120%]"
                        >
                            Company (Optional)
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
                                First Name *
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
                                Last Name *
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
                                Email *
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
                                Choose car type *
                            </label>
                            <select
                                id="carType"
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                className="w-fill bg-base py-[12px] px-[14px] border border-secondary rounded-[8px]"
                            >
                                <option value="">Select a car type</option>
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
                            Message *
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
                            I am 22 years of age or older.
                        </label>
                    </div>

                    <Button
                        variant="primary"
                        className="bg-secondary-1000"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                        {!isSubmitting && (
                            <img
                                className="pl-[8px]"
                                src="/src/assets/PaperPlaneTilt.svg"
                                alt=""
                            />
                        )}
                    </Button>
                    {/* I would prefer if these were popups, but this is just mock */}
                    {errorMessage && (
                        <div className="bg-base rounded text-primary text-sm self-center">
                            {errorMessage}
                        </div>
                    )}

                    {submitSuccess && (
                        <div className="bg-base rounded text-green-500 text-sm self-center">
                            Form submitted successfully!
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
}

export default ContactForm;
