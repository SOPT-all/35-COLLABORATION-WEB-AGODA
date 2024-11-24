import { IcStay, IcPackages, IcFlights, IcActivity } from '@assets/svg';

export const CATEGORY_DATA = [
  { id: 1, label: "숙소", icon: IcStay, isActive: true },
  { id: 2, label: "항공 + 숙소", icon: IcPackages, isActive: false },
  { id: 3, label: "항공", icon: IcFlights, isActive: false }, 
  { id: 4, label: "즐길 거리", icon: IcActivity, isActive: false } 
];
