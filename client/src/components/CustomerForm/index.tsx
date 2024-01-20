import { FC, useState } from "react";
import { Form } from "./styles";

interface CustomerFormProps {
  onSubmit: (formData: FormData) => void;
}

export const CustomerForm: FC<CustomerFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    xCoord: "",
    yCoord: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Crie uma nova instância de FormData
    const formDataToSend = new FormData(e.currentTarget);

    // Envie o formData
    onSubmit(formDataToSend);

    // Limpe o estado local
    setFormData({
      name: "",
      email: "",
      xCoord: "",
      yCoord: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Formulário para cadastro de cliente</h2>
      <label>
        <span>Nome:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>E-mail:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Coordenada X:</span>
        <input
          type="text"
          name="xCoord"
          value={formData.xCoord}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Coordenada Y:</span>
        <input
          type="text"
          name="yCoord"
          value={formData.yCoord}
          onChange={handleChange}
        />
      </label>
      <div>
        <button type="submit">Cadastrar Cliente</button>
      </div>
    </Form>
  );
};
