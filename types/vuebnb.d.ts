export declare interface ListingSummaryModel {
  id: number;
  title: string;
  price_per_night: string;
  thumb: string;
}

export declare interface ListingCountryWithSummaryModel {
  country: string;
  listings: ListingSummaryModel[];
}

export declare type ListingCountriesWithSummaryModel = ListingCountryWithSummaryModel[];

export declare interface ListingModel {
  id: number;
  title: string;
  about: string;
  address: string;
  amenities: Amenity[];
  prices: Prices[];
  images: string[];
}

declare interface Amenity {
  icon: string;
  title: string;
}

declare interface Prices {
  value: string;
  title: title;
}

export as namespace vuebnb;