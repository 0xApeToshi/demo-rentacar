export const dateUtils = {
  formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
  },

  formatTime(date: Date): string {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  },

  isValidDateRange(pickup: Date, dropoff: Date): boolean {
    return pickup < dropoff;
  },
};
