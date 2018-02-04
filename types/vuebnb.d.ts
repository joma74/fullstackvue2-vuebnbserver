export declare interface ServerDataModel {
  listings: ServerSummaryListingModel[]
  listing:  ServerListingModel
  path: string;
}

export declare interface ServerSummaryListingModel {
  id: number;
  address: string;
  title: string;
  price_per_night: string;
  thumb: string; 
}

export declare interface ServerListingModel {
  id: number;
  title: string;
  address: string;
  about: string;
  amenity_wifi: boolean;
  amenity_pets_allowed: boolean;
  amenity_tv: boolean;
  amenity_kitchen: boolean;
  amenity_breakfast: boolean;
  amenity_laptop: boolean;
  price_per_night: string;
  price_extra_people: string;
  price_weekly_discount: string;
  price_monthly_discount: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
}

export declare interface ListingSummaryModel {
  id: number;
  title: string;
  price_per_night: string;
  thumb: string;
}

export declare interface ListingCountryWithSummaryModel {
  country: string;
  listings: ListingsSummaryModel[];
}

export declare interface ListingModel {
  id: number;
  title: string;
  address: string;
  about: string;
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