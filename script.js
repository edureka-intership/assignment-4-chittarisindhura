var ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 5 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

console.log("customer's rating data:");
console.log(ratingData);

let averageData;
const formatData = (data) => {
  averageData = Object.values(
    data.reduce((res, obj) => {
      if (res[obj.restaurant]) {
        res[obj.restaurant].rating += obj.rating;
        res[obj.restaurant].count += 1;
      } else {
        res[obj.restaurant] = {
          ...obj,
          count: 1,
        };
      }
      return res;
    }, {})
  ).map((obj) => ({
    restaurant: obj.restaurant,
    averageRating: obj.rating / obj.count,
  }));
  return averageData;
};
console.log("Average Rating:");
console.log(formatData(ratingData));
let avgValue = new Array();

let avgValues;
averageData.forEach((i) => {
  let avgRating = i.averageRating;
  if (avgRating >= 4) {
    avgValues = i;
    avgValue.push(avgValues);
  }
});
console.log("Restaurants with Average Rating greater than or equal to 4:");
console.log(avgValue);
