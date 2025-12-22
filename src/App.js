import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import theme from './theme';
import Profile from './Profile';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">
      <Profile />
    </div>
  </ThemeProvider>
);

export default App;
