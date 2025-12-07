import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Error from './Error';
import Loading from './Loading'
import { NoResults } from './NoResults';

export const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <NoResults />
    </div>
  </ThemeProvider>
);

export default App;
