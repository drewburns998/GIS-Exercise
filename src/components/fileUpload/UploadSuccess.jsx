/* eslint-disable react/react-in-jsx-scope */
import React from "react";

const messageStyle = {
  textAlign: "center",
  marginBotton: "40px",
};

const linkStyle = {
  cursor: "pointer",
}

export const UploadSuccess = ({ uploadedFileName, resetLink }) => {
  return (
    <div style={messageStyle}>
      <h3>You have successfully uploaded {uploadedFileName}</h3>
      <p>Click a row item below to see the location on a map</p>
      <p>
        <a style={linkStyle} onClick={resetLink}>
          CLICK HERE
        </a>{" "}
        to start a new upload
      </p>
    </div>
  );
};
