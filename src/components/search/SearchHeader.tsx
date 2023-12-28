import styled from 'styled-components';

interface SearchHeaderProps {
  text: string;
}

const SearchHeader = ({ text }: SearchHeaderProps) => {
  return <Header>{text}</Header>;
};

const Header = styled.header`
  margin-bottom: 9.7rem;
  padding: 3.1rem 0 0 28rem;
  width: 100vw;
  height: 11.2rem;

  color: ${({ theme }) => theme.colors.bookBlack};
  background-color: ${({ theme }) => theme.colors.bookWhite};

  ${({ theme }) => theme.fonts.heading01};
`;

export default SearchHeader;
