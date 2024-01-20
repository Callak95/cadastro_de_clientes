// components/CustomerList.tsx

import React, { useEffect, useState } from "react";
import { Customer } from "../../types/customer";
import { Container } from "./styles";

interface CustomerListProps {
  customers: Customer[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento assíncrono
    const fetchData = async () => {
      try {
        // Aguarde um período curto para simular um carregamento assíncrono
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao carregar clientes", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h2>Lista de Clientes</h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <strong>{customer.name}</strong> - {customer.email}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default CustomerList;
