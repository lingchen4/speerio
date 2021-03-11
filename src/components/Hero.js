import React, { useEffect, useMemo, useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Hero() {
  const [isActive, setActive] = useState("img1");
  const image = useMemo(() => ["img1", "img2", "img3"],[]);

  useEffect(() => {
    const changeImage = setInterval(() => {
        setActive(image[image.indexOf(isActive)===2 ? 0: image.indexOf(isActive)+ 1]);
        console.log('1')
      }, 10*1000);
    return ()=> clearInterval(changeImage);
  }, [isActive,image]);

  return (
    <div className="hero-container">
      <div className={`hero ${isActive === "img1" ? "active" : ""}`}>
        <div className="hero-images">
          <img className="hero-images__1" src={img1} alt="" />
        </div>
        <div className="hero-content">
          <div className="hero-content__title">
            INTERACTIVE CONCERT EXPERIENCE
          </div>
          <div className="hero-content__text">
            Experience your favourite artists like never before and from the
            comfort of your own home.
          </div>
          <button className="hero-content__button">Try it now</button>
        </div>
      </div>
      <div className={`hero ${isActive === "img2" ? "active" : ""}`}>
        <div className="hero-images">
          <img className="hero-images__2" src={img2} alt="" />
        </div>
        <div className="hero-content">
          <div className="hero-content__title">
            INTERACTIVE CONCERT EXPERIENCE
          </div>
          <div className="hero-content__text">
            Experience your favourite artists like never before and from the
            comfort of your own home.
          </div>
          <button className="hero-content__button">Try it now</button>
        </div>
      </div>
      <div className={`hero ${isActive === "img3" ? "active" : ""}`}>
        <div className="hero-images">
          <img className="hero-images__3" src={img3} alt="" />
        </div>
        <div className="hero-content">
          <div className="hero-content__title">
            INTERACTIVE CONCERT EXPERIENCE
          </div>
          <div className="hero-content__text">
            Experience your favourite artists like never before and from the
            comfort of your own home.
          </div>
          <button className="hero-content__button">Try it now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
