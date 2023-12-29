import styled from 'styled-components';

interface BookContentProps {
  thumbnail: string;
  authors: string[];
  title: string;
  price: number;
  publisher: string;
  translator: string[];
  datetime: string;
  saleprice: number;
  isbn: string;
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
}: BookContentProps) => {
  return (
    <Div>
      <ImgWrapper>
        <img src={thumbnail} alt={authors.join(',')}></img>
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

  font-size: 3.5rem;
  font-weight: 400;
  text-decoration: line-through;
`;
const SalePrice = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.bookRed};
`;
export default BookContent;
