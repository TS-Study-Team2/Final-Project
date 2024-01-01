import {
  HarryPotter1,
  HarryPotter2,
  HarryPotter3,
  HarryPotter4,
  HarryPotter5,
  HarryPotter6,
  HarryPotter7,
} from '../../assets/image';

export interface mainBookDummyType {
  title: string;
  image: string;
}
export const MAIN_BOOK_DUMMY: mainBookDummyType[] = [
  { title: '해리포터와 마법사의 돌', image: HarryPotter1 },
  { title: '해리포터와 비밀의 방', image: HarryPotter2 },
  { title: '해리포터와 아즈카반의 죄수', image: HarryPotter3 },
  { title: '해리포터와 불의 잔', image: HarryPotter4 },
  { title: '해리포터와 불사조 기사단', image: HarryPotter5 },
  { title: '해리포터와 혼혈 왕자', image: HarryPotter6 },
  { title: '해리포터와 죽음의 성물', image: HarryPotter7 },
];
