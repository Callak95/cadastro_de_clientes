import { CustomerMapper } from "../../mappers/CustomerMapper";
import { Customer } from "../../../../entities/Customer";
import { CustomerData } from "../../../../entities/CustomerData";
import { ICustomerRepository } from "../../../../entities/interfaces/ICustomerRepository";

export class MockCustomerRepository implements ICustomerRepository {
  private customers: CustomerData[] = [];

  async createCustomer(customer: CustomerData): Promise<Customer> {
    // Simula a criação de um cliente
    const newCustomer = {
      ...customer,
      id: `generatedId-${this.customers.length + 1}`, // Simula a geração de um ID único
    };
    this.customers.push(newCustomer);
    return CustomerMapper.toEntity(newCustomer);
  }

  async getCustomerById(id: string): Promise<Customer | null> {
    // Simula a busca de um cliente pelo ID
    const customer = await this.customers.find((c) => c.id === id);
    return customer ? CustomerMapper.toEntity(customer) : null;
  }

  async getAllCustomers(): Promise<Customer[]> {
    // Retorna todos os clientes
    return (await Promise.resolve(this.customers)).map((customer) => CustomerMapper.toEntity(customer));
  }
}