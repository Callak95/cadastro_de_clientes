import "reflect-metadata";

import { CreateCustomerService } from "./CreateCustomerService";
import { CreateCustomerInput } from "../../appication/dtos/CreateCustomerInput";
import { describe, expect, it } from "vitest";
import { MockCustomerRepository } from "../../adapters/express/repositories/postgres/MockCustomerRepository";

describe("CreateCustomerService", () => {
  it("deve criar um novo cliente com sucesso", async () => {
    const mockRepository = new MockCustomerRepository();
    const createCustomerService = new CreateCustomerService(mockRepository);

    const inputData: CreateCustomerInput = {
      name: "John Doe",
      email: "john@example.com",
      xCoord: 1,
      yCoord: 2,
    };

    const createdCustomer = await createCustomerService.execute(inputData);

    expect(createdCustomer).toBeDefined();
    expect(createdCustomer.id).toBeDefined();
    expect(createdCustomer.name).toBe(inputData.name);
    expect(createdCustomer.email).toBe(inputData.email);
    expect(createdCustomer.xCoord).toBe(inputData.xCoord);
    expect(createdCustomer.yCoord).toBe(inputData.yCoord);
  });
});
