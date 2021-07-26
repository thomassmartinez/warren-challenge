import styled from 'styled-components';

interface ContainerProps {
  open: boolean;
}
interface ProgressProps {
  statusProgress: string;
}

export const Container = styled.div<ContainerProps>`
  position: ${(props) => (props.open ? 'fixed' : 'absolute')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  transition: opacity 400ms ease-in;
`;

export const Content = styled.div`
  width: 600px;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  border-radius: 10px;
  background: #fff;
`;
export const Section = styled.div`
  width: 100%;
  padding: 30px 0;
`;

export const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconClose = styled.span`
  position: absolute;
  font-size: 25px;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const Progress = styled.div<ProgressProps>`
  width: ${(props) => props.statusProgress};
  height: 20px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  background: var(--primary);
`;

export const Box = styled.div`
  width: 100%;
  padding: 15px 0;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
`;

export const BoxProgress = styled.div`
  width: 100%;
  padding: 15px 0 5px;
  display: flex;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600px;
`;

export const H5 = styled(H1)`
  font-size: 15px;
`;

export const H6 = styled(H1)`
  font-size: 18px;
`;

export const Divider = styled.hr`
  width: 100%;
  padding: 1px;
  background: black;
`;
