import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { useThrottleScroll } from "../utils/useThrottle"
import ProductContainer from "./Container/ProductContainer";
import { useNavigate } from "react-router-dom";
import "../css_file/Suggestion.css";
import { useProductData } from "../hooks/useApiCall";


function Suggestion() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { product, loading, setProduct } = useProductData();
  console.log("product is:", product);
  const itemWidth = 200; // width of your .item including margin/padding

  const scrollLeft = () => {
    if (!scrollRef.current) return; // <--- VERY IMPORTANT
    scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
  };
  const throttledScrollLeft = useThrottleScroll(scrollLeft, 200);
  const throttledScrollRight = useThrottleScroll(scrollRight, 200);

  return (
    <div>
      <h1 className="suggestion-title">Suggestion</h1>
      <div className="suggestion-wrapper">
        {/* Left Icon */}{!loading && (
          <button className="scroll-btn left" onClick={throttledScrollLeft}>
            <FaChevronLeft />
          </button>
        )}

        {/* Scrollable box */}
        <div className="suggestion-box" ref={scrollRef}>
          {loading ? (
            <div className="spinner"></div>
          ) : product && product.length > 0 ? (
            product.map((item) => (
              <ProductContainer
                key={item.id}
                productImage={item.image[0]}
                productPrice={item.price}
                productDiscription={item.description}
                onClick={() => navigate(`/product_details/${item.id}`)}
              />
            ))
          ) : (
            <div>No products found</div>
          )}


        </div>

        {/* Right Icon */}
        {!loading && (
          <button className="scroll-btn right" onClick={throttledScrollRight}>
            <FaChevronRight />
          </button>)}
      </div></div>
  );
}
export default Suggestion;



