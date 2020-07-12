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

const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

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
    "id_values_matched"
  );

  //   let d = collected.filter(x => x.properties.values.length > 0);
  let b = collected.features.map((x) => {
    return {
      ...x.properties,
      ...x.id_values_matched,
    };
  });
  console.log("collected with feature", b);
  return collected;
};
