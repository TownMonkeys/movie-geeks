import { createGlobalStyle } from 'styled-components';
import theme from './shared/theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${theme.text.default};
    margin: 0;
    padding: 0;
  }
`;