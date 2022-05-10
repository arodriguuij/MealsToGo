import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { IProps } from '../../../../App';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info-card';
import { IRestaurant } from '../components/restaurant-info-card.types';

const SearchContainer = styled.View`
  padding: ${(props: IProps) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
});

const restaurantsDefault: IRestaurant[] = [
  {
    name: 'Some Restaurant 1',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    openingHours: '',
    isOpenNow: true,
    rating: 5,
    isClosedTemporarily: true,
  },
  {
    name: 'Some Restaurant 2',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    openingHours: '',
    isOpenNow: true,
    rating: 5,
    isClosedTemporarily: true,
  },
  {
    name: 'Some Restaurant 3',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    openingHours: '',
    isOpenNow: true,
    rating: 5,
    isClosedTemporarily: true,
  },
];

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={restaurantsDefault}
        renderItem={({ item }) => (
          <Spacer position='bottom' size='medium'>
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item: IRestaurant) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
