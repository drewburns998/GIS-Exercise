import React, { useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "pk.eyJ1IjoiZHJld2J1cm5zOTk4IiwiYSI6ImNrY2pkOHN6NjBudWUycm8yb2U1d3A0b2EifQ.PRMNgMtsXcxANheXmcLB7Q";
mapboxgl.accessToken = TOKEN;

const MobiMap = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-82.998795, 39.961178],
      zoom: 9,
    });

    new mapboxgl.Marker().setLngLat([-82.991154, 39.960157]).addTo(map);
    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      className="map-container"
      style={{ width: "800px", height: "800px" }}
      ref={mapContainerRef}
    />
  );
};

export default MobiMap;
