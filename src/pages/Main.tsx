import styled from 'styled-components';

const Main = () => {
  return <Div>윤서진, 강민서 화이팅</Div>;
};

export default Main;

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.bookSkyBlue};
  ${({ theme }) => theme.fonts.body03};
`;
