import { Request } from "express";
import { CustomerMapper } from "../../adapters/express/mappers/CustomerMapper";
import { Database } from "../../adapters/express/repositories/postgres/Database";
import { PostgresCustomerRepository } from "../../adapters/express/repositories/postgres/PostgresCustomerRepository";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";
import { CreateCustomerService } from "../../usecases/customer/CreateCustomerService";
import { ListCustomersService } from "../../usecases/customer/ListCustomersService";
import { CustomerOutput } from "../dtos/CustomerOutput";
import { OptimizeRouteService } from "../../usecases/customer/OptimizeRouteService";

export class CustomerController {
  private repository: ICustomerRepository;

  constructor() {
    this.repository = new PostgresCustomerRepository(new Database());
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

    const costumers = await service.execute();

    return costumers.map((customer) => CustomerMapper.toDTO(customer));
  }

  public async optimizeRoute(): Promise<string[]> {
    const service = new OptimizeRouteService(this.repository);

    return await service.execute();
  }
}
