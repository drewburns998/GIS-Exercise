export const getSearchResults = (state) =>
  state.searchResults.map((row) => ({
    id_values_matched: row.properties.id_values_matched.length,
    city_name: row.properties.NAME,
    latitude: row.properties.latitude_values_matched,
    longitude: row.properties.longitude_values_matched,
    restaurant: row.properties.name_values_matched,
  }));
