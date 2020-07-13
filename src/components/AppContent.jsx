/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { LocationCSVUploadContainer } from "../containers/LocationCSVUpload.container";
import { LocationTableContainer } from "../containers/LocationTable.container";
import { MobiMapContainer } from "../containers/MobiMap.container";

export const AppContent = ({
  isDataLoaded,
  isSearchCompleted,
  isRowClicked,
}) => {
  return (
    <div>
      <LocationCSVUploadContainer />
      <LocationTableContainer />
      <MobiMapContainer />
    </div>
  );
};
