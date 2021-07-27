import React, {useCallback, useEffect, useState} from 'react';
import {formatCurrency} from 'utils/formatCurrency';
import {ITransaction} from 'services/api/transactions';

import {
  Container,
  Content,
  Section,
  Header,
  Box,
  Divider,
  H1,
  H5,
  H6,
  Progress,
  IconClose,
  BoxProgress,
} from './styles';

interface IPropsModal {
  open: boolean;
  data: ITransaction;
  openCloseModal(): void;
}

export const Modal: React.FC<IPropsModal> = ({open, data, openCloseModal}) => {
  const [statusProgress, setStatuProgress] = useState('');

  const handleWidthProgress = useCallback(() => {
    switch (data.status) {
      case 'created':
        setStatuProgress('4%');
        break;
      case 'processing':
        setStatuProgress('50%');
        break;
      case 'processed':
        setStatuProgress('100%');
        break;

      default:
        setStatuProgress('');
        break;
    }
  }, [data.status]);

  useEffect(() => {
    handleWidthProgress();
  }, [handleWidthProgress]);

  return (
    <Container open={open}>
      <Content>
        <Header>
          <H1 data-testid="title">{data.title}</H1>
          <IconClose onClick={() => openCloseModal()}>x</IconClose>
        </Header>
        <Section>
          <Progress data-testid="progress" statusProgress={statusProgress} />
          <BoxProgress>
            <H5>Solicitado</H5>
            <H5>Processando</H5>
            <H5>Concluído</H5>
          </BoxProgress>
          <Box>
            <H1>Transferido de</H1>
            <Divider />
            <div>
              <H6 data-testid="from">{data.from}</H6>
              <H6 data-testid="from-price">{formatCurrency(data.amount)}</H6>
            </div>
          </Box>
          <Box>
            <H1>Para de</H1>
            <Divider />
            <div>
              <H6 data-testid="to">{data.to}</H6>
              <H6 data-testid="to-price">{formatCurrency(data.amount)}</H6>
            </div>
          </Box>
        </Section>
      </Content>
    </Container>
  );
};
