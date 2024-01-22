import React from "react";
import Dropzone from "react-dropzone";

function UploadDropzone() {
  return (
    <Dropzone
      multiple={false}
      onDrop={(acceptedFiles) => {
        console.log(acceptedFiles);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 border-dashed border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6"></div>
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
}

export default UploadDropzone;
