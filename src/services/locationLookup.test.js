import { featureCollection } from "@turf/turf";

import { locationLookup } from "./locationLookup";
import { fileTransformer } from "./fileTransformer";

describe("locationLookup service", () => {
  const searchItems = [
    {
      id: "0",
      name: "mcdonald's",
      latitude: 62.00973,
      longitude: -6.77164,
    },
    {
      id: "0",
      name: "wendy's",
      latitude: 82.00974,
      longitude: -6.7716,
    },
  ];

  const searchItemsTransformed = fileTransformer(searchItems);

  const searchCorpus = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { NAME: "TORSHAVN" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-6.75864, 62.01517],
              [-6.76184, 62.01528],
              [-6.77094, 62.00592],
              [-6.78213, 62.01058],
              [-6.78955, 62.01057],
              [-6.78014, 62.01684],
              [-6.78008, 62.02489],
              [-6.78007, 62.02657],
              [-6.76876, 62.02221],
              [-6.75841, 62.02336],
              [-6.75534, 62.01801],
              [-6.75864, 62.01517],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { NAME: "LERWICK" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-1.16446, 60.16395],
              [-1.16168, 60.16221],
              [-1.15894, 60.16247],
              [-1.15728, 60.16261],
              [-1.15343, 60.15965],
              [-1.14495, 60.1531],
              [-1.14546, 60.15247],
              [-1.14954, 60.14748],
              [-1.15199, 60.14803],
              [-1.16346, 60.15058],
              [-1.16576, 60.15185],
              [-1.16922, 60.15376],
              [-1.17443, 60.16082],
              [-1.17653, 60.16368],
              [-1.17452, 60.17022],
              [-1.16446, 60.16395],
            ],
          ],
        },
      },
    ],
  };

  const searchCorpusFC = featureCollection(searchCorpus.features);

  it("has default parameters", () => {
    const result = locationLookup();

    expect(result).toEqual([]);
  });

  it("handles no search corpus", () => {
    const result = locationLookup(searchItems);

    expect(result).toEqual([]);
  });

  it("has returns the correctly shaped parameters", () => {
    const expectedResult = {
      features: [
        {
          geometry: { coordinates: [-6.77164, 62.00973], type: "Point" },
          properties: {
            city_name: "TORSHAVN",
            id: "0",
            landmarkName: "mcdonald's",
          },
          type: "Feature",
        },
        {
          geometry: { coordinates: [-6.7716, 82.00974], type: "Point" },
          properties: { id: "0", landmarkName: "wendy's" },
          type: "Feature",
        },
      ],
      type: "FeatureCollection",
    };

    const result = locationLookup(
      searchItemsTransformed,
      searchCorpusFC.features
    );

    expect(result).toEqual(expectedResult);
  });
});
