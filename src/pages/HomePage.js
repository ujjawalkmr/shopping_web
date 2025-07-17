import React, { useState } from "react";
import HomePageAppBar from "../components/appbar/HomePageAppBar";
import HomePageImage from "../components/HomePageElement/HomePageImage";
import SearchingContainer from "../components/HomePageElement/SearchingContainer";
import ProductArea from "../components/HomePageElement/ProductArea";
import ExploreProducts from "../components/HomePageElement/ExploreProducts";




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

          {/* Item List */}
          <main className="item-list">
            <h2>Available Items</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="item-card">{item}</li>
              ))}
            </ul>
          </main>
        </div>
      );
}
export default HomePage;