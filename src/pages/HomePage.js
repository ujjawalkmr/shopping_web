import React, { useState } from "react";
import HomePageAppBar from "../components/appbar/HomePageAppBar";
import HomePageImage from "../components/HomePageElement/HomePageImage";
import SearchingContainer from "../components/HomePageElement/SearchingContainer";
import ProductArea from "../components/HomePageElement/ProductArea";
import ExploreProducts from "../components/HomePageElement/ExploreProducts";
import BottomArea from "../components/HomePageElement/BottomArea";




function HomePage(){
     const [items] = useState(
        Array.from({ length: 20 }, (_, i) => `Product #${i + 1}`)
      );

     
    
      return (
        <div >
          {/* AppBar */}
          <HomePageAppBar />
          <HomePageImage />
         <SearchingContainer />
         <ProductArea />
         <ExploreProducts />
         <BottomArea />
      
        </div>
      );
}
export default HomePage;