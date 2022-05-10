import antwerp from './antwerp.json';
import chicago from './chicago.json';
import toronto from './toronto.json';
import san_francisco from './san_francisco.json';

interface Photo {
  height: number;
  html_attributions: any[];
  photo_reference: string;
  width: number;
}
interface LatLng {
  lat: number;
  lng: number;
}
interface Geometry {
  location: LatLng;
  viewport: {
    northeast: LatLng;
    southwest: LatLng;
  };
}
interface Result {
  business_status: string;
  geometry: Geometry;
  icon: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: Photo[];
  place_id: string;
  rating: number;
  reference: string;
  user_ratings_total: number;
  vicinity: string;
}
interface Restaurant {
  html_attributions: any[];
  next_page_token: string;
  results: Result[];
  status: string;
}

interface Mocks {
  [key: string]: Restaurant;
}
export const mocks /* : Mocks */ = {
  '51.219448,4.402464': antwerp,
  '43.653225,-79.383186': toronto,
  '41.878113,-87.629799': chicago,
  '37.7749295,-122.4194155': san_francisco,
};

export const mockImages: string[] = [
  'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg',
];
