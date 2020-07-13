import { MobiMap } from "../components/map/MobiMap";
import { connect } from "react-redux";
import { getMapMarkers, getSearchLatAndLng } from "../selectors/selectors";
import { onChangeViewport } from "redux-map-gl";

const mapStateToProps = (state) => ({
  mapState: state.mapViewport,
  markersProp: getMapMarkers(state),
});

const actions = {
  onChangeViewport,
};

export const MobiMapContainer = connect(mapStateToProps, actions)(MobiMap);
