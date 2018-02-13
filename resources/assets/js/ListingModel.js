/// <reference path="../../../types/vuebnb.d.ts"/>
//@ts-check

export default function ListingModel() {
  /**
   * @type {vuebnb.ListingModel}
   */
  let initialData = {
    id: null,
    title: null,
    address: null,
    about: null,
    amenities: [],
    prices: [],
    images: []
  };
  return initialData;
}
