import { describe, it, expect } from "vitest";
import { Customer } from "./Customer";

describe("Customer", () => {
  const validCustomerData = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    xCoord: 0,
    yCoord: 0,
  };

  it("should create a customer instance with valid data", () => {
    const customer = new Customer(
      validCustomerData.id,
      validCustomerData.name,
      validCustomerData.email,
      validCustomerData.xCoord,
      validCustomerData.yCoord
    );

    expect(customer).toBeInstanceOf(Customer);
    expect(customer.id).toBe(validCustomerData.id);
    expect(customer.name).toBe(validCustomerData.name);
    expect(customer.email).toBe(validCustomerData.email);
    expect(customer.xCoord).toBe(validCustomerData.xCoord);
    expect(customer.yCoord).toBe(validCustomerData.yCoord);
  });

  it("should throw an error when creating a customer with missing required fields", () => {
    const createCustomerWithMissingField = () => new Customer();

    expect(createCustomerWithMissingField).toThrowError(
      "Todos os campos são obrigatórios"
    );
  });

  it("should throw an error when creating a customer with invalid coordinates", () => {
    const createCustomerWithInvalidCoordinates = () =>
      new Customer(
        validCustomerData.id,
        validCustomerData.name,
        validCustomerData.email
      );

    expect(createCustomerWithInvalidCoordinates).toThrowError(
      "As coordenadas devem ser números"
    );
  });

  it("should calculate distance to another customer", () => {
    const customer1 = new Customer("1", "John Doe", "john@example.com", 0, 0);
    const customer2 = new Customer("2", "Jane Doe", "jane@example.com", 3, 4);

    const distance = customer1.calculateDistanceTo(customer2);
    // Distância entre (0, 0) e (3, 4) usando o teorema de Pitágoras é 5
    expect(distance).toBe(5);
  });
});
