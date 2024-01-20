// components/CustomerForm.tsx

import React, { useState } from "react";
import { Form } from "./styles";

interface CustomerFormProps {
  onSubmit: (formData: FormData) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
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
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    onSubmit(formData);
    setFormData({ name: "", email: "", xCoord: "", yCoord: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Formulário para cadastro de cliente</h2>
      <label>
        <span>Nome:</span>
        <input type="text" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        <span>E-mail:</span>
        <input type="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        <span>Coordenada X:</span>
        <input type="text" value={formData.xCoord} onChange={handleChange} />
      </label>
      <label>
        <span>Coordenada Y:</span>
        <input type="text" value={formData.xCoord} onChange={handleChange} />
      </label>
      <div>
        <button type="submit">Cadastrar Cliente</button>
      </div>
    </Form>
  );
};

export default CustomerForm;
