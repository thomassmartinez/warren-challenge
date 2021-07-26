import React from 'react';
import {render, screen} from '@testing-library/react';
import {Modal} from '.';
import {TransactionStatus} from 'services/api/transactions';

const mock = {
  transactionData: {
    amount: 2078.66,
    date: '2020-07-01',
    description: 'et labore proident aute nulla',
    from: 'Aposentadoria',
    id: '5f89f9f257fe42957bf6dbfd',
    status: TransactionStatus.created,
    title: 'Resgate',
    to: 'Conta Warren',
  },
  open: true,
  openCloseModal: () => null,
};

describe('Modal transaction', () => {
  it('should render with status created', () => {
    render(
      <Modal
        data={mock.transactionData}
        open={mock.open}
        openCloseModal={mock.openCloseModal}
      />,
    );

    expect(screen.getByText('Conta Warren')).toBeTruthy();
    expect(screen.getByText('Aposentadoria')).toBeTruthy();
    expect(screen.getByText('R$ 2078,66')).toBeTruthy();
  });
});
