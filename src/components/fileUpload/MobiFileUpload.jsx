import React from "react";
import CSVReader from "react-csv-reader";

const onFileLoadedHandler = (data, fileInfo) =>
  // eslint-disable-next-line no-console
  console.log(data, fileInfo);

export const MobiFileUpload = () => {
  return (
    <div>
      <CSVReader onFileLoaded={onFileLoadedHandler} />
    </div>
  );
};
