import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../component/ImageSlider";
import TextSlider from "../component/TextSlider";
import ProductContainer from "../component/Container/ProductContainer";
import "../css_file/Home.css";
import ProductData from "../data/productData";

function Home() {
    const navigate = useNavigate();

    // const prductDetails=[
    //     "/assets/images/bread.jpg",
    //     "/assets/images/curd.jpg",
    //     "/assets/images/butter.jpg",
    //     "/assets/images/fruitShek.jpg",
    //     "/assets/images/milk.webp",
    //     "/assets/images/milk3.jpg",
    //     "/assets/images/milk4.jpg",
    //     "/assets/images/panir.jpg"];
    return (
        <div>
             <ImageSlider/>
             <TextSlider/>
      {/* This is when items in list without in json */}
      {/* <div className="product-grid">{prductDetails.map((image,index)=>(
        <ProductContainer 
        key={index}
        productImage={image}
        />
      ))}

      </div> */}
      {/* This is when data is like [{}] it means json */}

          <div className="product-grid">
             {ProductData.map((item)=>(
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

export default Home;
