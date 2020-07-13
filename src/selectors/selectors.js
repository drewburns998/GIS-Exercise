export const getSearchResults = (state) =>
  state.searchResults.map((row, index) => ({
    number_of_matches: row.properties.id_values_matched.length,
    id_values_matched: row.properties.id_values_matched,
    city_name: row.properties.NAME,
    latitude: row.properties.latitude_values_matched,
    longitude: row.properties.longitude_values_matched,
    restaurant: row.properties.name_values_matched,
    index: index,
  }));

export const getMapMarkers = (state) =>
  state.mapSearchItems.id_values_matched.map((searchItemId, index) => ({
    id: searchItemId,
    lat: parseFloat(state.mapSearchItems.latitude[index]),
    lng: parseFloat(state.mapSearchItems.longitude[index]),
    city_name: state.mapSearchItems.city_name,
    restaurant: state.mapSearchItems.restaurant[index],
  }));
