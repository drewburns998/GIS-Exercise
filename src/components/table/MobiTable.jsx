import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const defaultColumnDefs = [
  { headerName: "id", field: "id" },
  { headerName: "Location Name", field: "name" },
  { headerName: "Latitude", field: "latitude" },
  { headerName: "Longitude", field: "longitude" },
  { headerName: "City", field: "city" },
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
        getRowNodeId={(data) => data.id}
        pagination={true}
      ></AgGridReact>
    </div>
  );
};
