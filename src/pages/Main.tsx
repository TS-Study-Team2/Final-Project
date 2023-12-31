import styled from 'styled-components';
import Header from '../components/main/Header';
import BookCarousel from '../components/main/BookCarousel';

const Main = () => {
  return (
    <>
      <Header />
      <BackgroundDiv>
        <BookCarousel />
      </BackgroundDiv>
    </>
  );
};

export default Main;

const BackgroundDiv = styled.div`
  padding-top: 19.9rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bookGrey};
`;
