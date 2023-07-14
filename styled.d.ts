import 'styled-components';

declare module 'styled-component' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondaryHighlight: string;
    };
  }
}
