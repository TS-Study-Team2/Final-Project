import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

import SearchHeader from '../components/search/SearchHeader';
import SearchBox from '../components/search/SearchBox';
import BookContent from '../components/search/BookContent';
import { SearchApiData } from '../types/Search';

const Search = () => {
  const [books, setBooks] = useState<Array<SearchApiData>>([]);

  const handleSearch = async (query: string) => {
    try {
      const encodedQuery = encodeURIComponent(query);
      const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${encodedQuery}`;
      const headers = {
        Authorization: 'KakaoAK 05f31e137c85cb698b3a0c5510e433ed',
      };

      const response = await axios.get(url, { headers });
      const data = response.data;
      console.log(data);

      setBooks(data.documents);
    } catch (error) {
      console.error('오류', error);
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchHeader text="책 검색하기" />
        <SearchBox onSearch={handleSearch} />
        {books && books.length > 0 ? (
          books.map((item, idx) => (
            <BookContent
              key={idx}
              thumbnail={item.thumbnail}
              authors={item.authors}
              title={item.title}
              price={item.price}
              publisher={item.publisher}
              translator={item.translators}
              datetime={item.datetime}
              saleprice={item.sale_price}
              isbn={item.isbn}
              content={item.contents}
              status={item.status}
            />
          ))
        ) : (
          <EmptyViewText>검색 기록이 없어요!</EmptyViewText>
        )}
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  background-color: #f3f3f3;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
`;

const EmptyViewText = styled.div`
  width: 100vw;

  color: lightgrey;

  text-align: center;
  ${({ theme }) => theme.fonts.body01};
`;

export default Search;
