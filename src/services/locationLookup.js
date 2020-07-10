import { point, booleanPointInPolygon, polygon, inside } from "@turf/turf";

// const asyncFilter = async (arr, predicate) => {
//   const results = await Promise.all(arr.map(predicate));

//   return arr.filter((_v, index) => results[index]);
// };

const asyncFilter = async (arr, predicate) =>
  arr.reduce(
    async (memo, e) => ((await predicate(e)) ? [...(await memo), e] : memo),
    []
  );

export const locationLookup = (searchItems = [], searchCorpus) => {
  let a = searchItems.map((searchItem) => [
    parseFloat(searchItem.longitude),
    parseFloat(searchItem.latitude),
  ]);

  return searchItems.map((searchItem) => {
    const searchPoint = point([searchItem.longitude, searchItem.latitude]);
    let searchResult,
      name = "";

    if (
      searchCorpus &&
      searchCorpus.features &&
      searchCorpus.features.length > 0
    ) {
      // searchResult = searchCorpus.features.filter((feature) =>
      searchResult = asyncFilter(searchCorpus.features, (feature) => {
        booleanPointInPolygon(
          searchPoint,
          polygon(feature.geometry.coordinates)
        );
      });
      name = searchResult.length > 0 ? searchResult[0].properties.NAME : "";
    }

    return { ...searchItem, name };
  });
};

// export const locationLookup = (searchItems = [], searchCorpus) => {
//   let a = searchItems.map((searchItem) => [
//     parseFloat(searchItem.longitude),
//     parseFloat(searchItem.latitude),
//   ]);

//   let b = searchCorpus.features.forEach(async (feature) => {
//     const result = await asyncFilter(a, (point) => {
//       return booleanPointInPolygon(point, feature.geometry.coordinates);
//     });

//     console.log("in the features", result);
//     return result;
//     // return a.filter((point) => {
//     //   let poly = feature.geometry.coordinates;
//     //   return booleanPointInPolygon(point, poly);
//     // });
//   });

//   // let c = a.filter((point) => {
//   //   let poly = searchCorpus.features[0].geometry.coordinates;
//   //   return booleanPointInPolygon(point, poly);
//   // });

//   console.log("this is the result", b);
// };
