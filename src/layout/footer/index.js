import React from 'react';

import { MdHeadsetMic as HeadSetIcon } from 'react-icons/md';
import { IoMdMail as MailIcon } from 'react-icons/io';
import * as S from './style';

import { ReactComponent as LogoCorebiz } from '../../assets/logo.svg';
import { ReactComponent as LogoVtex } from '../../assets/vtex.svg';

const footer = () => (
  <S.Footer>
    <S.Wrapper>
      <S.Location>
        <h3>Localização</h3>
        <hr />
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>
      </S.Location>

      <S.Contact>
        <S.Button href="/">
          <MailIcon size={17} />
          <span>ENTRE EM CONTATO</span>
        </S.Button>
        <S.Button href="/">
          <HeadSetIcon size={17} />
          <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
        </S.Button>
      </S.Contact>

      <S.Sign>
        <a href="/" targe="_blank">
          <p>Created by</p>
          <LogoCorebiz />
        </a>
        <a href="/" targe="_blank">
          <p>Powered by</p>
          <LogoVtex />
        </a>
      </S.Sign>
    </S.Wrapper>
  </S.Footer>
);

export default footer;
