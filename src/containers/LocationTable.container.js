import { MobiTable } from "../components/table/MobiTable";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  rowData: state.locationData,
});

export const LocationTableContainer = connect(mapStateToProps, null)(MobiTable);
