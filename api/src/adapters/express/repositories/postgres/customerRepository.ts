import { Pool, QueryResult } from "pg";
import { ICustomerRepository } from "../../../../entities/interfaces/ICustomerRepository";
import { Customer } from "../../../../entities/Customer";
import { CustomerData } from "../../../../entities/CustomerData";

export class PostgresCustomerRepository implements ICustomerRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async createCustomer(customerData: CustomerData): Promise<Customer> {
    const { rows }: QueryResult = await this.pool.query(
      "INSERT INTO customers (id, name, email, xCoord, yCoord) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        customerData.id,
        customerData.name,
        customerData.email,
        customerData.xCoord,
        customerData.yCoord,
      ]
    );

    return rows[0];
  }

  async getCustomerById(id: string): Promise<Customer | null> {
    const { rows }: QueryResult = await this.pool.query(
      "SELECT * FROM customers WHERE id = $1",
      [id]
    );

    return rows[0] || null;
  }

  async getAllCustomers(): Promise<Customer[]> {
    const { rows }: QueryResult = await this.pool.query(
      "SELECT * FROM customers"
    );

    return rows;
  }
}
