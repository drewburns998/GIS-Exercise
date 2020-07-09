import React from "react";
import { MobiTable } from "../src/components/table/MobiTable";

export default {
  title: "Table",
  component: MobiTable,
};

const columnDefs = [
  { headerName: "Location Name", field: "name" },
  { headerName: "Latitude", field: "latitude" },
  { headerName: "Longitude", field: "longitude" },
];
const rowData = [
  { name: "McDonald's", latitude: "44.9213", longitude: "-74.89021" },
  { name: "Wendy's", latitude: "39.53255", longitude: "-83.44526" },
  { name: "Frisch's Big Boy", latitude: "38.62736", longitude: "-83.79141" },
  { name: "McDonald's", latitude: "44.9213", longitude: "-74.89021" },
  { name: "Wendy's", latitude: "39.53255", longitude: "-83.44526" },
  { name: "Frisch's Big Boy", latitude: "38.62736", longitude: "-83.79141" },
  { name: "McDonald's", latitude: "44.9213", longitude: "-74.89021" },
  { name: "Wendy's", latitude: "39.53255", longitude: "-83.44526" },
  { name: "Frisch's Big Boy", latitude: "38.62736", longitude: "-83.79141" },
  { name: "McDonald's", latitude: "44.9213", longitude: "-74.89021" },
  { name: "Wendy's", latitude: "39.53255", longitude: "-83.44526" },
  { name: "Frisch's Big Boy", latitude: "38.62736", longitude: "-83.79141" },
];

export const Basic = () => (
  <MobiTable columnDefs={columnDefs} rowData={rowData}></MobiTable>
);
