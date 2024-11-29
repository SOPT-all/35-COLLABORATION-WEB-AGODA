import { RouteObject } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '@pages/HomePage/HomePage';
import CityPage from '@pages/CityPage/CityPage';
import HotelDetailPage from '@pages/HotelDetailPage/HotelDetailPage';
import HotelListPage from '@pages/HotelListPage/HotelListPage';
import routePath from '@routes/routePath';
import NotFound from '@components/Error/NotFound';

const pageRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: routePath.HOME,
        element: <HomePage />,
      },
      {
        path: routePath.CITY,
        element: <CityPage />,
      },
      {
        path: routePath.HOTEL_LIST,
        element: <HotelListPage />,
      },
      {
        path: routePath.HOTEL_DETAIL,
        element: <HotelDetailPage />,
      },
    ],
  },
];

export default pageRoutes;
