import { CreateCustomerInput } from "../../application/dtos/CreateCustomerInput";
import { Customer } from "../Customer";

export interface ICreateCustomerService {
  execute(input: CreateCustomerInput): Promise<Customer>;
}
