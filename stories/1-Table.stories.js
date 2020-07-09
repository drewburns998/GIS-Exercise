import React from "react";
import { MobiTable } from "../src/components/table/MobiTable";

export default {
  title: "Table",
  component: MobiTable,
};

const columnDefs = [
  { headerName: "id", field: "id" },
  { headerName: "Location Name", field: "name" },
  { headerName: "Latitude", field: "latitude" },
  { headerName: "Longitude", field: "longitude" },
  { headerName: "City", field: "city" },
];
const rowData = [
  {
    id: "0",
    name: "McDonald's",
    latitude: "44.9213",
    longitude: "-74.89021",
  },
  {
    id: "1",
    name: "Wendy's",
    latitude: "39.53255",
    longitude: "-83.44526",
  },
];
export const Basic = () => (
  <MobiTable columnDefs={columnDefs} rowData={rowData}></MobiTable>
);
