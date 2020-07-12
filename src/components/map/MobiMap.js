import React, { useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const TOKEN =
  "pk.eyJ1IjoiZHJld2J1cm5zOTk4IiwiYSI6ImNrY2pkOHN6NjBudWUycm8yb2U1d3A0b2EifQ.PRMNgMtsXcxANheXmcLB7Q";
mapboxgl.accessToken = TOKEN;

const mapDefaults = {
  center: [-82.998795, 39.961178],
  zoom: 9.5,
  markers: [
    {
      lat: 39.960157,
      lng: -82.991154,
    },
  ],
};

const MobiMap = ({
  centerProp = mapDefaults.center,
  zoomProp = mapDefaults.zoom,
  markers = mapDefaults.markers,
}) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: centerProp,
      zoom: zoomProp,
    });

    markers.forEach((marker) => {
      new mapboxgl.Marker().setLngLat([marker.lng, marker.lat]).addTo(map);
    });
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

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
