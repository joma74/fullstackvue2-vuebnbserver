/// <reference path="../../../types/vuebnb.d.ts"/>

/**
 * @return {vuebnb.ListingSummaryModel}
 */
export default function ListingSummaryModel() {
  /**
   * @type {vuebnb.ListingSummaryModel}
   */
  let initialData = {
    id: null,
    title: null,
    price_per_night: null,
    thumb: null
  };
  return initialData;
}
