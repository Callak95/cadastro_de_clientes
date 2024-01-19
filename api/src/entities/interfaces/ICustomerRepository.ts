import { Customer } from "../Customer";
import { CustomerData } from "../CustomerData";

export interface ICustomerRepository {
  createCustomer(customer: CustomerData): Promise<Customer>;
  getCustomerById(id: string): Promise<Customer | null>;
  getAllCustomers(): Promise<Customer[]>;
}
