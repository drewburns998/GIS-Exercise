import { point } from "@turf/turf";

export const fileTransformer = (searchItems) => {
  return searchItems.map((searchItem) =>
    point([searchItem.longitude, searchItem.latitude], {
      id: searchItem.id,
      landmarkName: searchItem.name,
    })
  );
};
