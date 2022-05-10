import { Colors, colors } from './colors';
import { space, lineHeights, LineHeights } from './spacing';
import { sizes } from './sizes';
import {
  fonts,
  fontWeights,
  fontSizes,
  FontSizes,
  Fonts,
  FontWeights,
} from './fonts';

export interface Theme {
  colors: Colors;
  space: string[];
  lineHeights: LineHeights;
  sizes: string[];
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
}

export const theme: Theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
