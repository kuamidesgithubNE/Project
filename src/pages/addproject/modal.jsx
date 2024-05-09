import { useState } from "react";

const Modal = ({ closeModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  // for the file selected by clicking
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // for the file selected by drag and dropping
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <i className="fa fa-times close" onClick={() => closeModal(false)}></i>
        <form className="form">
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
          <div>
            <label htmlFor="">Project Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Any link relating to the project?</label>
            <input type="text" />
          </div>
          <div>
            <div>
              <label htmlFor="">
                Which category does the project belong to?
              </label>
              <select name="" id="">
                <option value="">Category</option>
                <option value="">Computer Science</option>
                <option value="">Mechanical Engineering</option>
                <option value="">Electrical Engineering</option>
                <option value="">Civil Engineering</option>
                <option value="">Business</option>
                <option value="">Agricultural Engineering</option>
              </select>
            </div>
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="34" rows="4"></textarea>
          </div>
          <div className="button">
            <button style={{ color: "#fff", background: "rgb(10, 88, 189)" }}>
              Upload
            </button>
            <button onClick={() => closeModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
