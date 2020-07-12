export const getSearchResults = (state) =>
  state.searchResults.map((row) => ({
    number_of_matches: row.properties.id_values_matched.length,
    id_values_matched: row.properties.id_values_matched,
    city_name: row.properties.NAME,
    latitude: row.properties.latitude_values_matched,
    longitude: row.properties.longitude_values_matched,
    restaurant: row.properties.name_values_matched,
  }));

export const getMapMarkers = (state) =>
  state.mapSearchItems.id_values_matched.map((searchItemId, index) => ({
    id: state.mapSearchItems.id_values_matched[index],
    lat: parseFloat(state.mapSearchItems.latitude[index]),
    lng: parseFloat(state.mapSearchItems.longitude[index]),
    city_name: state.mapSearchItems.city_name,
    restaurant: state.mapSearchItems.restaurant[index],
  }));

export const getMapCenterPoint = (state) => {
  return [state.mapSearchItems.latitude[0], state.mapSearchItems.longitude[0]];
};
