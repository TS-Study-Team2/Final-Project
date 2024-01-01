import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';
import { RecoilRoot } from 'recoil';
import Router from '../src/Router.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
