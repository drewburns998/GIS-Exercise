import { MobiTable } from "../components/table/MobiTable";
import { connect } from "react-redux";
import { getSearchResults } from "../selectors/selectors";
import { updateMapSearchValues } from "../reducers/actionCreators";

const mapStateToProps = (state) => ({
  rowData: getSearchResults(state),
});

const mapDispatchToProps = {
  updateMapSearchValues,
};

export const LocationTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    forwardRef: true,
  }
)(MobiTable);
