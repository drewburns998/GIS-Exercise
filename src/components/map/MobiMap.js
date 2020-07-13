import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";
import markerIcon from "./map_marker.png";

const TOKEN =
  "pk.eyJ1IjoiZHJld2J1cm5zOTk4IiwiYSI6ImNrY2pkOHN6NjBudWUycm8yb2U1d3A0b2EifQ.PRMNgMtsXcxANheXmcLB7Q";

export const MobiMap = ({ mapState, markersProp, onChangeViewport }) => {
  return (
    <ReactMapGL
      {...mapState}
      width={500}
      height={500}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={onChangeViewport}
    >
      {markersProp.length > 0 && (
        <Marker
          latitude={markersProp[0].lat}
          longitude={markersProp[0].lng}
          offsetLeft={-20}
          offsetTop={-10}
        >
          {/* <div style={{ color: "red" }}>X</div> */}
          <img src={markerIcon} alt="X" />
        </Marker>
      )}
    </ReactMapGL>
  );
};
