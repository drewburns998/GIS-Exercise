import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

const TOKEN =
  "pk.eyJ1IjoiZHJld2J1cm5zOTk4IiwiYSI6ImNrY2pkOHN6NjBudWUycm8yb2U1d3A0b2EifQ.PRMNgMtsXcxANheXmcLB7Q";
mapboxgl.accessToken = TOKEN;

class MobiMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MobiMap;
