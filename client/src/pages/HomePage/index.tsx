import { FC, useEffect, useState } from "react";
import CustomerList from "../../components/CustomerList";
import { CustomerForm } from "../../components/CustomerForm";
import OptimizeRouteButton from "../../components/OptimizeRouteButtom";
import { Container, Title } from "./styles";
import { CustomerMap } from "../../components/CustomerMap";
import { useDispatch, useSelector } from "react-redux";
import { setCustomers } from "../../features/customer/customerSlice";
import { customerService } from "../../services/customerService";
import { RootState } from "../../features";
import { Customer } from "../../types/customer";
import { StatusApplication } from "../../components/StatusApplication";
import { AxiosError } from "axios";

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customer.customers);
  const [listCustomers, setListCustomers] = useState<Customer[]>();
  const [apiResults, setApiResults] = useState<{ errors?: string[]; messages?: string[] }>({
    errors: [],
    messages: [],
  });

  useEffect(() => {
    // Buscar clientes da API e atualizar o estado do Redux
    const fetchCustomers = async () => {
      try {
        const response = await customerService.listCustomers();
        dispatch(setCustomers(response));
      } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
          const responseData = err.response?.data as { error?: string } || {};

          const errorMessage = responseData.error || 'Erro desconhecido';

          setApiResults({ errors: [`Erro ao buscar clientes: ${errorMessage}`] });
        } else {
          console.error("Response object is missing in the error:", err);
        }
      }
    };

    fetchCustomers();
  }, [dispatch]);

  const handleSubmit = async (formData: FormData) => {
    try {
      await customerService.createCustomer({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        xcoord: parseFloat(formData.get("xcoord") as string),
        ycoord: parseFloat(formData.get("ycoord") as string),
      });
      dispatch(setCustomers(await customerService.listCustomers()));
      setApiResults({ messages: [`Cliente ${formData.get("name")} cadastrado com sucesso!`] });
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        const responseData = err.response?.data as { error?: string } || {};

        const errorMessage = responseData.error || 'Erro desconhecido';

        setApiResults({ errors: [`Erro ao cadastrar cliente: ${errorMessage}`] });
      } else {
        console.error("Response object is missing in the error:", err);
      }
    }
  };

  const handleOptimizeRoute = async () => {
    try {
      const optimizedCustomers = await customerService.optimizeRoute();
      setListCustomers(optimizedCustomers);
      setApiResults({ messages: [`Rota otimizada com sucesso!`] });
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        const responseData = err.response?.data as { error?: string } || {};

        const errorMessage = responseData.error || 'Erro desconhecido';

        setApiResults({ errors: [`Erro ao otimizar a rota: ${errorMessage}`] });
      } else {
        console.error("Response object is missing in the error:", err);
      }
    }
  };

  return (
    <Container>
      <Title>
        <h1>Aplicação de Gerenciamento de Clientes</h1>
      </Title>

      {/* Componente para listar erros/sucesso na execução */}
      <StatusApplication
        errors={apiResults.errors}
        messages={apiResults.messages}
        setApiResults={setApiResults}
      />

      {/* Componente para listar clientes */}
      <CustomerList customers={customers} />

      {/* Componente para cadastrar novos clientes */}
      <CustomerForm onSubmit={handleSubmit} />

      {/* Componente para otimizar a rota */}
      <OptimizeRouteButton onClick={handleOptimizeRoute} />

      <div>
        <h1>Mapa de Clientes</h1>
        <CustomerMap customers={listCustomers} />
      </div>
    </Container>
  );
};
