import { useState ,useEffect} from "react";
import ProductData from "../data/productData";

const useProductData=()=>{
    const [product, setProduct] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(()=>{
        const fetchProductData=()=>{
            try{
                setLoading(true);
                const res=ProductData;
                setProduct(res);
                //console.log("product is:");
            }catch(err){
                console.log("error",err);
            }finally{
             setLoading(false);
            }
        };
        fetchProductData();     },[]);
        return {product,loading,setProduct};
}

export {useProductData};


