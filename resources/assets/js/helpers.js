/// <reference path="../../../types/vuebnb.d.ts"/>

import ListingModel from "./ListingModel";
import ListingCountriesWithSummaryModel from "./ListingCountriesWithSummaryModel";

/**
 * @type {Map.<string, vuebnb.Amenity>}
 */
let amenities = new Map();
amenities.set("amenity_wifi", {
  title: "Wireless Internet",
  icon: "fa-wifi"
});
amenities.set("amenity_pets_allowed", {
  title: "Pets Allowed",
  icon: "fa-paw"
});
amenities.set("amenity_tv", {
  title: "TV",
  icon: "fa-television"
});
amenities.set("amenity_kitchen", {
  title: "Kitchen",
  icon: "fa-cutlery"
});
amenities.set("amenity_breakfast", {
  title: "Breakfast",
  icon: "fa-coffee"
});
amenities.set("amenity_laptop", {
  title: "Laptop friendly workspace",
  icon: "fa-laptop"
});

/**
 * @type {Map.<string, string>}
 */
let prices = new Map();
prices.set("price_per_night", "Per night");
prices.set("price_extra_people", "Extra people");
prices.set("price_weekly_discount", "Weekly discount");
prices.set("price_monthly_discount", "Monthly discount");

/**
 *
 * @param {vuebnb.ServerListingModel|undefined} serverListing
 * @returns {vuebnb.ListingModel}
 */
let populateAmenitiesAndPrices = function(serverListing) {
  if (!serverListing) {
    console.warn("Parameter listings is null or undefined;");
    return ListingModel();
  }
  var listingModel = ListingModel();
  selCopy(serverListing, listingModel, "id", "title", "address", "about");
  for (let key in serverListing) {
    let arr = key.split("_");
    if (arr[0] === "amenity") {
      listingModel.amenities.push(key);
    }
    if (arr[0] === "price") {
      listingModel.prices.push({ title: key, value: serverListing[key] });
    }
    if (arr[0] === "image") {
      listingModel.images.push(serverListing[key]);
    }
  }

  listingModel.amenities = listingModel.amenities.map(item =>
    amenities.get(item)
  );

  listingModel.prices = listingModel.prices.map(item => {
    item.title = prices.get(item.title);
    return item;
  });

  return listingModel;
};

/**
 * @param {Object} from
 * @param {Object} to
 * @param {String[]} selPNames
 */
function selCopy(from, to, ...selPNames) {
  for (var selPName of selPNames) {
    to[selPName] = from[selPName] || to[selPName];
  }
}

export { populateAmenitiesAndPrices };

/**
 * @param {vuebnb.ServerSummaryListingModel[]} serverListings
 */
let groupByCountry = function(serverListings) {
  if (!serverListings) {
    console.warn("Parameter listings is null or undefined;");
    return ListingCountriesWithSummaryModel();
  }
  return serverListings.reduce(function(accumulator, listingModel) {
    let countries = ["Taiwan", "Poland", "Cuba"];
    let country = countries.find(
      country => listingModel.address.indexOf(country) > -1
    );
    if (!country) {
      console.warn(
        `[${arguments.callee.toString()}] adress >>${
          listingModel.address
        }<< of current listing id ${
          listingModel.id
        } did not match any country of ${countries}.`
      );
    } else {
      if (!accumulator[country]) {
        accumulator[country] = [];
      }
      accumulator[country].push(listingModel);
    }
    return accumulator;
  }, ListingCountriesWithSummaryModel());
};

export { groupByCountry };
