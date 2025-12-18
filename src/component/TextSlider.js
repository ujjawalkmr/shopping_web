import "../css_file/TextSlider.css";

const texts = [
  "Fresh Milk Available Daily",
  "Organic Dairy Products",
  "Free Home Delivery",
  "Best Quality Cheese",
  "Farm Fresh Butter",
  "100% Pure & Healthy",
];

function TextSlider() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {/* original texts */}
        {texts.map((text, i) => (
          <span className="ticker-item" key={i}>
            {text}
          </span>
        ))}

        {/* duplicate texts for smooth loop */}
        {texts.map((text, i) => (
          <span className="ticker-item" key={`dup-${i}`}>
            {text}
          </span>
        ))}
        <span>hhhhhhhhhhhhh</span>
      </div>
    </div>
  );
}

export default TextSlider;
