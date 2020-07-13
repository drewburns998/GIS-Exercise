import React from "react";
import CSVReader from "react-csv-reader";

const papaparseOptions = {
  header: true,
  skipEmptyLines: true,
};

const container = {
  textAlign: "center",
  padding: "15px",
  margin: "10px auto",
};

export const MobiFileUpload = (props) => {
  const { onFileLoaded } = props;

  return (
    <div style={container}>
      <h3>
        Select CSV with location data to determine which city it is located
      </h3>
      <CSVReader
        parserOptions={papaparseOptions}
        onFileLoaded={(data, fileInfo) =>
          onFileLoaded({
            data: data,
            fileInfo: fileInfo,
          })
        }
      />
    </div>
  );
};
