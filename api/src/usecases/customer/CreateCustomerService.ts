import { inject, injectable } from "tsyringe";
import { CreateCustomerInput } from "../../application/dtos/CreateCustomerInput";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";
import { ICreateCustomerService } from "../../entities/interfaces/ICreateCustomerService";

@injectable()
export class CreateCustomerService implements ICreateCustomerService {
  private readonly customerRepository: ICustomerRepository;

  constructor(
    @inject("ICustomerRepository") customerRepository: ICustomerRepository
  ) {
    this.customerRepository = customerRepository;
  }

  public async execute(input: CreateCustomerInput): Promise<Customer> {
    const { name, email, phone, xcoord, ycoord } = input;

    const newCustomer = new Customer("", name, email, phone, xcoord, ycoord);

    const createdCustomer =
      await this.customerRepository.createCustomer(newCustomer);
    
    return createdCustomer;
  }
}
