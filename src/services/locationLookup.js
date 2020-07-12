import { tag, featureCollection } from "@turf/turf";

export const locationLookup = (searchItems = [], searchCorpus = []) => {
  if (searchItems.length == 0 || searchCorpus.length == 0) return [];

  return tag(
    featureCollection(searchItems),
    featureCollection(searchCorpus),
    "NAME",
    "city_name"
  );
};
