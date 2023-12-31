import styled from 'styled-components';
import { useState } from 'react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [data, setdata] = useState('');
  const handleSearchClick = () => {
    onSearch(data);
  };

  return (
    <SerachBoxWrapper>
      <TextField placeholder="책이름을 입력해주세요" value={data} onChange={(e) => setdata(e.target.value)} />
      <SearchBtn type="button" onClick={handleSearchClick}>
        검색
      </SearchBtn>
    </SerachBoxWrapper>
  );
};

const SerachBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  margin-bottom: 5.6rem;
  max-width: 136.1rem;
`;

const TextField = styled.input`
  width: 109.9rem;
  height: 10.9rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.bookWhite};
  border-color: transparent;
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  ${({ theme }) => theme.fonts.body02};
`;

const SearchBtn = styled.button`
  padding: 2.3rem 6.9rem;

  background-color: ${({ theme }) => theme.colors.bookSkyBlue};
  color: ${({ theme }) => theme.colors.bookWhite};
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  ${({ theme }) => theme.fonts.body03};

  cursor: pointer;
`;

export default SearchBox;
