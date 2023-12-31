import styled from 'styled-components';

interface bookItemProps {
  bookTitle: string;
  bookImage: string;
}

const BookItems = (props: bookItemProps) => {
  const { bookTitle, bookImage } = props;
  return (
    <BookItemContainer>
      <BookImg alt="책 이미지" src={bookImage} />
      <BookName>{bookTitle}</BookName>
    </BookItemContainer>
  );
};

export default BookItems;

const BookItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.colors.bookWhite};
  border-radius: 0.5rem;
`;

const BookImg = styled.img`
  width: 20.7rem;
  height: 31rem;
  margin-bottom: 1.5rem;
`;

const BookName = styled.div`
  ${({ theme }) => theme.fonts.body04};
`;
