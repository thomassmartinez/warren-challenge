import GenericException from 'errors/GenericException';
import {Api} from 'services/settings-api/api';

export enum TransactionStatus {
  created = 'created',
  processing = 'processing',
  processed = 'processed',
}
export interface ITransaction {
  id: string;
  title: string;
  description: string;
  status: TransactionStatus;
  amount: number;
  date: string;
  from: string;
  to: string;
}

const getTransaction = async (): Promise<ITransaction[]> => {
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
  getTransaction,
};
