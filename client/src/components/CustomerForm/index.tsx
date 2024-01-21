import { FC, useState } from "react";
import { Form } from "./styles";

interface CustomerFormProps {
  onSubmit: (formData: FormData) => void;
}

export const CustomerForm: FC<CustomerFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    xcoord: "",
    ycoord: "",
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
      phone: "",
      xcoord: "",
      ycoord: "",
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
        <span>Telefone:</span>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Coordenada X:</span>
        <input
          type="text"
          name="xcoord"
          value={formData.xcoord}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Coordenada Y:</span>
        <input
          type="text"
          name="ycoord"
          value={formData.ycoord}
          onChange={handleChange}
        />
      </label>
      <div>
        <button type="submit">Cadastrar Cliente</button>
      </div>
    </Form>
  );
};
