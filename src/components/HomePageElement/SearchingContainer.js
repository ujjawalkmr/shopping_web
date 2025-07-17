import DropdownMenu from "../dropDown/DropDownMenu";

function SearchingContainer(){
    return(
        <div class="home-container">
  <div class="left-section">
    
    <div> <button className="product-button">All Products</button></div>
    <div> <button className="product-button">Shop</button></div>
    <div> <button className="product-button">Seller</button></div>
    <div> <button className="product-button">Insights</button></div>
    <div> <button className="product-button">About Us</button></div>
  
  </div>
  <div class="right-section">
   <input type="text" placeholder="Search Products..." class="input-field" />
<DropdownMenu />
    
  </div>
</div>
    )
}
export default SearchingContainer;