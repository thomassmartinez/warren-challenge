import React, {useCallback, useEffect, useState} from 'react';
import {Container, Content, Search, Select, Table} from './styles';

import {ITransaction, TransactionsServices} from 'services/api/transactions';
import {Modal} from 'pages/Home/components/TransactionModal';
import {formatCurrency} from 'utils/formatCurrency';

type FilterType = 'title' | 'status';

export const TransactionsList: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [transaction, setTransaction] = useState<ITransaction>(
    {} as ITransaction,
  );
  const [filterTransaction, setFilterTransaction] = useState<ITransaction[]>(
    [],
  );

  const [filterSelected, setFilterSelected] = useState<FilterType>('status');

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getTransactions = useCallback(async () => {
    try {
      setLoading(true);
      setFilterTransaction([]);
      const response = await TransactionsServices.getTransactions();
      setTransactions(response);
      setFilterTransaction(response);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getSpecificTrasactions = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response = await TransactionsServices.getTransactionById(id);
      setTransaction(response);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCloseModal = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleModalOpenClose = useCallback(
    (id) => {
      getSpecificTrasactions(id);
      openCloseModal();
    },
    [getSpecificTrasactions, openCloseModal],
  );

  const searchItem = useCallback(
    (e, type: FilterType) => {
      const filteredItems = transactions.filter((i) => {
        return i[type]
          .toLocaleLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setFilterTransaction(filteredItems);
    },
    [transactions],
  );

  const handleSelectChange = useCallback(
    (e) => {
      setFilterSelected(e.target.value);
      getTransactions();
    },
    [getTransactions],
  );

  return (
    <>
      <Container>
        <Content>
          <Search
            type="text"
            placeholder={`Search for ${filterSelected}`}
            data-testid="search"
            onChange={(e) => searchItem(e, filterSelected)}
          />
          <Select onChange={handleSelectChange} data-testid="select">
            <option value="status">status</option>
            <option value="title">título</option>
          </Select>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {!loading && filterTransaction.length > 1 ? (
                filterTransaction.map(
                  ({id, description, amount, title, status}) => (
                    <tr key={id} onClick={() => handleModalOpenClose(id)}>
                      <td>{title}</td>
                      <td>{description}</td>
                      <td>{status}</td>
                      <td>{formatCurrency(amount)}</td>
                    </tr>
                  ),
                )
              ) : (
                <tr>
                  <td>Nenhum dado a ser apresentado</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Content>
      </Container>
      <Modal open={open} data={transaction} openCloseModal={openCloseModal} />)
    </>
  );
};
