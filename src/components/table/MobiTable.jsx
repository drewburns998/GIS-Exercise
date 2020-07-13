import React from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const defaultColumns = [
  {
    headerName: "City Found",
    field: "city_name",
    width: 550,
  },
  {
    headerName: "Matches Found",
    field: "number_of_matches",
    width: 150,
    sortable: true,
  },
  {
    headerName: "Restaurant Name",
    field: "restaurant",
    width: 500,
  },
];

export const MobiTable = ({
  columnDefs = defaultColumns,
  rowData = [],
  updateMapSearchValues,
}) => {
  return (
    <div className="ag-theme-alpine" style={{ height: "300px", width: "100%" }}>
      <AgGridReact
        defaultColumnDefs
        autoSizeColumns={true}
        columnDefs={columnDefs}
        rowData={rowData}
        immutableData={true}
        getRowNodeId={(data) => `${data.city_name}_${data.index}`}
        pagination={true}
        rowSelection={"single"}
        onRowClicked={updateMapSearchValues}
      ></AgGridReact>
    </div>
  );
};
