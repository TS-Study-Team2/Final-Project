import styled from 'styled-components';

import Header from '../components/detail/Header';
import BookDetail from '../components/detail/BookDetail';

const Detail = () => {
  return (
    <>
      <Header />
      <BackgroundDiv>
        <BookDetail />
      </BackgroundDiv>
    </>
  );
};

export default Detail;

const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.bookGrey};
`;
