const { getSearchResults } = require("./selectors");

describe("search result selector", () => {
  const state = {
    searchResults: [
      {
        properties: {
          id_values_matched: ["1", "2"],
          NAME: "a city Name",
          latitude_values_matched: [97.444],
          longitude_values_matched: [-44.1],
          name_values_matched: ["wendy's"],
        },
      },
    ],
  };
  it("transforms the properties correctly", () => {
    const result = getSearchResults(state);
    const expectedResults = [
      {
        id_values_matched: 2,
        city_name: "a city Name",
        latitude: [97.444],
        longitude: [-44.1],
        restaurant: ["wendy's"],
      },
    ];

    expect(result).toEqual(expectedResults);
  });
});
