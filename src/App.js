import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import theme from './theme';
import MoviePage from './MoviePage';
import MovieList from './MovieList';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">
      <MovieList />
    </div>
  </ThemeProvider>
);

export default App;
