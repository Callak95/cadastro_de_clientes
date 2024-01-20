import { inject, injectable } from "tsyringe";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";
import { IListCustomersService } from "../../entities/interfaces/IListCustomersService";

@injectable()
export class ListCustomersService implements IListCustomersService {
  private readonly repository: ICustomerRepository;

  constructor(@inject("ICustomerRepository") repository: ICustomerRepository) {
    this.repository = repository;
  }

  public async execute(): Promise<Customer[]> {
    return await this.repository.getAllCustomers();
  }
}
