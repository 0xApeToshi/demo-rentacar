export interface SearchState {
  location: string;
  pickupDate: string;
  pickupTime: string;
  dropoffDate: string;
  dropoffTime: string;
}

export interface SearchResponse {
  success: boolean;
  data?: {
    availableCars: Array<{
      id: string;
      make: string;
      model: string;
      year: number;
      price: number;
      available: boolean;
    }>;
  };
  error?: string;
}

export const searchService = {
  async searchCars(params: SearchState): Promise<SearchResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: {
        availableCars: [
          {
            id: "1",
            make: "Toyota",
            model: "Corolla",
            year: 2023,
            price: 50,
            available: true,
          },
          {
            id: "2",
            make: "Honda",
            model: "Civic",
            year: 2023,
            price: 55,
            available: true,
          },
        ],
      },
    };
  },
};
