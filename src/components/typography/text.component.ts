import styled from 'styled-components/native';

import { Theme } from '../../infrastructure/theme';

const defaultTextStyles = (theme: Theme) => `
   font-family: ${theme.fonts.body};
   font-weight: ${theme.fontWeights.regular};
   color: ${theme.colors.text.primary};
   flex-wrap: wrap;
   margin-top: 0;
   margin-bottom: 0;
 `;

const body = (theme: Theme) => `
     font-size: ${theme.fontSizes.body};
 `;

const hint = (theme: Theme) => `
     font-size: ${theme.fontSizes.body};
 `;

const error = (theme: Theme) => `
     color: ${theme.colors.text.error};
 `;

const caption = (theme: Theme) => `
     font-size: ${theme.fontSizes.caption};
     font-weight: ${theme.fontWeights.bold};
 `;

const label = (theme: Theme) => `
     font-family: ${theme.fonts.heading};
     font-size: ${theme.fontSizes.body};
     font-weight: ${theme.fontWeights.medium};
 `;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

interface VariantAndTheme {
  variant: 'body' | 'label' | 'caption' | 'error' | 'hint';
  theme: Theme;
}

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }: VariantAndTheme) => variants[variant](theme)}
`;
