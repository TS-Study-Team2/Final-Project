import React from 'react';
import styled from 'styled-components';

import { HarryPotter1 } from '../../assets/image/index';

const BookDetail = () => {
  return (
    <DetailWrapper>
      <BookImg alt="책 이미지" src={HarryPotter1} />
      <BookDetailContainer>
        <DetailItem>
          <BookKey>제목</BookKey>
          <BookValue>해리포터</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>작가</BookKey>
          <BookValue>조앤 K.롤링</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>줄거리</BookKey>
          <BookValue>
            선과 악의 대립 속에서 평범한 어린 소년이 한 사람의 영웅으로 성장해나가는 보편적인 테마를 바탕으로 빈틈없는
            소설적 구성과 생생하게 살아 있는 캐릭터, 정교하게 만들어낸 환상의 세계를 접목시킨 21세기의 고전 『해리
            포터와 마법사의 돌』 20주년 개정판. 해리 포터를 처음 만나는 어린 세대가 20년이 지나 성인의 눈높이에서 읽어도
            어색함 없이 책을 통해 해리 포터 세계를 경험하며 기쁨을 만끽할 수 있도록 고전의 깊이로 담아냈다. 어둠의 마왕
            볼드모트
          </BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>가격</BookKey>
          <BookValue>9000</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>출판사</BookKey>
          <BookValue>문학수첩</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>도서번호</BookKey>
          <BookValue>"8983927623 9788983927620"</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>판매여부</BookKey>
          <BookValue>정상판매</BookValue>
        </DetailItem>
        <DetailItem>
          <BookKey>번역</BookKey>
          <BookValue>강동혁</BookValue>
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
