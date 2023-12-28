import styled from 'styled-components';
import SearchHeader from '../components/search/SearchHeader';
import SearchBox from '../components/search/SearchBox';

const Search = () => {
  return (
    <>
      <SearchContainer>
        <SearchHeader text="책 검색하기" />
        <SearchBox />
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;
`;

export default Search;
