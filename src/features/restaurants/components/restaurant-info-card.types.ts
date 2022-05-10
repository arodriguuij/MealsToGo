export interface IRestaurantInfo {
  restaurant: IRestaurant;
}
export interface IRestaurant {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  openingHours: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}
