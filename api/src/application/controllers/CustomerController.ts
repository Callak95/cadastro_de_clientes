import { Request } from "express";
import { CustomerMapper } from "../../adapters/express/mappers/CustomerMapper";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";
import { CreateCustomerService } from "../../usecases/customer/CreateCustomerService";
import { ListCustomersService } from "../../usecases/customer/ListCustomersService";
import { OptimizeRouteService } from "../../usecases/customer/OptimizeRouteService";
import { CustomerOutput } from "../dtos/CustomerOutput";
import { inject, injectable } from "tsyringe";

@injectable()
export class CustomerController {
  private repository: ICustomerRepository;

  constructor(@inject("ICustomerRepository") repository: ICustomerRepository) {
    this.repository = repository;
  }

  public async createCustomer(request: Request): Promise<CustomerOutput> {
    const service = new CreateCustomerService(this.repository);

    const customer = await service.execute(
      CustomerMapper.toCreateCustomerInput(request.body)
    );

    return CustomerMapper.toDTO(customer);
  }

  public async listCustomer(): Promise<CustomerOutput[]> {
    const service = new ListCustomersService(this.repository);

    const customers = await service.execute();

    return customers.map((customer) => CustomerMapper.toDTO(customer));
  }

  public async optimizeRoute(): Promise<string[]> {
    const service = new OptimizeRouteService(this.repository);

    return await service.execute();
  }
}
