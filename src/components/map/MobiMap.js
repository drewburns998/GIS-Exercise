/* eslint-disable react/jsx-key */
import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";
import markerIcon from "./map_marker.png";

const TOKEN =
  "pk.eyJ1IjoiZHJld2J1cm5zOTk4IiwiYSI6ImNrY2pkOHN6NjBudWUycm8yb2U1d3A0b2EifQ.PRMNgMtsXcxANheXmcLB7Q";

export const MobiMap = ({ mapState, markersProp, onChangeViewport }) => {
  const markerElements =
    markersProp.length > 0
      ? markersProp.map((marker, index) => (
          <Marker
            index={index}
            key={index}
            latitude={marker.lat}
            longitude={marker.lng}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img src={markerIcon} alt="X" />
          </Marker>
        ))
      : null;

  return (
    <ReactMapGL
      {...mapState}
      width={"100%"}
      height={500}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={onChangeViewport}
    >
      {markerElements && markerElements.length > 0 && markerElements}
    </ReactMapGL>
  );
};
