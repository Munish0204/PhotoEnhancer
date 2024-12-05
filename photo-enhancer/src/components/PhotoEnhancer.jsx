import React, { useState, useEffect } from "react";
import "./PhotoEnhancer.css";

const App = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [isEnhanceModalOpen, setIsEnhanceModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnhance = () => {
    if (!preview) {
      alert("Please upload an image to enhance!");
      return;
    }
    setIsEnhanceModalOpen(true);  // Open enhancement modal

    // Close the modal after 5 seconds
    setTimeout(() => {
      setIsEnhanceModalOpen(false);
    }, 3000);
  };

  const handleViewPhoto = () => {
    if (!preview) {
      alert("Please upload a photo to view!");
      return;
    }
    setIsViewModalOpen(true);  // Open view modal
  };

  const closeEnhanceModal = () => {
    setIsEnhanceModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  return (
    <div className="app">
      <h1>Photo Enhancing</h1>
      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {preview && <img src={preview} alt="Preview" className="preview" />}
      </div>
      <button onClick={handleEnhance} className="enhance-btn">
        Enhance Photo
      </button>
      <button onClick={handleViewPhoto} className="view-btn">
        View Photo
      </button>

      {/* Enhance Modal */}
      {isEnhanceModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeEnhanceModal}>
              ✖
            </button>
            <h2>Enhancement in progress</h2>
            <p>Please Wait...</p>
            <button onClick={closeEnhanceModal} className="enhance-close-btn">
              
            </button>
          </div>
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeViewModal}>
              ✖
            </button>
            <img src={preview} alt="Full View" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
