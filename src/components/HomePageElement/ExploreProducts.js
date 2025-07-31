import React, { useRef, useState, useEffect } from "react";
import bajara from "../../assets/images/bajara.png";
import beat from "../../assets/images/beat.png";
import bij from "../../assets/images/bij.png";
import chana_dal from "../../assets/images/chana-dal.png";
import chana from "../../assets/images/chana.png";
import dal from "../../assets/images/dal.png";
import daliya from "../../assets/images/daliya.png";
import daniya from "../../assets/images/daniya.png";
import dhan_khet from "../../assets/images/dhan_khet.png";
import dhan from "../../assets/images/dhan.png";
import gehu_type from "../../assets/images/gehu_type.png";
import gehu from "../../assets/images/gehu.png";
import honey from "../../assets/images/honey.png";
import jao from "../../assets/images/jao.png";
import kangji from "../../assets/images/kangji.png";
import makhana from "../../assets/images/makhana.png";
import makka from "../../assets/images/makka.png";
import mix_food from "../../assets/images/mix_food.png";
import mung from "../../assets/images/mung.png";
import ready_fasal from "../../assets/images/ready_fasal.png";
import rost_dal from "../../assets/images/rost-dal.png";
import satnaja from "../../assets/images/satnaja.png";
import seeds from "../../assets/images/seeds.png";







function ExploreProducts() {
    const exploreProducts = [
        { name: "Bajara", price: "₹120", image: bajara },
        { name: "Bij", price: "₹150", image: beat },
        { name: "Bij", price: "₹180", image: bij },
        { name: "Chana dal", price: "₹120", image: chana_dal },
        { name: "Chana", price: "₹120", image: chana },
        { name: "Dal", price: "₹150", image: dal },
        { name: "Daliya", price: "₹180", image: daliya },
        { name: "Dhaniya", price: "₹120", image: daniya },
        { name: "Dhan khet", price: "₹150", image: dhan_khet },
        { name: "Dhan", price: "₹180", image: dhan },
        { name: "Gehu type", price: "₹120", image: gehu_type },
        { name: "Gehu", price: "₹150", image: gehu },
        { name: "Honey", price: "₹180", image: honey },
        { name: "Jao", price: "₹120", image: jao },
        { name: "Kangji", price: "₹150", image: kangji },
        { name: "Makka", price: "₹180", image: makka },
        { name: "Makhana", price: "₹120", image: makhana },
        { name: "Mix food", price: "₹150", image: mix_food },
        { name: "Mung dala", price: "₹180", image: mung },
        { name: "Ready fasal", price: "₹120", image: ready_fasal },
        { name: "Rost dal", price: "₹150", image: rost_dal },
        { name: "Satnaja", price: "₹180", image: satnaja },
        { name: "Seeds", price: "₹120", image: seeds },

    ];
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;
        setShowLeft(el.scrollLeft > 0);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    useEffect(() => {
        checkScrollButtons();
        const el = scrollRef.current;
        if (el) el.addEventListener("scroll", checkScrollButtons);
        return () => el?.removeEventListener("scroll", checkScrollButtons);
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };
    return (
        <div className="explore-items">
            <div className="explore-heading">Explore  our new arrivals</div>
            <div className="scroller-wrapper">
                {showLeft && <button className="scroll-btn left" onClick={scrollLeft}>◀</button>}

                <div className="product-scroll-container" ref={scrollRef}>
                    {exploreProducts.map((item, index) => (
                        <div className="product-card" key={index}>
                            <img src={item.image} alt={item.name} className="product-img" />
                            <div className="product-name">{item.name}</div>
                            <div className="product-price">{item.price}</div>
                        </div>
                    ))}
                </div>

                {showRight && <button className="scroll-btn right" onClick={scrollRight}>▶</button>}
            </div>
            <div className="center-button">
                <button className="view-arrivals" type="button">View all new arrivals</button>
            </div>



        </div>
    );
}

export default ExploreProducts;