import ListingModel from "./ListingModel";
import ListingCountryWithSummaryModel from "./ListingCountryWithSummaryModel";

let amenities = new Map();
amenities.set("amenity_wifi", { title: "Wireless Internet", icon: "fa-wifi" });
amenities.set("amenity_pets_allowed", {
  title: "Pets Allowed",
  icon: "fa-paw"
});
amenities.set("amenity_tv", { title: "TV", icon: "fa-television" });
amenities.set("amenity_kitchen", { title: "Kitchen", icon: "fa-cutlery" });
amenities.set("amenity_breakfast", { title: "Breakfast", icon: "fa-coffee" });
amenities.set("amenity_laptop", {
  title: "Laptop friendly workspace",
  icon: "fa-laptop"
});

let prices = new Map();
prices.set("price_per_night", "Per night");
prices.set("price_extra_people", "Extra people");
prices.set("price_weekly_discount", "Weekly discount");
prices.set("price_monthly_discount", "Monthly discount");

let populateAmenitiesAndPrices = function(state) {
  if (!state) return ListingModel();
  var listingModel = ListingModel();
  selCopy(state, listingModel, "id", "title", "address", "about");
  for (let key in state) {
    let arr = key.split("_");
    if (arr[0] === "amenity") {
      listingModel.amenities.push(key);
    }
    if (arr[0] === "price") {
      listingModel.prices.push({ title: key, value: state[key] });
    }
    if (arr[0] === "image") {
      listingModel.images.push(state[key]);
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

let groupByCountry = function(listings) {
  if (!listings) return ListingCountryWithSummaryModel();
  return listings.reduce(function(rv, x) {
    let key = ["Taiwan", "Poland", "Cuba"].find(
      country => x.address.indexOf(country) > -1
    );
    if (!rv[key]) {
      rv[key] = [];
    }
    rv[key].push(x);
    return rv;
  }, {});
};

export { groupByCountry };
