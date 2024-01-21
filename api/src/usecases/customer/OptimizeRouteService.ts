import { inject, injectable } from "tsyringe";
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../entities/interfaces/ICustomerRepository";
import { IOptimizeRouteService } from "../../entities/interfaces/IOptimizeRouteService";

@injectable()
export class OptimizeRouteService implements IOptimizeRouteService {
  private readonly repository: ICustomerRepository;

  constructor(@inject("ICustomerRepository") repository: ICustomerRepository) {
    this.repository = repository;
  }

  public async execute(): Promise<Customer[]> {
    const customers = await this.repository.getAllCustomers();
    return this.optimizeRoute(customers);
  }

  public optimizeRoute(customers: Customer[]): Customer[] {
    this.validateCustomers(customers);
    const optimizedRoute = this.findShortestRoute(customers);

    return optimizedRoute.map((index) => customers[index]);
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

  private findShortestRoute(customers: Customer[]): number[] {
    const permutations = this.permute(
      customers.map((customer, index) => index)
    );
    let shortestRoute: number[] | null = null;
    let shortestDistance = Infinity;

    for (const permutation of permutations) {
      const totalDistance = this.calculateTotalDistance(customers, permutation);

      if (totalDistance < shortestDistance) {
        shortestRoute = permutation;
        shortestDistance = totalDistance;
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

      this.validateCustomers([customer1, customer2]);

      totalDistance += this.validateAndCalculateDistance(customer1, customer2);
    }

    return totalDistance;
  }

  private validateCustomers(customers: Customer[]): void {
    if (customers.length < 2) {
      throw new Error("É necessário pelo menos dois clientes para otimizar a rota");
    }
  }

  private validateCoordinates(coord: number | undefined): coord is number {
    return typeof coord === 'number' && !isNaN(coord);
  }

  private validateAndCalculateDistance(
    customer1: Customer,
    customer2: Customer
  ): number {
    const x1 = typeof customer1.xcoord === 'string' ? parseFloat(customer1.xcoord) : undefined;
    const y1 = typeof customer1.ycoord === 'string' ? parseFloat(customer1.ycoord) : undefined;
    const x2 = typeof customer2.xcoord === 'string' ? parseFloat(customer2.xcoord) : undefined;
    const y2 = typeof customer2.ycoord === 'string' ? parseFloat(customer2.ycoord) : undefined;

    if (
      x1 !== undefined && y1 !== undefined &&
      x2 !== undefined && y2 !== undefined &&
      this.validateCoordinates(x1) &&
      this.validateCoordinates(y1) &&
      this.validateCoordinates(x2) &&
      this.validateCoordinates(y2)
    ) {
      return this.calculateDistance(x1, y1, x2, y2);
    } else {
      throw new Error("Coordenadas inválidas para calcular a distância");
    }
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
        [array[start], array[i]] = [array[i], array[start]];
      }
    };

    generatePermutations(array, 0);
    return result;
  }
}
