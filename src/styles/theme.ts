import { DefaultTheme } from 'styled-components';

const colors = {
  bookWhite: '#FFFFFF',
  bookGrey: '#EAEDEF',
  bookBlack: '#2F2F2F',
  bookSkyBlue: '#33C5EF',
  bookRed: '#F57272',
};

export type ColorTypes = typeof colors;

interface Font {
  family: string;
  weight: number;
  size: number;
  height: string;
}

const FONT = ({ family, weight, size, height }: Font): string => {
  return `
        font-family:${family};
        font-weight:${weight};
        font-size:${size}rem;
        line-height: ${height};
    `;
};

const fonts = {
  // Main 페이지 캐러셀 텍스트
  body01: FONT({
    family: 'SUIT Variable',
    weight: 500,
    size: 3.5,
    height: 'normal',
  }),
  // Search 페이지 책 정보 텍스트
  body02: FONT({
    family: 'SUIT Variable',
    weight: 400,
    size: 2.2,
    height: 'normal',
  }),
  // 버튼
  body03: FONT({
    family: 'SUIT Variable',
    weight: 600,
    size: 5,
    height: 'normal',
  }),
  // 캐러셀 내부 글자
  body04: FONT({
    family: 'SUIT Variable',
    weight: 400,
    size: 2,
    height: 'normal',
  }),
  // 디테일 key 글자
  body05: FONT({
    family: 'SUIT Variable',
    weight: 600,
    size: 2.5,
    height: 'normal',
  }),
  // header 텍스트
  heading01: FONT({
    family: 'SUIT Variable',
    weight: 600,
    size: 4,
    height: 'normal',
  }),
};

export type FontTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
