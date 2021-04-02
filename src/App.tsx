import React from 'react';
import Cadastro from './pages/Cadastro';
import FormSquads from './pages/Cadastro/formSquads';
import Formik from './pages/Cadastro/formik';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Cadastro />

      <GlobalStyle />
    </>
  );
};

export default App;
