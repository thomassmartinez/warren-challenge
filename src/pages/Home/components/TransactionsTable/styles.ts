import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  height: 500px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1375px) and (min-width: 700px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 700px) and (min-width: 350px) {
    padding: 0 35px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
`;

export const Search = styled.input`
  width: 300px;
  height: 30px;
  padding: 0 10px;
  margin-right: 20px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  @media screen and (max-width: 700px) and (min-width: 350px) {
    width: 140px;
    padding: 0 5px;
  }
`;

export const Select = styled.select`
  width: 100px;
  height: 30px;
  padding: 0 10px;
  margin-right: 20px;
  border: 1px solid var(--white);
  border-radius: 5px;
`;

export const Table = styled.table`
  width: 100%;
  padding: 0px 0;
  border-spacing: 0 10px;

  th {
    color: var(--white);
    font-weight: 600;
    padding: 15px 30px;
    text-align: left;
    line-height: 15px;
  }

  td {
    padding: 15px 30px;
    border: 0;
    /* box-shadow: ; */
    background: var(--white);
  }

  @media screen and (max-width: 700px) and (min-width: 350px) {
    font-size: 15px;
  }
`;
