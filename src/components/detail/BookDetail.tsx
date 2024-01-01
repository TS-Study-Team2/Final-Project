import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { bookDetailState } from '../../states/bookDetail';

const BookDetail = () => {
  const selectedBook = useRecoilValue(bookDetailState);

  return (
    <DetailWrapper>
      <BookImg alt="책 이미지" src={selectedBook.thumbnail} />
      <BookDetailContainer>
        <DetailItem>
          <BookKey>제목</BookKey>
          <BookValue>{selectedBook.title}</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>작가</BookKey>
          <BookValue>{selectedBook.authors}</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>줄거리</BookKey>
          <BookValue>{selectedBook.content}</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>가격</BookKey>
          <BookValue>{selectedBook.price}</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>출판사</BookKey>
          <BookValue>{selectedBook.publisher}</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>도서번호</BookKey>
          <BookValue>{selectedBook.isbn}</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>판매여부</BookKey>
          <BookValue>{selectedBook.status}</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>번역</BookKey>
          <BookValue>{selectedBook.translator}</BookValue>
        </DetailItem>
      </BookDetailContainer>
    </DetailWrapper>
  );
};

export default BookDetail;

const DetailWrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 123rem;
  height: 64.9rem;
  padding: 6.2rem 8.7rem;
  margin-top: 11rem;

  background-color: ${({ theme }) => theme.colors.bookWhite};
`;

const BookImg = styled.img`
  width: 40.9rem;
  height: 52.4rem;
  margin-right: 5rem;
`;

const BookDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BookKey = styled.span`
  width: 11rem;
  margin-right: 0.5rem;
  
  white-space: nowrap;
  ${({ theme }) => theme.fonts.body05};
`;

const BookValue = styled.span`
  width: 56rem;
  ${({ theme }) => theme.fonts.body04};
`;
