import React from "react";
import "../../css_file/Product.css";

function ProductGallery({
  product,
  mainImage,
  setMainImage,
  setCurrentIndex,
  onOpen,
}) {
  return (
    <div className="left-section">
      <div className="thumbnails">
        {product.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            className={`thumb ${mainImage === img ? "active" : ""}`}
            onClick={() => {
              setMainImage(img);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>

      <div className="main-image" onClick={onOpen}>
        <img src={mainImage} alt="product" />
      </div>
    </div>
  );
}

export default ProductGallery;


{/* LEFT SIDE (50%) */ }
{/* <div className="left-section"> */ }

{/* Thumbnail column (10%) */ }
{/* <div className="thumbnails">
      {product?.image?.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="thumb"
          className={`thumb ${mainImage === img ? "active" : ""}`}
          onClick={() => setMainImage(img)}
        />
      ))}
    </div> */}

{/* Main image area (90%) */ }
{/* <div className="main-image" onClick={() => setIsOpen(true)}>
  <img src={mainImage} alt="product" />
</div> */}
{/* </div> */ }