import { connect } from "react-redux";
import { AppContent } from "../components/AppContent";

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  isSearchCompleted: state.isSearchCompleted,
  isRowClicked: true,
  uploadedFileName: state.uploadedFileName,
});

export const AppContainer = connect(mapStateToProps, null)(AppContent);