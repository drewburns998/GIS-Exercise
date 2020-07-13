/* eslint-disable react/react-in-jsx-scope */

const messageStyle = {
  textAlign: "center",
  marginBotton: "40px",
};

export const UploadSuccess = ({ uploadedFileName }) => {
  return (
    <div style={messageStyle}>
      <h3>You have successfully uploaded {uploadedFileName}</h3>
      <p>Click a row item below to see the location on a map</p>
    </div>
  );
};
