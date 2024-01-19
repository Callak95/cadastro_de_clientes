import { CreateCustomerInput } from "../../appication/dtos/CreateCustomerInput";
import { CustomerOutput } from "../../appication/dtos/CustomerOutput";
import { Customer } from "../../entities/Customer";
import { ICreateCustomer } from "../../entities/interfaces/ICreateCustomer";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";

export class CreateCustomer implements ICreateCustomer {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  public async execute(input: CreateCustomerInput): Promise<CustomerOutput> {
    const { name, email, xCoord, yCoord } = input;

    const newCustomer = new Customer("", name, email, xCoord, yCoord);

    const createdCustomer =
      await this.customerRepository.createCustomer(newCustomer);

    return createdCustomer;
  }
}
