/// <reference path="../../../types/vuebnb.d.ts"/>

export default function ListingModel() {
  /**
   * @type {vuebnb.ListingModel}
   */
  let initialData = {
    id: null,
    about: null,
    title: null,
    address: null,
    amenities: [],
    prices: [],
    images: []
  };
  return initialData;
};
