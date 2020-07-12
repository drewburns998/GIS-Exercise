const { fileTransformer } = require("./fileTransformer");

describe("fileTransformer service", () => {
  const searchItems = [
    {
      id: "0",
      name: "landmark1",
      latitude: 62.00973,
      longitude: -6.77164,
    },
    {
      id: "1",
      name: "landmark2",
      latitude: 82.00974,
      longitude: -6.7716,
    },
  ];
  it("transforms the properties correctly", () => {
    const result = fileTransformer(searchItems);
    const expectResult = [
      {
        type: "Feature",
        properties: {
          id: "0",
          landmarkName: "landmark1",
        },
        geometry: {
          type: "Point",
          coordinates: [-6.77164, 62.00973],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "1",
          landmarkName: "landmark2",
        },
        geometry: {
          type: "Point",
          coordinates: [-6.7716, 82.00974],
        },
      },
    ];

    expect(result).toEqual(expectResult);
  });
});
