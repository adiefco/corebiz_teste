import React, { useState } from 'react';
import * as Yup from 'yup';
import apiNews from '../../services/apiNews';

import * as S from './style';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Preencha com seu nome completo'),
  email: Yup.string()
    .email('Preencha com um e-mail válido')
    .required('E-mail é obrigatório'),
});

const Newsletter = () => {
  const [sucess, setSucess] = useState('');

  async function handleSubmit(data) {
    const response = await apiNews.post('', data);
    if (response.data.message === 'Created successfully') {
      setSucess('Email Cadastrado com Sucesso!');
    }
  }

  return (
    <S.Container>

      <h2>Participe de nossas news com promoções e novidades!</h2>
      <h5>{sucess}</h5>
      <form schema={schema} onSubmit={handleSubmit}>

        <S.InputContainer>
          <input name="name" type="text" placeholder="Digite seu nome" />
        </S.InputContainer>
        <S.InputContainer>
          <input name="email" type="text" placeholder="Digite seu email" />
        </S.InputContainer>

        <S.ButtonSubmit type="submit">Eu quero!</S.ButtonSubmit>

      </form>
    </S.Container>
  );
};

export default Newsletter;
