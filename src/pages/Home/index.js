import React from 'react';
import * as Ui from './styles';
import Routes from '../../routes';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Ui.Container>
      <Header />
      <Routes />
    </Ui.Container>
  );
}
