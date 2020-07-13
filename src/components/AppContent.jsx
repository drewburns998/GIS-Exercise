/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { LocationCSVUploadContainer } from "../containers/LocationCSVUpload.container";
import { LocationTableContainer } from "../containers/LocationTable.container";
import { MobiMapContainer } from "../containers/MobiMap.container";
import { UploadSuccess } from "./fileUpload/UploadSuccess";

const uploadStyle = {
  margin: "25px 50px",
};

const itemStyle = {
  width: "1200px",
  margin: "0 auto",
};

const messageStyle = {
  textAlign: "center",
  marginBotton: "40px",
};

export const AppContent = ({
  isDataLoaded,
  isSearchCompleted,
  isRowClicked,
  uploadedFileName,
}) => {
  return (
    <div style={uploadStyle}>
      {!isDataLoaded ? <LocationCSVUploadContainer /> : null}

      {isDataLoaded && !isSearchCompleted ? <p>data is loading</p> : null}

      {isSearchCompleted ? (
        <UploadSuccess uploadedFileName={uploadedFileName} />
      ) : null}

      <div style={itemStyle}>
        {isSearchCompleted ? <LocationTableContainer /> : null}
      </div>

      <div style={itemStyle}>
        {isDataLoaded && isSearchCompleted && isRowClicked ? (
          <MobiMapContainer />
        ) : null}
      </div>
    </div>
  );
};
