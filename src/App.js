import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import theme from './theme';
import MoviePage from './MoviePage';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">
      <MoviePage />
    </div>
  </ThemeProvider>
);

export default App;
