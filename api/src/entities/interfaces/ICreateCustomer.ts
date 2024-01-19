import { CreateCustomerInput } from "../../appication/dtos/CreateCustomerInput";
import { Customer } from "../Customer";

export interface ICreateCustomer {
  execute(input: CreateCustomerInput): Promise<Customer>;
}
