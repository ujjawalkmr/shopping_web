import React from "react";
import { allProducts } from "../data/AllProduct";
import ProductContainer from "../component/Container/ProductContainer";
import { useNavigate } from "react-router-dom";
import "../css_file/ProductPage.css";

function Product() {
    const navigate=useNavigate();
    return (
        <div>
             <div className="product-grid">
             {allProducts.map((item)=>(
               <ProductContainer 
                 key={item.id}
                 productImage={item.image[0]}
                 productPrice={item.price}
                 productDiscription={item.description}
                 onClick={() => navigate(`/product_details/${item.id}`)}
    />
))}
      </div>
        </div>
    );
}

export default Product;
