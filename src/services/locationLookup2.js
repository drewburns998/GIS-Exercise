import {
  points,
  booleanPointInPolygon,
  polygon,
  inside,
  pointsWithinPolygon,
  featureCollection,
  featureEach,
  getCoords,
} from "@turf/turf";

const asyncFilter = async (arr, predicate) =>
  arr.reduce(
    async (memo, e) => ((await predicate(e)) ? [...(await memo), e] : memo),
    []
  );

const asyncPointsInPolygon = async (list, poly) => {
  return pointsWithinPolygon(list, poly);
};

export const locationLookup2 = (searchItems = [], searchCorpus) => {
  let list1 = searchItems.map((searchItem) => [
    parseFloat(searchItem.longitude),
    parseFloat(searchItem.latitude),
  ]);
  let listPoints = points(list1);

  let convertToFeatureCollection = featureCollection(searchCorpus.features);

  featureEach(convertToFeatureCollection, (feat, index) => {
    let p = pointsWithinPolygon(listPoints, polygon(getCoords(feat)));

    if (p.features.length > 0) {
      console.log("iter number ", index);
      console.log("points in poly", p);
    }
  });
};
