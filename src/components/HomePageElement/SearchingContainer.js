import React, { useState } from "react";

import InputTextField from "../../commonPage/InputTextField/InputTextField";
import Button from "../../commonPage/Buttons/Button";
import "../../commonPage/Buttons/Button.css";
import CustomDropDown from "../../commonPage/dropDown/CustomDropDown";

function SearchingContainer() {
  const [text, setText] = useState(""), [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All Products", "Electronics", "Books", "Clothing"];
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const dropDownHandleChange = (e) => {
    setSelectedCategory(e.target.value); // ✅ Updates the selected value
  };
  return (
    <div class="home-container">
      <div class="left-section">

        <Button className="product-categories" label="All Products" onClick={() => console.log('Clicked!')} />
        <Button className="product-categories" label="Electronics" onClick={() => console.log('Clicked!')} />
        <Button className="product-categories" label="Electronics" onClick={() => console.log('Clicked!')} />
        <Button className="product-categories" label="Electronics" onClick={() => console.log('Clicked!')} />
        <Button className="product-categories" label="Electronics" onClick={() => console.log('Clicked!')} />

      </div>
      <div class="right-section">
        <InputTextField value={text} onChange={handleChange} />
        <CustomDropDown options={categories} value={selectedCategory}
          onChange={dropDownHandleChange} />


      </div>
    </div>

  )
}
export default SearchingContainer;