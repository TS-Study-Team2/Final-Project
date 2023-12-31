import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Arrow } from '../../assets/image/index';

const Header = () => {
  const navigate = useNavigate();

  const onClickBackBtn = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <BackBtn src={Arrow} alt="뒤로가기" onClick={onClickBackBtn} />
      <Content>책 상세정보</Content>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 26.3rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.bookWhite};

  ${({ theme }) => theme.fonts.body01};
`;

const BackBtn = styled.img`
  width: 3.6rem;
  height: 3.9rem;

  margin-right: calc(100% - 56.2rem);

  cursor: pointer;
`;

const Content = styled.div`
  ${({ theme }) => theme.fonts.heading01};
`;
