import { Customer } from "../Customer";

export interface IListCustomersService {
  execute(): Promise<Customer[]>;
}
