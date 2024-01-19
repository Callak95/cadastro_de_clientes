# cadastro_de_clientes

## Backend (Node.js + Express):

### 1. Entidades:

- `Customer.ts`: Define a entidade Customer com propriedades como id, name, email, phone, xCoord, yCoord.

### 2. Adapters:

- `express/routes/customerRoutes.ts`: Define as rotas relacionadas aos clientes utilizando Express.
- `postgres/repositories/customerRepository.ts`: Implementa operações do banco de dados relacionadas aos clientes.

  #### Mappers:

- `mappers/customerMapper.ts`: Converte dados do banco de dados para entidades e vice-versa.

### 3. Use Cases:

- `usecases/customer/listCustomers.ts`: Lista os clientes. 
- `usecases/customer/createCustomer.ts`: Cria um novo cliente.
- `usecases/customer/optimizeRoute.ts`: Otimiza a rota de atendimento.

  #### Main:

- `main.ts`: Inicializa o servidor Express e configura as rotas.

## Frontend (React):

### 1. Componentes:

- `components/CustomerList.tsx`: Exibe a lista de clientes.
- `components/CustomerForm.tsx`: Formulário para cadastrar novos clientes.- `components/OptimizeRouteButton.tsx`: Botão para otimizar a rota.

### 2. Serviços:

- `services/customerService.ts`: Realiza chamadas à API para manipulação de clientes.

### 3. App:

- `App.tsx`: Componente principal que renderiza os demais componentes.

### 4. Observações:

Cada pasta em `usecases/customer/` pode conter regras de negócios específicas para aquela ação.
A camada adapters é responsável por lidar com frameworks e ferramentas externas (Express, PostgreSQL).
A camada entities contém as entidades de negócio do sistema.
A camada mappers converte dados entre formatos.
Use `.env` para armazenar configurações sensíveis, como credenciais do banco de dados.
