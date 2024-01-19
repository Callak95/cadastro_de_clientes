import { container } from "tsyringe";
import express, { Request, Response } from "express";
import { CustomerController } from "../../../appication/controllers/CustomerController";
import { ICustomerRepository } from "../../../entities/interfaces/ICustomerRepository";
import { PostgresCustomerRepository } from "../repositories/postgres/PostgresCustomerRepository";

const router = express.Router();

container.register<ICustomerRepository>("ICustomerRepository", {
  useClass: PostgresCustomerRepository,
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
