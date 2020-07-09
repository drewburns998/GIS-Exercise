import { point, booleanPointInPolygon, polygon } from "@turf/turf";

export const locationLookup = (searchItems = [], searchCorpus) => {
  return searchItems.map((searchItem) => {
    const searchPoint = point([searchItem.longitude, searchItem.latitude]);
    let searchResult,
      name = "";

    if (
      searchCorpus &&
      searchCorpus.features &&
      searchCorpus.features.length > 0
    ) {
      searchResult = searchCorpus.features.filter((feature) =>
        booleanPointInPolygon(
          searchPoint,
          polygon(feature.geometry.coordinates)
        )
      );
      name = searchResult.length > 0 ? searchResult[0].properties.NAME : "";
    }

    return { ...searchItem, name };
  });
};
