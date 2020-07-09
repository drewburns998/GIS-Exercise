import React from "react";
import CSVReader from "react-csv-reader";

const papaparseOptions = {
  header: true,
  skipEmptyLines: true,
};

export const MobiFileUpload = (props) => {
  const { onFileLoaded } = props;

  return (
    <div>
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
