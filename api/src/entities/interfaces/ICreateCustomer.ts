import { CreateCustomerInput } from "../../appication/dtos/CreateCustomerInput";
import { CustomerOutput } from "../../appication/dtos/CustomerOutput";

export interface ICreateCustomer {
  execute(input: CreateCustomerInput): Promise<CustomerOutput>;
}
