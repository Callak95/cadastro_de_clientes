import { container } from "tsyringe";
import express, { Request, Response } from "express";
import { CustomerController } from "../../../application/controllers/CustomerController";
import { ICreateCustomerService } from "../../../entities/interfaces/ICreateCustomerService";
import { ICustomerRepository } from "../../../entities/interfaces/ICustomerRepository";
import { IListCustomersService } from "../../../entities/interfaces/IListCustomersService";
import { IOptimizeRouteService } from "../../../entities/interfaces/IOptimizeRouteService";
import { CreateCustomerService } from "../../../usecases/customer/CreateCustomerService";
import { ListCustomersService } from "../../../usecases/customer/ListCustomersService";
import { OptimizeRouteService } from "../../../usecases/customer/OptimizeRouteService";
import { PostgresCustomerRepository } from "../repositories/postgres/PostgresCustomerRepository";
import { Database } from "../repositories/postgres/Database";

const router = express.Router();

container.register<Database>("Database", {
  useClass: Database,
})

container.register<ICustomerRepository>("ICustomerRepository", {
  useClass: PostgresCustomerRepository,
});

container.register<PostgresCustomerRepository>("PostgresCustomerRepository", {
  useClass: PostgresCustomerRepository,
})

container.register<ICreateCustomerService>("ICreateCustomerService", {
  useClass: CreateCustomerService,
});

container.register<IListCustomersService>("IListCustomersService", {
  useClass: ListCustomersService,
});

container.register<IOptimizeRouteService>("IOptimizeRouteService", {
  useClass: OptimizeRouteService,
});

const controller = container.resolve(CustomerController);

router.get("/customers", async (req: Request, res: Response) => {
  try {
    const customers = await controller.listCustomer();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.post("/customers", async (req: Request, res: Response) => {
  try {
    const customer = await controller.createCustomer(req);
    res
      .status(200)
      .json(`Usuário ${(await customer).name} foi criado com sucesso!`);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.get("/optimize-route", async (req: Request, res: Response) => {
  try {
    const optimizeRoute = await controller.optimizeRoute();
    res.status(200).json(optimizeRoute);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
