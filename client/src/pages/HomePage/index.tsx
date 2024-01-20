import { FC, useEffect } from "react";
import CustomerList from "../../components/CustomerList";
import { CustomerForm } from "../../components/CustomerForm";
import OptimizeRouteButton from "../../components/OptimizeRouteButtom";
import { Container, Title } from "./styles";
import { CustomerMap } from "../../components/CustomerMap";
import { useDispatch, useSelector } from "react-redux";
import { setCustomers } from "../../features/customer/customerSlice";
import { customerService } from "../../services/customerService";
import { RootState } from "../../features";

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customer.customers);

  useEffect(() => {
    // Buscar clientes da API e atualizar o estado do Redux
    const fetchCustomers = async () => {
      try {
        const response = await customerService.listCustomers();
        dispatch(setCustomers(response));
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchCustomers();
  }, [dispatch]);

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await customerService.createCustomer({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        xCoord: parseFloat(formData.get("xCoord") as string),
        yCoord: parseFloat(formData.get("yCoord") as string),
      });
      console.log(response);
    } catch (error) {
      console.error("Erro ao cadastrar clientes:", error);
    }
  };

  const handleOptimizeRoute = async () => {
    try {
      const optimizedCustomers = await customerService.optimizeRoute();
      dispatch(setCustomers(optimizedCustomers));
      console.log("Rota otimizada!", optimizedCustomers);
    } catch (error) {
      console.error("Erro ao otimizar a rota:", error);
    }
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
