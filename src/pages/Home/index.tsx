import React from 'react';
import {Header, TransactionsList} from './components/';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TransactionsList />
    </>
  );
};
