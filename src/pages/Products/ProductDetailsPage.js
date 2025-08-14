import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../../data/productsData";
import { loremIpsum } from "lorem-ipsum";
import "../../pages/Products/ProductDetails.css"

function ProductDetail() {
    const { id } = useParams();
    const product = products[parseInt(id)];
    const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);
    const loremText = loremIpsum({ count: 2, units: "paragraphs" });
    if (!product || !product.images || product.images.length === 0) {
        return <div>Product not found or has no images</div>;
    }

    return (
        <div>

            <div className="product-detail-container">
                <div className="details-left">
                    <div className="left-inner">

                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className={`thumbnail-img ${selectedImage === img ? "selected-thumbnail" : ""
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>

                    <div className="right-inner">
                        {/* Right side content, e.g. price and description */}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="selected-img"
                        />
                    </div>
                </div>



                <div className="details-right">
                    <div className="right-left">
                        {/* Left side content — e.g. product info */}
                        <h2>{product.description}</h2>
                        <p>Price: ₹120</p>
                        <p>Description goes here...</p>
                        <h3>About this item</h3>
                        <p>{product.about}</p>
                    </div>

                    <div className="right-right">
                        <div className="right-right-field">
                            <p>{loremText}</p>
                            {/* Right side content — e.g. buttons, icons, etc. */}
                            <button>Add to Cart</button>
                            <button>Buy Now</button>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    );
}

export default ProductDetail;
