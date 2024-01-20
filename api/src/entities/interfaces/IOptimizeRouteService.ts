import { Customer } from "../Customer";

export interface IOptimizeRouteService {
  execute(): Promise<Customer[]>;
}
