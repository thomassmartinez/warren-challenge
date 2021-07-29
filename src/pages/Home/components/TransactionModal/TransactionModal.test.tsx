import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {Modal} from '.';

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
