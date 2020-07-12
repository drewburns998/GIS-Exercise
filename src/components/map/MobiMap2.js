import * as React from "react";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiZHJld2J1cm5zOTk4IiwiYSI6ImNrY2pkOHN6NjBudWUycm8yb2U1d3A0b2EifQ.PRMNgMtsXcxANheXmcLB7Q";

export const MobiMap2 = ({ mapState, markersProp, onChangeViewport }) => {
  return (
    <ReactMapGL
      {...mapState}
      width={500}
      height={500}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={onChangeViewport}
    >
      {markersProp.map((marker) => {
        <Marker key={marker.id} longitude={marker.lng} latitude={marker.lat} />;
      })}
    </ReactMapGL>
  );
};
