import React from 'react';

import Newsletter from '../../components/Newsletter';
import ListMaisVendidos from './listMaisVendidos';
import * as S from './style';

const Home = () => (
  <S.Home>
    <S.ImgTopo />
    <ListMaisVendidos />
    <Newsletter />
  </S.Home>
);

export default Home;
