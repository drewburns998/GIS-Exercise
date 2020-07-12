import { featureCollection, collect } from "@turf/turf";

const collectandFilterByKey = (searchCorpus, searchItems, key) => {
  return collect(
    featureCollection(searchCorpus),
    featureCollection(searchItems),
    `${key}`,
    `${key}_values_matched`
  ).features.filter((x) => x.properties.id_values_matched.length > 0);
};

export const locationLookup = (searchItems = [], searchCorpus = []) => {
  if (searchItems.length == 0 || searchCorpus.length == 0) return [];

  const collectedIdsOfFoundResults = collectandFilterByKey(
    searchCorpus,
    searchItems,
    "id"
  );

  const collectedNames = collect(
    featureCollection(collectedIdsOfFoundResults),
    featureCollection(searchItems),
    "name",
    "name_values_matched"
  );

  const collectedLats = collect(
    featureCollection(collectedNames.features),
    featureCollection(searchItems),
    "latitude",
    "latitude_values_matched"
  );

  const collectedLongs = collect(
    featureCollection(collectedLats.features),
    featureCollection(searchItems),
    "longitude",
    "longitude_values_matched"
  );

  return collectedLongs.features;
};
