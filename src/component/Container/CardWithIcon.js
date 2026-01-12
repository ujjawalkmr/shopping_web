import React, { useEffect, useRef } from "react";
import '../../css_file/CardWithIcon.css';
// Import icons from a library like lucide-react
// import { Leaf, Droplets, Handshake } from 'lucide-react';

const CardWithIcon = ({values,onClick}) => {
   

     const cardsRef = useRef([]);

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // when card comes into view
          entry.target.classList.add("show");
        } else {
          // when card goes out of view
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  cardsRef.current.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => observer.disconnect();
}, []);

  return (
    <section className="core-values-section">
      <div className="container">
        <h2 className="section-title">Our Core Values</h2>

        <div className="values-grid">
          {values.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`value-card 
                ${index === 0 ? "animate-left" : ""}
                ${index === 1 ? "animate-bottom" : ""}
                ${index === 2 ? "animate-right" : ""}
              `}
            >
                <div className="main-container" onClick={onClick}>
              <div className={`card-header ${item.className}`}>
                <div className="icon-circle">{item.icon}</div>
              </div>

              <div className="card-body">
                <p>
                  <span className="value-title">{item.title}:</span>{" "}
                  {item.description}
                </p>
              </div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default CardWithIcon;