import 'styled-components';

import { ColorTypes, FontTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTypes;
    fonts: FontTypes;
  }
}
