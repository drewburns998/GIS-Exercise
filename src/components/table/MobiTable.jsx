import React from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const defaultColumnDefs = [
  { headerName: "Location Name", field: "name" },
  { headerName: "Latitude", field: "latitude" },
  { headerName: "Longitude", field: "longitude" },
  { headerName: "City", field: "city" },
];

export const MobiTable = ({ columnDefs = defaultColumnDefs, rowData = [] }) => {
  const gridOptions = {
    columnDefs,
    rowData,
    pagination: true,
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "400px", width: "800px" }}
    >
      <AgGridReact gridOptions={gridOptions} />
    </div>
  );
};
