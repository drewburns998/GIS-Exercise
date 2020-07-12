import { MobiMap2 } from "../components/map/MobiMap2";
import { connect } from "react-redux";
import { getMapMarkers } from "../selectors/selectors";
import { onChangeViewport } from "redux-map-gl";

const mapStateToProps = (state) => ({
  mapState: state.mapViewport,
  markersProp: getMapMarkers(state),
  // centerProp: getMapCenterPoint(state),
});

const actions = {
  onChangeViewport,
};

export const MobiMapContainer = connect(mapStateToProps, actions)(MobiMap2);
