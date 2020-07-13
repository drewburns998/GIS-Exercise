import { connect } from "react-redux";
import { AppContent } from "../components/AppContent";
import { startNewUpload } from "../reducers/actionCreators";

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  isSearchCompleted: state.isSearchCompleted,
  isRowClicked: true,
  uploadedFileName: state.uploadedFileName,
});

const mapDispatchToProps = {
  startNewUpload,
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContent);
