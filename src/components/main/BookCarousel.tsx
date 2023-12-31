import styled from 'styled-components';

import { MAIN_BOOK_DUMMY } from '../../assets/data/MainData';
import { mainBookDummyType } from '../../assets/data/MainData';
import Carousel from '../main/Carousel';
import BookItems from './BookItems';

const BookItem = () => {
  return (
    <BookCarouselContainer>
      <Carousel>
        {MAIN_BOOK_DUMMY.map((item: mainBookDummyType, idx: number) => (
          <BookItems key={String(idx) + item.title} bookImage={item.image} bookTitle={item.title} />
        ))}
      </Carousel>
    </BookCarouselContainer>
  );
};

export default BookItem;

const BookCarouselContainer = styled.div``;
