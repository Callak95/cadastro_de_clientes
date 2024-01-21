import { Request } from "express";
import { injectable, inject } from "tsyringe";
import { CustomerMapper } from "../../adapters/express/mappers/CustomerMapper";
import { ICreateCustomerService } from "../../entities/interfaces/ICreateCustomerService";
import { IListCustomersService } from "../../entities/interfaces/IListCustomersService";
import { IOptimizeRouteService } from "../../entities/interfaces/IOptimizeRouteService";
import { CustomerOutput } from "../dtos/CustomerOutput";

@injectable()
export class CustomerController {
  private readonly createCustomerService: ICreateCustomerService;
  private readonly listCustomersService: IListCustomersService;
  private readonly optimizeRouteService: IOptimizeRouteService;

  constructor(
    @inject("ICreateCustomerService")
    createCustomerService: ICreateCustomerService,
    @inject("IListCustomersService")
    listCustomersService: IListCustomersService,
    @inject("IOptimizeRouteService")
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
    
    const result = customers.map((customer) => CustomerMapper.toDTO(customer));

    return result;
  }

  public async optimizeRoute(): Promise<CustomerOutput[]> {
    const customers = await this.optimizeRouteService.execute();

    return customers.map((customer) => CustomerMapper.toDTO(customer));
  }
}
