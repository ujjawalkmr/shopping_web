import "../Container/Container.css";
import { FaShare } from "react-icons/fa";

function ProductContainer({productImage,productPrice,productDiscription,onClick}){
    return(
       <div className="product-container" onClick={onClick}>
  {/* Upper part – Image */}
  <div className="product-image">
    <img src={productImage} alt="Product" />
  </div>

  {/* Lower part – Content */}
 <div className="product-content">
  <div className="price-row">
    <h3>{productPrice}</h3>
    <button className="share-btn"><FaShare/></button>
  </div>

  <p>{productDiscription}</p>
</div>

</div>

    );
}

export default ProductContainer;