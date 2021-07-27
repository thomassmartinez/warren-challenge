import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react';

import {TransactionsList} from '.';

jest.mock('services/api/transactions', () => ({
  TransactionsServices: {
    getTransactions: () =>
      Promise.resolve([
        {
          id: '5f89f9f257fe42957bf6dbfd',
          title: 'Resgate',
          description: 'et labore proident aute nulla',
          status: 'created',
          amount: 2078.66,
          date: '2020-07-01',
          from: 'Aposentadoria',
          to: 'Conta Warren',
        },
        {
          id: '5f89f9f257fe4aasdas2957bf6dbfd',
          title: 'Resgate',
          description: 'et labore proident aute nulla',
          status: 'created',
          amount: 2078.66,
          date: '2020-07-01',
          from: 'Aposentadoria',
          to: 'Conta Warren',
        },
        {
          id: '5f89f9f271e4213092bd4e41',
          title: 'Depósito',
          description: 'excepteur veniam proident irure pariatur',
          status: 'created',
          amount: 148856.29,
          date: '2020-06-23',
          from: 'Trade',
          to: 'Conta Warren',
        },
        {
          id: '5f89f9f2f318e7asdasd0ff298f528',
          title: 'Movimentação interna',
          description: 'eu officia laborum labore aute',
          status: 'processed',
          amount: 25092.8,
          date: '2020-05-25',
          from: 'Férias',
          to: 'Trade',
        },
        {
          id: '5f89f9f2f318e70ff298f528',
          title: 'Movimentação interna',
          description: 'eu officia laborum labore aute',
          status: 'processed',
          amount: 25092.8,
          date: '2020-05-25',
          from: 'Férias',
          to: 'Trade',
        },
      ]),
  },
}));

describe('Transactions List', () => {
  it('should render table with data', async () => {
    const {getAllByText} = render(<TransactionsList />);

    await waitFor(() => {
      expect(getAllByText('Resgate')).toBeTruthy();
      expect(getAllByText('et labore proident aute nulla')).toBeTruthy();
    });
  });

  it('should render table with status defined by selected options', async () => {
    const {getByTestId, getByText} = render(<TransactionsList />);

    const filterSelected = getByTestId('select');
    fireEvent.change(filterSelected, {target: {value: 'status'}});

    await waitFor(() => {
      expect(getByText('status')).toBeTruthy();
    });
  });

  it('should render table with title defined by selected options', async () => {
    const {getByTestId, getByText} = render(<TransactionsList />);

    const filterSelected = getByTestId('select');
    fireEvent.change(filterSelected, {target: {value: 'title'}});

    await waitFor(() => {
      expect(getByText('título')).toBeTruthy();
    });
  });

  it('should render from option selected as title and searched', async () => {
    const {getByTestId, getAllByText} = render(<TransactionsList />);

    const serchInput = getByTestId('search');
    const filterSelected = getByTestId('select');
    fireEvent.change(filterSelected, {target: {value: 'title'}});
    fireEvent.change(serchInput, {target: {value: 'Res'}});

    await waitFor(() => {
      expect(getAllByText('Resgate')).toBeTruthy();
    });
  });

  it('should render from option selected as status and searched', async () => {
    const {getByTestId, getAllByText} = render(<TransactionsList />);

    const serchInput = getByTestId('search');
    const filterSelected = getByTestId('select');
    fireEvent.change(filterSelected, {target: {value: 'status'}});
    fireEvent.change(serchInput, {target: {value: 'crea'}});

    await waitFor(() => {
      expect(getAllByText('created')).toBeTruthy();
    });
  });
});
