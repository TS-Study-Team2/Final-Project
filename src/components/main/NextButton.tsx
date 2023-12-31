import styled from 'styled-components';

const NextButton = () => {
  return <Button>들어가기</Button>;
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
