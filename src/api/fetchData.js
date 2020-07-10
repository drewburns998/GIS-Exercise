const SEARCH_URL =
  "https://raw.githubusercontent.com/drei01/geojson-world-cities/master/cities.geojson";

export const fetchData = () => {
  return fetch(SEARCH_URL).then((res) =>
    res.ok ? res.json() : Promise.reject(res)
  );
};
