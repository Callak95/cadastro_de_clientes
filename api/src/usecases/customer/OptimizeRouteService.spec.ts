import "reflect-metadata"

import { describe, expect, it } from "vitest";
import { OptimizeRouteService } from "./OptimizeRouteService";
import { MockCustomerRepository } from "../../adapters/express/repositories/postgres/MockCustomerRepository";
import { CustomerMapper } from "../../adapters/express/mappers/CustomerMapper";
import { Customer } from "../../entities/Customer";

describe("OptimizeRouteService", () => {
  const mockRepository = new MockCustomerRepository();
  const optimizeRouteService = new OptimizeRouteService(mockRepository);

  it("deve otimizar a rota corretamente", async () => {
    mockRepository.createCustomer(
      CustomerMapper.toData(
        new Customer("1", "Cliente1", "client1@example.com", 10, 20)
      )
    );
    mockRepository.createCustomer(
      CustomerMapper.toData(
        new Customer("2", "Cliente2", "client2@example.com", 15, 25)
      )
    );

    try {
      const optimizedRoute = await optimizeRouteService.execute();

      // Aqui você pode adicionar as asserções necessárias para verificar se a rota otimizada é válida
      expect(Array.isArray(optimizedRoute)).toBe(true);
      expect(optimizedRoute.length).toBeGreaterThan(0);
    } catch (error) {
      // Melhorar a mensagem de erro para entender o que aconteceu
      console.error("Erro ao otimizar a rota:", (error as Error).message);
      expect.fail(
        "Erro inesperado ao otimizar a rota: " +
          (error instanceof Error ? error.message : error)
      );
    }
  });
});
