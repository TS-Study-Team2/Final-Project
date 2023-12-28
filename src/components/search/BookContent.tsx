import styled from 'styled-components';

interface BookContentProps {
  thumbnail: string;
  authors: string[];
  title: string;
  price: number;
  publisher: string;
}

const BookContent = ({ authors, thumbnail, title, price, publisher }: BookContentProps) => {
  return (
    <Div>
      <img src={thumbnail} alt={authors.join(',')}></img>
      <p>작가: {authors.join(',')}</p>
      <p>제목: {title}</p>
      <p>가격: {price}</p>
      <p>출판사: {publisher}</p>
    </Div>
  );
};

const Div = styled.div`
  display: flex;

  margin: 0 auto;
  margin-top: 1.8rem;
  max-width: 136.1rem;
  height: 28.5rem;

  background-color: ${({ theme }) => theme.colors.bookWhite};
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;
export default BookContent;
