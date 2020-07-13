/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { LocationCSVUploadContainer } from "../containers/LocationCSVUpload.container";
import { LocationTableContainer } from "../containers/LocationTable.container";
import { MobiMapContainer } from "../containers/MobiMap.container";
import { UploadSuccess } from "./fileUpload/UploadSuccess";
import BeatLoader from "react-spinners/BeatLoader";

const uploadStyle = {
  margin: "25px 50px",
};

const itemStyle = {
  width: "1200px",
  margin: "0 auto",
  textAlign: "center",
};

const tableStyle = {
  width: "1200px",
  margin: "0 auto",
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

      {isDataLoaded && !isSearchCompleted ? (
        <div style={itemStyle}>
          <BeatLoader loading={!isSearchCompleted} />
        </div>
      ) : null}

      {isSearchCompleted ? (
        <UploadSuccess uploadedFileName={uploadedFileName} />
      ) : null}

      <div style={tableStyle}>
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
