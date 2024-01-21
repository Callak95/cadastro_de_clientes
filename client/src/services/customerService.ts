import axios from "axios";

const API_BASE_URL = "http://localhost:8001/api";

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  xcoord: number;
  ycoord: number;
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const customerService = {
  async createCustomer(customerData: CustomerData) {
    try {
      const jsonData = JSON.stringify(customerData);

      const response = await axiosInstance.post("/customers", jsonData);

      return response.data;
    } catch (error) {
      console.error("Error in createCustomer:", error);
      throw error; 
    }
  },

  async listCustomers() {
    try {
      const response = await axiosInstance.get("/customers");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar clientes:", (error as Error).message);
      throw error;
    }
  },

  async optimizeRoute() {
    try {
      const response = await axiosInstance.get("/optimize-route");
      return response.data;
    } catch (error) {
      console.error("Erro ao otimizar rota:", (error as Error).message);
      throw error;
    }
  },
};
