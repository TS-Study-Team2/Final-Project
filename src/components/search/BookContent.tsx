import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { bookDetailState } from '../../states/bookDetail';

export interface BookContentProps {
  thumbnail: string;
  authors: string[];
  title: string;
  price: number;
  publisher: string;
  translator: string[];
  datetime: string;
  saleprice: number;
  isbn: string;
  content: string;
  status: string;
}

const BookContent = ({
  authors,
  thumbnail,
  title,
  price,
  publisher,
  translator,
  datetime,
  saleprice,
  isbn,
  content,
  status,
}: BookContentProps) => {
  const setSelectedBook = useSetRecoilState(bookDetailState);
  const navigate = useNavigate();

  const onClickDetailBtn = () => {
    navigate('./detail');
    setSelectedBook({
      authors,
      thumbnail,
      title,
      price,
      publisher,
      translator,
      datetime,
      saleprice,
      isbn,
      content,
      status,
    });
  };

  return (
    <BookContentWrapper>
      <ImgWrapper>
        <img src={thumbnail} alt={authors.join(',')} />
      </ImgWrapper>
      <Info>
        <Title>{title}</Title>
        <Detail>
          <div>
            <span>작가</span> {authors.join(',')}
          </div>
          <div>|</div>
          <div>
            <span>역자</span> {translator}
          </div>
        </Detail>
        <Detail>
          <div>
            <span>출판사</span> {publisher}
          </div>
          <div>|</div>
          <div>{isbn}</div>
        </Detail>
        <Detail>
          <OriginPrice>{price}</OriginPrice>
          <SalePrice>{saleprice}</SalePrice>
        </Detail>
        <Detail>
          <p>{datetime}</p>
        </Detail>
      </Info>
      <MoreDetailBtn onClick={onClickDetailBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="30" viewBox="0 0 320 512">
          <path
            fill="#EAEDEF"
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </MoreDetailBtn>
    </BookContentWrapper>
  );
};

const BookContentWrapper = styled.div`
  display: flex;
  position: relative;

  margin: 1.8rem auto;
  max-width: 136.1rem;
  height: 28.5rem;

  background-color: ${({ theme }) => theme.colors.bookWhite};
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 15.1rem;
  margin-left: 3.2rem;

  & > img {
    width: 100%;
  }
`;

const Info = styled.div`
  margin-left: 5rem;
`;

const Title = styled.p`
  margin: 4rem 0rem 2rem 0;
  color: ${({ theme }) => theme.colors.bookBlack};

  font-size: 4rem;
  font-weight: 600;
`;

const Detail = styled.p`
  display: flex;

  margin: 1rem 0rem;

  color: ${({ theme }) => theme.colors.bookBlack};
  ${({ theme }) => theme.fonts.body02};

  & > div {
    margin-right: 5rem;
  }

  & > div > span {
    margin-right: 2rem;

    font-weight: 700;
  }
`;

const OriginPrice = styled.p`
  margin-right: 2rem;
  color: lightgrey;

  font-size: 3rem;
  font-weight: 400;
  text-decoration: line-through;
`;
const SalePrice = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.bookRed};
`;

const MoreDetailBtn = styled.button`
  position: absolute;

  right: 6rem;
  top: 11.25rem;
`;
export default BookContent;
