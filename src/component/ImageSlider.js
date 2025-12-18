import { useEffect, useState } from "react";
import "../css_file/ImageSlider.css";
import SliderImage1 from "../assets/images/image1.jpg";
import SliderImage2 from "../assets/images/image2.jpg";
import SliderImage3 from "../assets/images/i3.jpg";

const images = [
  SliderImage1,
  SliderImage2,
  SliderImage3,
];
const texts = [
  {
    title: "Welcome to dairy shop",
    desc: "Discover amazing places",
  },
  {
    title: "Explore and buy",
    desc: "Travel the world with us",
  },
  {
    title: "Adventure",
    desc: "Your journey starts here",
  },
];

function ImageSlider() {
  const [imgIndex, setImgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // start text fade-out
      setShowText(false);

      // after fade-out, change text + image
      setTimeout(() => {
        setImgIndex((prev) => (prev + 1) % images.length);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setShowText(true);
      }, 800); // fade duration
    }, 4000); // total cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {/* IMAGE SLIDER */}
      <div
        className="slider-track"
        style={{ transform: `translateX(-${imgIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* COMMON CENTER TEXT */}
      <div className={`center-text ${showText ? "show" : "hide"}`}>
        <h1 className="heading-text">{texts[textIndex].title}</h1>
        <h3 className="subtitle-text">{texts[textIndex].desc}</h3>
      </div>
    </div>
  );
}

export default ImageSlider;
