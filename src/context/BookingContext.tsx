import { carTypes } from "@/utils/types/carTypes";
import { SearchState } from "@/utils/types/searchTypes";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useReducer,
} from "react";

const STORAGE_KEY = "car_rental_booking_state";
const loadState = (): BookingState => {
    try {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            return JSON.parse(savedState);
        }
    } catch (error) {
        console.error("Error loading state:", error);
    }
    return initialState;
};

// Function to save state to localStorage
const saveState = (state: BookingState) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error("Error saving state:", error);
    }
};

interface BookingState {
    search: SearchState;
    selectedCar: carTypes | null;
    selectedOptions: string[];
    selectedAddons: string[];
    totalPrice: number;
}

type BookingAction =
    | { type: "SET_SEARCH_DETAILS"; payload: Partial<BookingState["search"]> }
    | { type: "SELECT_CAR"; payload: carTypes }
    | { type: "SELECT_OPTIONS"; payload: string[] }
    | { type: "SELECT_ADDONS"; payload: string[] }
    | { type: "UPDATE_TOTAL_PRICE"; payload: number }
    | { type: "RESET_BOOKING" };

export const initialState: BookingState = {
    search: {
        location: "",
        pickupDate: "",
        pickupTime: "",
        dropoffDate: "",
        dropoffTime: "",
        dropoffLocation: "",
    },
    selectedCar: null,
    selectedOptions: [],
    selectedAddons: [],
    totalPrice: 0,
};

const BookingContext = createContext<{
    state: BookingState;
    dispatch: React.Dispatch<BookingAction>;
} | null>(null);

const bookingReducer = (
    state: BookingState,
    action: BookingAction
): BookingState => {
    let newState: BookingState;

    switch (action.type) {
        case "SET_SEARCH_DETAILS":
            newState = {
                ...state,
                search: {
                    ...state.search,
                    ...action.payload,
                },
            };
            break;
        case "SELECT_CAR":
            newState = {
                ...state,
                selectedCar: action.payload,
            };
            break;
        case "SELECT_OPTIONS":
            newState = {
                ...state,
                selectedOptions: action.payload,
            };
            break;
        case "SELECT_ADDONS":
            newState = {
                ...state,
                selectedAddons: action.payload,
            };
            break;
        case "UPDATE_TOTAL_PRICE":
            newState = {
                ...state,
                totalPrice: action.payload,
            };
            break;
        case "RESET_BOOKING":
            newState = initialState;
            break;
        default:
            newState = state;
    }
    saveState(newState);
    return newState;
};

interface BookingProviderProps {
    children: ReactNode;
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
    const [state, dispatch] = useReducer(bookingReducer, loadState());

    useEffect(() => {
        const handleBeforeUnload = () => {
            saveState(state);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () =>
            window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [state]);
    return (
        <BookingContext.Provider value={{ state, dispatch }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
};

export default BookingProvider;
