import React, { useState } from "react";

function DropdownMenu() {
  const [selected, setSelected] = useState("all");

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="dropdown-select"
    >
      <option value="all">Relevance</option>
      <option value="shop">Shop</option>
      <option value="seller">Seller</option>
      <option value="insights">Insights</option>
      <option value="about">About Us</option>
    </select>
  );
}

export default DropdownMenu;
