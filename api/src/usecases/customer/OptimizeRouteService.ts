import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";
import { IOptimizeRouteService } from "../../entities/interfaces/IOptimizeRouteService";

export class OptimizeRouteService implements IOptimizeRouteService {
  constructor(private readonly repository: ICustomerRepository) {}

  public async execute(): Promise<string[]> {
    // Obtém a lista de clientes do repositório
    const customers = await this.repository.getAllCustomers();

    // Verifica se há clientes suficientes para otimização
    if (customers.length < 2) {
      throw new Error("Não há clientes suficientes para otimizar a rota.");
    }

    // Encontra a rota mais curta
    const optimizedRoute = this.findShortestRoute(customers);

    return optimizedRoute;
  }

  private calculateDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number {
    const deltaX = x1 - x2;
    const deltaY = y1 - y2;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }

  private findShortestRoute(customers: Customer[]): string[] {
    // Implementa o algoritmo de força bruta para encontrar a rota mais curta
    // Pode ser substituído por algoritmos mais eficientes para números grandes de clientes

    const permutations = this.permute(
      customers.map((customer, index) => index)
    );
    let shortestRoute: string[] | null = null;
    let shortestDistance = Infinity;

    for (const permutation of permutations) {
      const route: string[] = [];
      let routeValid = true;

      for (const index of permutation) {
        const customer = customers[index];

        if (customer && customer.name) {
          route.push(customer.name);
        } else {
          routeValid = false;
          break;
        }
      }

      if (routeValid) {
        const totalDistance = this.calculateTotalDistance(
          customers,
          permutation
        );

        if (totalDistance < shortestDistance) {
          shortestRoute = route;
          shortestDistance = totalDistance;
        }
      }
    }

    if (shortestRoute === null) {
      throw new Error("Não foi possível encontrar uma rota otimizada.");
    }

    return shortestRoute;
  }

  private calculateTotalDistance(
    customers: Customer[],
    permutation: number[]
  ): number {
    let totalDistance = 0;

    for (let i = 0; i < permutation.length - 1; i++) {
      const customer1 = customers[permutation[i]];
      const customer2 = customers[permutation[i + 1]];

      if (
        customer1 &&
        customer1.xCoord !== undefined &&
        customer1.yCoord !== undefined &&
        customer2 &&
        customer2.xCoord !== undefined &&
        customer2.yCoord !== undefined
      ) {
        totalDistance += this.calculateDistance(
          customer1.xCoord,
          customer1.yCoord,
          customer2.xCoord,
          customer2.yCoord
        );
      } else {
        throw new Error("Coordenadas inválidas para calcular a distância");
      }
    }

    return totalDistance;
  }

  private permute(array: number[]): number[][] {
    const result: number[][] = [];

    const generatePermutations = (array: number[], start: number): void => {
      if (start === array.length - 1) {
        result.push([...array]);
        return;
      }

      for (let i = start; i < array.length; i++) {
        [array[start], array[i]] = [array[i], array[start]];
        generatePermutations(array, start + 1);
        [array[start], array[i]] = [array[i], array[start]]; // Desfaz a troca para continuar a busca
      }
    };

    generatePermutations(array, 0);
    return result;
  }
}
