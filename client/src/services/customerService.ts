import axios from "axios";

const API_BASE_URL = "http://localhost:8001";

interface CustomerData {
  name: string;
  email: string;
  xCoord: number;
  yCoord: number;
}

export const customerService = {
  async createCustomer(customerData: CustomerData) {
    const response = await axios.post(
      `${API_BASE_URL}/customers`,
      customerData
    );
    return response.data;
  },

  async listCustomers() {
    const response = await axios.get(`${API_BASE_URL}/customers`);
    return response.data;
  },

  async optimizeRoute() {
    const response = await axios.get(`${API_BASE_URL}/optimize-route`);
    return response.data;
  },
};
