import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

import { IProps } from '../../../../App';

export const Address = styled.Text`
  font-family: ${(props: IProps) => props.theme.fonts.body};
  font-size: ${(props: IProps) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props: IProps) => props.theme.space[3]};
`;

export const Icon = styled.Image`
  width: ${(props: IProps) => props.theme.space[3]};
  height: ${(props: IProps) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: IProps) => props.theme.space[2]};
  padding-bottom: ${(props: IProps) => props.theme.space[2]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: IProps) => props.theme.space[3]};
  background-color: ${(props: IProps) => props.theme.colors.bg.primary};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${(props: IProps) => props.theme.fonts.heading};
  font-size: ${(props: IProps) => props.theme.fontSizes.body};
  color: ${(props: IProps) => props.theme.colors.ui.primary};
`;
