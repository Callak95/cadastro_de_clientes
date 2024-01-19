import { CreateCustomerInput } from "../../appication/dtos/CreateCustomerInput";
import { Customer } from "../../entities/Customer";
import { ICreateCustomer } from "../../entities/interfaces/ICreateCustomer";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";

export class CreateCustomerService implements ICreateCustomer {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  public async execute(input: CreateCustomerInput): Promise<Customer> {
    const { name, email, xCoord, yCoord } = input;

    const newCustomer = new Customer("", name, email, xCoord, yCoord);

    const createdCustomer =
      await this.customerRepository.createCustomer(newCustomer);

    return createdCustomer;
  }
}
