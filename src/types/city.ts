export interface CitiesType {
  cityId: number;
  cityName: string;
  countryName: string;
}

export interface CitiesResponse {
  cities: CitiesType[];
}
