import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NextButton = () => {
  const navigate = useNavigate();

  const onClickNextBtn = () => {
    navigate('./search');
  };
  return <Button onClick={onClickNextBtn}>들어가기</Button>;
};

export default NextButton;

const Button = styled.button`
  width: 22rem;
  height: 6.8rem;
  background-color: ${({ theme }) => theme.colors.bookSkyBlue};
  color: ${({ theme }) => theme.colors.bookWhite};

  ${({ theme }) => theme.fonts.body02};
  align-self: center;
  border-radius: 1.4rem;
  margin-top: 8rem;
`;
