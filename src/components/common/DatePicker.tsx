import React, { useState, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";

interface DatePickerProps {
    onChange?: (date: Date) => void;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    initialDate?: Date;
    disabled?: boolean;
    customIconClass?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
    onChange,
    placeholder,
    minDate = new Date(),
    maxDate,
    initialDate,
    disabled = false,
    customIconClass = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        initialDate || null
    );
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        const days: (number | null)[] = Array(firstDayOfMonth).fill(null);
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    };

    const isDateDisabled = (date: Date) => {
        const startOfDay = new Date(date.setHours(0, 0, 0, 0));
        const minDateTime = new Date(minDate.setHours(0, 0, 0, 0));

        if (startOfDay < minDateTime) return true;
        if (maxDate && startOfDay > maxDate) return true;
        return false;
    };

    const handleDateSelect = (day: number) => {
        const newDate = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            day
        );
        if (!isDateDisabled(new Date(newDate))) {
            setSelectedDate(newDate);
            onChange?.(newDate);
            setIsOpen(false);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent, day: number) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleDateSelect(day);
        }
    };

    const navigateMonth = (direction: "prev" | "next") => {
        setCurrentMonth((prev) => {
            const newDate = new Date(prev);
            if (direction === "prev") {
                newDate.setMonth(prev.getMonth() - 1);
            } else {
                newDate.setMonth(prev.getMonth() + 1);
            }
            return newDate;
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative inline-block"
            role="presentation"
        >
            {/* Date Picker Button */}
            <button
                className={`w-[87px] h-[42px] px-3 flex items-center justify-start space-x-2 border rounded-l-[6px] 
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "hover:border-primary"} 
          ${isOpen ? "border-primary" : "border-neutral-700"}`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                aria-label="Choose date"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {!selectedDate && (
                    <Calendar
                        className={`w-4 h-4 text-neutral-700 ${customIconClass}`}
                    />
                )}
                <span className="text-[14px] truncate text-neutral-700">
                    {selectedDate
                        ? formatDate(selectedDate)
                        : placeholder || ""}
                </span>
            </button>

            {/* Calendar Popup */}
            {isOpen && (
                <div
                    className="absolute w-[200px] mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    role="dialog"
                    aria-label="Calendar"
                >
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between p-2 border-b">
                        <button
                            onClick={() => navigateMonth("prev")}
                            className="p-1 hover:bg-gray-100 rounded"
                            aria-label="Previous month"
                        >
                            ←
                        </button>
                        <span className="font-semibold">
                            {currentMonth.toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                        <button
                            onClick={() => navigateMonth("next")}
                            className="p-1 hover:bg-gray-100 rounded"
                            aria-label="Next month"
                        >
                            →
                        </button>
                    </div>

                    <div className="p-2">
                        <div className="grid grid-cols-7 mb-1">
                            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                                (day) => (
                                    <div
                                        key={day}
                                        className="text-center text-xs font-medium text-gray-500"
                                    >
                                        {day}
                                    </div>
                                )
                            )}
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                            {getDaysInMonth(currentMonth).map((day, index) => {
                                if (day === null) {
                                    return (
                                        <div
                                            key={`empty-${index}`}
                                            className="h-8"
                                        />
                                    );
                                }

                                const date = new Date(
                                    currentMonth.getFullYear(),
                                    currentMonth.getMonth(),
                                    day
                                );
                                const isDisabled = isDateDisabled(
                                    new Date(date)
                                );
                                const isSelected =
                                    selectedDate?.toDateString() ===
                                    date.toDateString();

                                return (
                                    <button
                                        key={`day-${day}`}
                                        onClick={() =>
                                            !isDisabled && handleDateSelect(day)
                                        }
                                        onKeyDown={(e) =>
                                            !isDisabled &&
                                            handleKeyPress(e, day)
                                        }
                                        className={`h-8 rounded flex items-center justify-center text-sm
                      ${
                          isDisabled
                              ? "text-gray-300 cursor-not-allowed"
                              : isSelected
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-100 text-gray-700"
                      }`}
                                        disabled={isDisabled}
                                        aria-label={date.toLocaleDateString()}
                                        aria-selected={isSelected}
                                        role="gridcell"
                                        tabIndex={isDisabled ? -1 : 0}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
