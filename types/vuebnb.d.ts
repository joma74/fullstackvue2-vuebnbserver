//// MODEL
///// SERVER USAGE MODELS

export declare interface ServerDataModel {
  listings: ServerSummaryListingModel[]
  listing:  ServerListingModel
  path: string | undefined;
  auth: boolean;
  saved: number[];
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

///// CLIENT USAGE MODELS

export declare interface ListingSummaryModel {
  id: number | undefined | null;
  title: string | undefined | null;
  price_per_night: string | undefined | null;
  thumb: string | undefined | null;
}

export declare interface ListingCountriesWithSummaryModel {
  [country: string]: ListingSummaryModel[];
}

export declare interface ListingModel {
  id: number | undefined | null;
  title: string | undefined | null;
  address: string | undefined | null;
  about: string | undefined | null;
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

//// STORE
/**
 * This does not work unless you comment out
 * ``` node_modules/vuex/types/vue.d.ts
 * declare module "vue/types/vue" {
 *    interface Vue {
 *      $store: Store<any>;
 *    }
 * }
 * ```
 */
// import { Store } from "vuex";

// export declare module "vue/types/vue" {
//   interface Vue{
//     $store: Store<vuebnb.VuebnbStoreState>;
//   }
// }

