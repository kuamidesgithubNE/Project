import { useState } from "react";
const Modal = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <i className="fa fa-times close"></i>
        <div className="form">
          <h3>Upload files </h3>
          <div className="file-upload-container">
            {/* File input with custom placeholder */}
            <label
              className="custom-file-upload"
              onDrop={handleDrop}
              onDragOver={(event) => event.preventDefault()}
            >
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileUpload}
              />
              {selectedFile ? selectedFile.name : "Drop your files here!"}
            </label>
          </div>
          <div className="username">
            <label htmlFor="">
              {" "}
              Project name
              <input type="text" placeholder="" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
