import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const defaultColumnDefs = [
  { headerName: "# of IDs matched", field: "id_values_matched" },
  { headerName: "City Found", field: "city_name" },
  { headerName: "Latitude", field: "latitude" },
  { headerName: "Longitude", field: "longitude" },
  { headerName: "Rest Name", field: "restaurant" },
];

export const MobiTable = ({ columnDefs = defaultColumnDefs, rowData = [] }) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "400px", width: "800px" }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        immutableData={true}
        getRowNodeId={(data) => data.city_name}
        pagination={true}
      ></AgGridReact>
    </div>
  );
};
