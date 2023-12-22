import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Div>윤서진, 강민서 화이팅</Div>
    </ThemeProvider>
  );
}

export default App;

const Div = styled.div`
  ${({ theme }) => theme.fonts.body03};
`;
