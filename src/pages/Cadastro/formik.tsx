import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from './styles';

const Formik = () => {
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [mask, setMask] = useState('');

  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data: any) {
    console.log('Data submitted: ', data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="nome"
          type="text"
          placeholder="Nome"
          ref={register({
            required: 'Nome é obrigatório',
          })}
        />
        {errors.nome && <p className="error">{errors.nome.message}</p>}

        <input
          name="email"
          type="text"
          placeholder="E-mail"
          ref={register({
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Digite um email válido',
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          name="cpf"
          type="number"
          placeholder="CPF"
          ref={register({
            required: 'CPF é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Digite um cpf válido',
            },
          })}
        />
        {errors.cpf && <p className="error">{errors.cpf.message}</p>}

        <input
          name="telefone"
          type="number"
          placeholder="telefone"
          ref={register({
            required: 'CPF é obrigatório',
            pattern: {
              value: /A^[-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Digite um telefone válido',
            },
          })}
        />
        {errors.telefone && <p className="error">{errors.telefone.message}</p>}

        {/* <input name="senha" type="password" placeholder="Senha" />

        <input name="endereco" type="text" placeholder="Rua" />
        <input name="endereco" type="text" placeholder="Numero" />
        <input name="endereco" type="text" placeholder="Bairro" /> */}

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Container>
  );
};

export default Formik;
