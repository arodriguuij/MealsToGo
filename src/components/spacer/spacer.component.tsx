import React from 'react';
import styled, { useTheme } from 'styled-components/native';

import { Theme } from '../../infrastructure/theme';

type Size = 'small' | 'medium' | 'large';
type Position = 'top' | 'bottom' | 'left' | 'right';
interface SizeVariant {
  small: number;
  medium: number;
  large: number;
}
interface PositionVariant {
  top: string;
  left: string;
  bottom: string;
  right: string;
}
interface Spacer {
  position: Position;
  size: Size;
  children: React.ReactNode;
}

const sizeVariant: SizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant: PositionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  bottom: 'marginBottom',
  right: 'marginRight',
};

const getVariant = (position: Position, size: Size, theme: Theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}: ${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }: Spacer) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
