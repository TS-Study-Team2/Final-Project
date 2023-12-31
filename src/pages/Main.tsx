import styled from 'styled-components';

import Header from '../components/main/Header';
import BookCarousel from '../components/main/BookCarousel';
import NextButton from '../components/main/NextButton';

const Main = () => {
  return (
    <>
      <Header />
      <BackgroundDiv>
        <BookCarousel />
        <NextButton />
      </BackgroundDiv>
    </>
  );
};

export default Main;

const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 19.9rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bookGrey};
`;
