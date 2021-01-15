import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles, Scope } from '@unform/core';
import { Container } from './styles';

import Input from '../../components/Input';

interface Errors {
  [key: string]: string;
}

const Cadastro: React.FC = () => {
  //referenciando ao formulario
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      // resetando os erros
      formRef.current?.setErrors({});

      //validando os dados
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatório'),

        endereco: Yup.object().shape({
          rua: Yup.string().required('Rua é obrigatório'),
          numero: Yup.string().required('Número é obrigatório'),
          bairro: Yup.string().required('Bairro é obrigatório'),
        }),
      });

      //passando os dados para o schema validar os inputs
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
    } catch (err) {
      // pegando os erros
      if (err instanceof Yup.ValidationError) {
        // criando uma lista para guardar os erros
        const errorMessages: Errors = {};

        // percorrendo os errors localizados no form
        err.inner.forEach((error) => {
          // add o erros na lista
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="text" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Scope path="endereco">
          <Input name="rua" type="text" placeholder="Rua" />
          <Input name="numero" type="text" placeholder="Numero" />
          <Input name="bairro" type="text" placeholder="Bairro" />
        </Scope>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </Form>
    </Container>
  );
};

export default Cadastro;
