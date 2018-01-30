/**
 * @typedef {Object} Amenity
 * @property {string} icon
 * @property {string} title
 *
 * @typedef {Object} Prices
 * @property {string} value
 * @property {string} title
 *
 * @typedef {Object} ListingModel
 * @property {number} id
 * @property {string} title
 * @property {string} about
 * @property {string} address
 * @property {Array<Amenity>} amenities
 * @property {Array<Prices>} prices
 * @property {Array<String>} images
 */

export default function ListingModel() {
  /**
   * @type {ListingModel}
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
