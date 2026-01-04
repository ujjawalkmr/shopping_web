import React from "react";
import "../../css_file/DialogBox.css";

function ProductShowDialog({isOpen,
  setIsOpen,
  product,
  currentIndex,
  setCurrentIndex,
  setMainImage}){
 if (!isOpen) return null;
    return (

  <div className="lightbox" onClick={setIsOpen}>
    <div
      className="lightbox-container"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <span className="close" onClick={() => setIsOpen(false)}>✕</span>

      {/* Left Arrow */}
      {currentIndex > 0 && (
        <span
          className="arrow left"
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
            setMainImage(product.image[currentIndex - 1]);
          }}
        >
          &#10094;
        </span>
      )}

      {/* Image */}
      <img
        src={product.image[currentIndex]}
        alt="popup"
        className="popup-image"
      />

      {/* Right Arrow */}
      {currentIndex < product.image.length - 1 && (
        <span
          className="arrow right"
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
            setMainImage(product.image[currentIndex + 1]);
          }}
        >
          &#10095;
        </span>
      )}
    </div>
  </div>

    );
}

export default ProductShowDialog;


// {isOpen && (
//   <div className="lightbox" onClick={() => setIsOpen(false)}>
//     <div
//       className="lightbox-container"
//       onClick={(e) => e.stopPropagation()}
//     >
      {/* Close */}
    //   <span className="close" onClick={() => setIsOpen(false)}>✕</span>

      {/* Left Arrow */}
    //   {currentIndex > 0 && (
    //     <span
    //       className="arrow left"
    //       onClick={() => {
    //         setCurrentIndex(currentIndex - 1);
    //         setMainImage(product.image[currentIndex - 1]);
    //       }}
    //     >
    //       &#10094;
    //     </span>
    //   )}

      {/* Image */}
    //   <img
    //     src={product.image[currentIndex]}
    //     alt="popup"
    //     className="popup-image"
    //   />

      {/* Right Arrow */}
//       {currentIndex < product.image.length - 1 && (
//         <span
//           className="arrow right"
//           onClick={() => {
//             setCurrentIndex(currentIndex + 1);
//             setMainImage(product.image[currentIndex + 1]);
//           }}
//         >
//           &#10095;
//         </span>
//       )}
//     </div>
//   </div>
// )}