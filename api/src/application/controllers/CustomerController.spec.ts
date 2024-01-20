import "reflect-metadata";
import { CustomerController } from "./CustomerController";
import { describe, expect, it } from "vitest";
import { CreateCustomerService } from "../../usecases/customer/CreateCustomerService";
import { ListCustomersService } from "../../usecases/customer/ListCustomersService";
import { OptimizeRouteService } from "../../usecases/customer/OptimizeRouteService";
import { MockCustomerRepository } from "../../adapters/express/repositories/postgres/MockCustomerRepository";
import { Request } from "express";
import { CustomerMapper } from "../../adapters/express/mappers/CustomerMapper";
import { Customer } from "../../entities/Customer";

describe("CustomerController", () => {
  const repository = new MockCustomerRepository();

  repository.createCustomer(
    CustomerMapper.toData(
      new Customer("", "Client1", "client1@example.com", 10, 20)
    )
  );
  repository.createCustomer(
    CustomerMapper.toData(
      new Customer("", "Client2", "client2@example.com", 15, 25)
    )
  );

  const controller = new CustomerController(
    new CreateCustomerService(repository),
    new ListCustomersService(repository),
    new OptimizeRouteService(repository)
  );

  it("deve criar um cliente corretamente", async () => {
    const request = {
      body: {
        name: "John Doe",
        email: "john@example.com",
        xCoord: 1,
        yCoord: 2,
      },
    } as Request;

    const result = await controller.createCustomer(request);

    expect(result.name).toEqual("John Doe");
    expect(result.email).toEqual("john@example.com");
    expect(result.id).toBeDefined();
  });

  it("deve listar clientes corretamente", async () => {
    const result = await controller.listCustomer();

    expect(result).toHaveLength(3);
    expect(result[0].name).toEqual("Client1");
    expect(result[0].email).toEqual("client1@example.com");
    expect(result[1].name).toEqual("Client2");
    expect(result[1].email).toEqual("client2@example.com");
  });

  it("deve otimizar a rota corretamente", async () => {
    const result = await controller.optimizeRoute();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    console.log("Rota otimizada:", result);
  });
});
