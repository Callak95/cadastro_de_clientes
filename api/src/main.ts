import "reflect-metadata";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import customerRoutes from "./adapters/express/routes/customerRoutes";

config();

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

// Configuração do body-parser para lidar com JSON
app.use(bodyParser.json());

// Configuração das rotas relacionadas aos clientes
app.use("/api", customerRoutes);

// Rota de status para verificar se o servidor está ativo.
app.get("/status", (req, res) => {
  res.status(200).json({ status: "Server is running" });
});

// Inicialização do servidor
app.listen(port, () => console.log(`listining on port ${port}!`));
