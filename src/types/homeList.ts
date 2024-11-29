export interface BestCountry {
  countryId: number;
  countryName: string;
  hotelCount: number;
  countryImage: string;
}
export interface PopularCity {
  cityId: number;
  cityName: string;
  hotelCount: number;
  cityImage: string;
}
export interface BestCountryResponse {
  bestCountries: BestCountry[];
}
export interface PopularCityResponse {
  popularCities: PopularCity[];
}