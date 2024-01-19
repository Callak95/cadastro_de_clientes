import { CustomerOutput } from "../../appication/dtos/CustomerOutput";

export interface IListCustomersService {
  execute(): Promise<CustomerOutput[]>;
}
