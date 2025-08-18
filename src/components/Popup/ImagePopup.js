import React, { useRef } from "react";
import "./Popup.css";

const ImageModal = ({ images, currentIndex, setCurrentIndex, onClose }) => {
    const modalRef = useRef();

    const handleBackgroundClick = (e) => {
        if (e.target === modalRef.current) {
            onClose();
        }
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="image-modal" ref={modalRef} onClick={handleBackgroundClick}>
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>×</span>
                <button className="nav-btn left" onClick={handlePrev}>&lt;</button>
                <img
                    src={images[currentIndex]}
                    alt={`View ${currentIndex}`}
                    className="modal-img"
                    onClick={onClose}
                />
                <button className="nav-btn right" onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
};

export default ImageModal;
