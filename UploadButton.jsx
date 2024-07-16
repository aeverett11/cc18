import React, { useState } from 'react';
import './UploadButton.css';

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert('Image is being uploaded...');
      // Simulate an upload process
      setTimeout(() => {
        alert('Image uploaded successfully!');
        setSelectedFile(null);
      }, 2000); // Simulate a 2-second upload process
    } else {
      alert('Please select an image to upload.');
    }
  };

  return (
    <div className="upload-button">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadButton;
