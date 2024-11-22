import { RouteType } from "@app-types/routeType";
import CityPage from "@pages/CityPage/CityPage";
import HomePage from "@pages/HomePage/HomePage";
import HotelDetailPage from "@pages/HotelDetailPage/HotelDetailPage";
import HotelListPage from "@pages/HotelListPage/HotelListPage";
import routePath from "@routes/routePath";

const pageRoutes: RouteType[] = [
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
];

export default pageRoutes;
