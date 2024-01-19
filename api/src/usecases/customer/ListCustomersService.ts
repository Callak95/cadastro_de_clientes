import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";
import { IListCustomersService } from "../../entities/interfaces/IListCustomersService";

export class ListCustomersService implements IListCustomersService {
  constructor(private readonly repository: ICustomerRepository) {}

  public async execute(): Promise<Customer[]> {
    return await this.repository.getAllCustomers();
  }
}
