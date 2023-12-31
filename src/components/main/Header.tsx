import styled from 'styled-components';

const Header = () => {
  return <HeaderContainer>서진 민서 도서관</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 3.1rem 0 3.1rem 28rem;

  background-color: ${({ theme }) => theme.colors.bookWhite};

  ${({ theme }) => theme.fonts.body01};
`;
