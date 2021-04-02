import React, { useCallback, useState } from 'react';
import { Container } from './styles';

const FormSquads = () => {
  const [cadastro, setCadastro] = useState({
    nome: '',
    email: '',
    senha: '',

    endereco: {
      rua: '',
      numero: '',
      bairro: '',
    },
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setCadastro(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      try {
        console.log(cadastro);
      } catch (err) {
        console.log(err);
      }
    },
    [cadastro],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          value={cadastro.nome}
          onChange={handleInputChange}
          name="nome"
          type="text"
          placeholder="Nome"
        />
        <input
          value={cadastro.email}
          onChange={handleInputChange}
          name="email"
          type="text"
          placeholder="E-mail"
        />
        <input
          value={cadastro.senha}
          onChange={handleInputChange}
          name="senha"
          type="password"
          placeholder="Senha"
        />

        <input
          value={cadastro.endereco.rua}
          onChange={handleInputChange}
          name="endereco"
          type="text"
          placeholder="Rua"
        />
        <input
          value={cadastro.endereco.numero}
          onChange={handleInputChange}
          name="endereco"
          type="text"
          placeholder="Numero"
        />
        <input
          value={cadastro.endereco.bairro}
          onChange={handleInputChange}
          name="endereco"
          type="text"
          placeholder="Bairro"
        />

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Container>
  );
};

export default FormSquads;
