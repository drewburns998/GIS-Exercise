import React from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const defaultColumnDefs = [
  { headerName: "# of IDs matched", field: "id_values_matched" },
  { headerName: "City Found", field: "city_name" },
  { headerName: "Rest Name", field: "restaurant" },
];

export const MobiTable = ({
  columnDefs = defaultColumnDefs,
  rowData = [],
  updateMapSearchValues,
}) => {
  return (
    <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
      <AgGridReact
        defaultColumnDefs
        autoSizeColumns={true}
        columnDefs={columnDefs}
        rowData={rowData}
        immutableData={true}
        getRowNodeId={(data) => data.city_name}
        pagination={true}
        rowSelection={"single"}
        onRowClicked={updateMapSearchValues}
      ></AgGridReact>
    </div>
  );
};
