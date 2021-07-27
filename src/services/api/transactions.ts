import GenericException from 'errors/GenericException';
import {Api} from 'services/settings-api/api';

export interface ITransaction {
  id: string;
  title: string;
  description: string;
  status: string;
  amount: number;
  date: string;
  from: string;
  to: string;
}

const getTransactions = async (): Promise<ITransaction[]> => {
  try {
    const {data} = await Api().get<ITransaction[]>('transactions');

    return data;
  } catch (error) {
    throw new GenericException(error.response);
  }
};

const getTransactionById = async (id: string): Promise<ITransaction> => {
  try {
    const {data} = await Api().get<ITransaction>(`transactions/${id}`);

    return data;
  } catch (error) {
    throw new GenericException(error.response);
  }
};

export const TransactionsServices = {
  getTransactionById,
  getTransactions,
};
