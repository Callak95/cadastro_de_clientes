import { describe, expect, it, vi } from "vitest";
import { MockCustomerRepository } from "../../adapters/express/repositories/postgres/MockCustomerRepository";
import { Customer } from "../../entities/Customer";
import { ListCustomersService } from "./ListCustomersService";
import { CustomerMapper } from "../../adapters/express/mappers/CustomerMapper";

describe("ListCustomersService", () => {
  it("deve retornar a lista de clientes do repositório", async () => {
    // Arrange
    const mockRepository = new MockCustomerRepository();
    mockRepository.createCustomer(
      CustomerMapper.toData(
        new Customer("1", "John Doe", "john@example.com", 10, 20)
      )
    );
    mockRepository.createCustomer(
      CustomerMapper.toData(
        new Customer("2", "Jane Doe", "jane@example.com", 15, 25)
      )
    );

    const listCustomersService = new ListCustomersService(mockRepository);
    const getAllCustomersSpy = vi.spyOn(mockRepository, "getAllCustomers");
    // Act
    const result = await listCustomersService.execute();

    // Assert
    // Verifique se o resultado é uma matriz de clientes e se contém dados esperados
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBeInstanceOf(Customer);

    expect(getAllCustomersSpy).toHaveBeenCalledTimes(1);
  });
});
