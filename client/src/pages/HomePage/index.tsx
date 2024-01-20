import { FC } from "react";
import CustomerList from "../../components/CustomerList";
import CustomerForm from "../../components/CustomerForm";
import OptimizeRouteButton from "../../components/OptimizeRouteButtom";
import { Customer } from "../../types/customer";
import { Container, Title } from "./styles";
import { CustomerMap } from "../../components/CustomerMap";

export const HomePage: FC = () => {
  const customers: Customer[] = [
    {
      id: "",
      name: "Cliente 1",
      email: "client1@email.com",
      xCoord: "10",
      yCoord: "15",
    },
    {
      id: "",
      name: "Cliente 2",
      email: "client1@email.com",
      xCoord: "15",
      yCoord: "20",
    },
    {
      id: "",
      name: "Cliente 3",
      email: "client1@email.com",
      xCoord: "200",
      yCoord: "255",
    },
  ];

  const handleSubmit = (formData: FormData) => {
    // Lógica para lidar com os dados do formulário
    console.log("Dados do formulário:", formData);
  };

  const handleOptimizeRoute = () => {
    // Lógica para otimizar a rota
    console.log("Rota otimizada!");
  };

  return (
    <Container>
      <Title>
        <h1>Aplicação de Gerenciamento de Clientes</h1>
      </Title>

      {/* Componente para listar clientes */}
      <CustomerList customers={customers} />

      {/* Componente para cadastrar novos clientes */}
      <CustomerForm onSubmit={handleSubmit} />

      {/* Componente para otimizar a rota */}
      <OptimizeRouteButton onClick={handleOptimizeRoute} />

      <div>
        <h1>Mapa de Clientes</h1>
        <CustomerMap customers={customers} />
      </div>
    </Container>
  );
};
