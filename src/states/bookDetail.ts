import { atom } from 'recoil';

import { BookContentProps } from '../components/search/BookContent';

export const bookDetailState = atom<BookContentProps>({
  key: 'bookDetailState',
  default: {
    title: '',
    thumbnail: '',
    authors: [''],
    price: 0,
    publisher: '',
    translator: [''],
    datetime: '',
    saleprice: 0,
    isbn: '',
    content: '',
    status: '',
  },
});
