import { QueryResult } from "pg";
import { ICustomerRepository } from "../../../../entities/interfaces/ICustomerRepository";
import { Customer } from "../../../../entities/Customer";
import { CustomerData } from "../../../../entities/CustomerData";
import { Database } from "./Database";
import { injectable } from "tsyringe";

@injectable()
export class PostgresCustomerRepository implements ICustomerRepository {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  async createCustomer(customerData: CustomerData): Promise<Customer> {
    const result: QueryResult<Customer> = await this.database.query(
      "INSERT INTO customers (id, name, email, xcoord, ycoord) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        customerData.id,
        customerData.name,
        customerData.email,
        customerData.xcoord,
        customerData.ycoord,
      ]
    );

    return result.rows[0];
  }

  async getCustomerById(id: string): Promise<Customer | null> {
    const result: QueryResult<Customer> = await this.database.query(
      "SELECT * FROM customers WHERE id = $1",
      [id]
    );

    return result.rows[0] || null;
  }

  async getAllCustomers(): Promise<Customer[]> {
    const result: QueryResult<Customer> = await this.database.query(
      "SELECT * FROM customers"
    );

    return result.rows;
  }
}
