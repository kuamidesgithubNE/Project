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
        <div className="form">
          <h2>Upload Files </h2>
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
              {selectedFile ? selectedFile.name : "Drop Item Here!"}
              <p>or</p>
              
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
