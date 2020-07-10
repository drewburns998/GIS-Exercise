import {
  point,
  booleanPointInPolygon,
  polygon,
  inside,
  pointsWithinPolygon,
  featureCollection,
  featureEach,
  getCoords,
  flattenReduce,
  featureReduce,
  collect,
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
  let list1 = searchItems.map((searchItem) =>
    point([parseFloat(searchItem.longitude), parseFloat(searchItem.latitude)], {
      id: searchItem.id,
    })
  );
  //   let listPoints = points(list1);
  let convertToFeatureCollection = featureCollection(searchCorpus.features);

  let collected = collect(
    convertToFeatureCollection,
    featureCollection(list1),
    "id",
    "id_value"
  );

  //   let d = collected.filter(x => x.properties.values.length > 0);
  console.log("collected with feature", collected);
  return collected;
};
