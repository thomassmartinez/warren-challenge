import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Modal} from '.';

/* tive que mockar a funcao pq estava dando um erro de line-scape, mesmo eu 
passando o valor certo. Pesquisei na web e achei umas issues q teria q baixar uma
lib para resolver o problema do Intl.NumberFormat, mas n sei até q ponto seria valido
*/

const mock = {
  transactionData: {
    amount: 2078.66,
    date: '2020-07-01',
    description: 'et labore proident aute nulla',
    from: 'Aposentadoria',
    id: '5f89f9f257fe42957bf6dbfd',
    status: 'created',
    title: 'Resgate',
    to: 'Conta Warren',
  },
  open: true,
  openCloseModal: () => null,
};

describe('Transaction Modal', () => {
  it('should render with status created', async () => {
    const {getByText} = render(
      <Modal
        data={mock.transactionData}
        open={mock.open}
        openCloseModal={mock.openCloseModal}
      />,
    );

    await waitFor(() => {
      expect(getByText('Conta Warren')).toBeTruthy();
      expect(getByText('Aposentadoria')).toBeTruthy();
    });
  });
});
