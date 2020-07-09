import React from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const MobiTable = ({ columnDefs = [], rowData = [] }) => {
  const gridOptions = {
    columnDefs,
    rowData,
    pagination: true,
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "400px", width: "600px" }}
    >
      <AgGridReact gridOptions={gridOptions} />
    </div>
  );
};
