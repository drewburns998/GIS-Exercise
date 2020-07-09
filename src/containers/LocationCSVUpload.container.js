import { MobiFileUpload } from "../components/fileUpload/MobiFileUpload";
import { connect } from "react-redux";
import { saveLocationData } from "../reducers/actionCreators";

const mapDispatchToProps = {
  onFileLoaded: saveLocationData,
};

export const LocationCSVUploadContainer = connect(
  null,
  mapDispatchToProps
)(MobiFileUpload);
