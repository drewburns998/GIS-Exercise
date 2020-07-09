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
  { headerName: "City", field: "city" },
];
const rowData = [
  {
    name: "McDonald's",
    latitude: "44.9213",
    longitude: "-74.89021",
    city: "any",
  },
  {
    name: "Wendy's",
    latitude: "39.53255",
    longitude: "-83.44526",
    city: "any",
  },
  {
    name: "Frisch's Big Boy",
    latitude: "38.62736",
    longitude: "-83.79141",
    city: "any",
  },
  {
    name: "McDonald's",
    latitude: "44.9213",
    longitude: "-74.89021",
    city: "any",
  },
  {
    name: "Wendy's",
    latitude: "39.53255",
    longitude: "-83.44526",
    city: "any",
  },
  {
    name: "Frisch's Big Boy",
    latitude: "38.62736",
    longitude: "-83.79141",
    city: "any",
  },
  {
    name: "McDonald's",
    latitude: "44.9213",
    longitude: "-74.89021",
    city: "any",
  },
  {
    name: "Wendy's",
    latitude: "39.53255",
    longitude: "-83.44526",
    city: "any",
  },
  {
    name: "Frisch's Big Boy",
    latitude: "38.62736",
    longitude: "-83.79141",
    city: "any",
  },
  {
    name: "McDonald's",
    latitude: "44.9213",
    longitude: "-74.89021",
    city: "any",
  },
  {
    name: "Wendy's",
    latitude: "39.53255",
    longitude: "-83.44526",
    city: "any",
  },
  {
    name: "Frisch's Big Boy",
    latitude: "38.62736",
    longitude: "-83.79141",
    city: "any",
  },
];

export const Basic = () => (
  <MobiTable columnDefs={columnDefs} rowData={rowData}></MobiTable>
);
