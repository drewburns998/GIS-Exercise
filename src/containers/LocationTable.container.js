import { MobiTable } from "../components/table/MobiTable";
import { connect } from "react-redux";
import { getSearchResults } from "../selectors/selectors";

const mapStateToProps = (state) => ({
  rowData: getSearchResults(state),
});

export const LocationTableContainer = connect(mapStateToProps, null, null, {
  forwardRef: true,
})(MobiTable);
