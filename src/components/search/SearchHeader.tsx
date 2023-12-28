import styled from 'styled-components';

const SearchHeader = () => {
  return <Header>책 검색하기</Header>;
};

const Header = styled.header`
  height: 1.12rem;
  background-color: red;
  // background-color: ${({ theme }) => theme.colors.bookWhite};
`;

export default SearchHeader;
