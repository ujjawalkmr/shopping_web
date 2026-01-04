import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../data/productData";
import ProductShowDialog from "../component/dialog_box/ProductShowDialog";
import "../css_file/Product.css";
import ProductGallery from "../component/Product/ProductGallery";
import ProductInfo from "../component/Product/ProductInfo";


function ProductDetails(){
    const {id}=useParams();
    console.log("ids is:",id);
    const [mainImage, setMainImage] = useState();
    const [isOpen, setIsOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);


    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{fetchProductById(id);},[id]);
    const fetchProductById =async(productId)=>{
        try{
            setLoading(true);
            const res=ProductData.find(p => p.id ===Number( productId));
            console.log("image data is :",res);
            setProduct(res);
             if (res?.image?.length > 0) {
        setMainImage(res.image[0]);
        setCurrentIndex(0);
      }
        }catch(err){
            console.error("Error fetching product:", err);
        }
        finally{
            setLoading(false);
        }
    };

    if(loading)return <h2>Loading...</h2>;
    if(!product)return <h2>Product not found</h2>;
    
    return (
        
<div className="product-details">
<ProductGallery
  product={product}
  mainImage={mainImage}
  onOpen={setIsOpen}
  setCurrentIndex={setCurrentIndex}
  setMainImage={setMainImage}
/>
{/* pop image */}
<ProductShowDialog
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  product={product}
  currentIndex={currentIndex}
  setCurrentIndex={setCurrentIndex}
  setMainImage={setMainImage}
/>
  {/* RIGHT SIDE (50%) */}
<ProductInfo
  product={product}
/>

</div>
    )
}
export default ProductDetails;