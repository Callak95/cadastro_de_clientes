import { Request } from "express";
import { CustomerMapper } from "../../adapters/express/mappers/CustomerMapper";
import { CustomerOutput } from "../dtos/CustomerOutput";
import { inject, injectable } from "tsyringe";
import { ICreateCustomerService } from "../../entities/interfaces/ICreateCustomerService";
import { IOptimizeRouteService } from "../../entities/interfaces/IOptimizeRouteService";
import { IListCustomersService } from "../../entities/interfaces/IListCustomersService";

@injectable()
export class CustomerController {
  private readonly createCustomerService: ICreateCustomerService;
  private readonly listCustomersService: IListCustomersService;
  private readonly optimizeRouteService: IOptimizeRouteService;

  constructor(
    @inject("CreateCustomerService")
    createCustomerService: ICreateCustomerService,
    @inject("ListCustomersService")
    listCustomersService: IListCustomersService,
    @inject("OptimizeRouteService")
    optimizeRouteService: IOptimizeRouteService
  ) {
    this.createCustomerService = createCustomerService;
    this.listCustomersService = listCustomersService;
    this.optimizeRouteService = optimizeRouteService;
  }

  public async createCustomer(request: Request): Promise<CustomerOutput> {
    const customer = await this.createCustomerService.execute(
      CustomerMapper.toCreateCustomerInput(request.body)
    );

    return CustomerMapper.toDTO(customer);
  }

  public async listCustomer(): Promise<CustomerOutput[]> {
    const customers = await this.listCustomersService.execute();

    return customers.map((customer) => CustomerMapper.toDTO(customer));
  }

  public async optimizeRoute(): Promise<string[]> {
    return await this.optimizeRouteService.execute();
  }
}
