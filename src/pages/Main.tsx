import styled from 'styled-components';

import Header from '../components/main/Header';
import BookCarousel from '../components/main/bookcarousel';
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

  width: 100%;
  height: 100vh;
  padding-top: 19.9rem;

  background-color: ${({ theme }) => theme.colors.bookGrey};
`;
