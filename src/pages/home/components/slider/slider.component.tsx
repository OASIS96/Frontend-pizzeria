import React, { useEffect, useRef, useState } from "react";
import PizzaImg from "../.,/../../../../assets/Preview-slider.png";
import BGImage from "../.,/../../../../assets/Background-slider.jpg";
import ArrowSvg from "../.,/../../../../assets/arrow.svg";
import "./slider.component.scss";

export const SliderComponent = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slider = sliderRef.current as HTMLDivElement;
  let index = 1;
  const [slides_number, setSlides_number] = useState(0);

  const moveAllSliderLeft = (ev:globalThis.TransitionEvent) => {
    if (index === 0) {
      slider.style.transition = "";
      index = slides_number - 2;
      slider.style.transform = `translateX(-${index * 20}%)`;
    }
  }

  const moveAllSliderRigth = (ev:globalThis.TransitionEvent) => {
    if (index === slides_number - 1) {
      slider.style.transition = "";
      index = 1;
      slider.style.transform = `translateX(-${index * 20}%)`;
    }
  }

  const changeSlideLeft = () => {
    if(index <= 0) return
    slider.removeEventListener("transitionend", moveAllSliderLeft);
    slider.removeEventListener("transitionend", moveAllSliderRigth);
    if (index > 0) {
      slider.style.transition = "transform .6s ease";
      index--;
      slider.style.transform = `translateX(-${index * 20}%)`;
      slider.addEventListener("transitionend", moveAllSliderLeft);
    }
  };

  const changeSlideRight = () => {
    if(index >= slides_number - 1) return
    slider.removeEventListener("transitionend", moveAllSliderLeft);
    slider.removeEventListener("transitionend", moveAllSliderRigth);
    if (index < slides_number - 1) {
      slider.style.transition = "transform .6s ease";
      index++;
      slider.style.transform = `translateX(-${index * 20}%)`;
      slider.addEventListener("transitionend", moveAllSliderRigth);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 20}%)`;
    }
    setSlides_number(sliderRef.current?.children.length as number);
  }, []);

  return (
    <div className="slider_c_c" style={{ backgroundImage: `url(${BGImage})` }}>
      <div className="container">
        <div className="slides_container" ref={sliderRef}>
          <div className="slide_last">
            <div className="img_container">
              <img src={PizzaImg} alt="" />
            </div>
            <h1 className="title_slide">Pizza Americana 3</h1>
            <span className="price_slide">S/.30.00</span>
            <p className="description_slide">
              Curabitur rutrum erat eu tincidunt bibendum. Sed sollicitudin
              tempus nisl a porta. Sed euismod varius justo, non venenatis
              lacus. Sed felis elit, elementum vitae vestibulum id, malesuada
              vel leo.
            </p>
          </div>

          <div className="slide">
            <div className="img_container">
              <img src={PizzaImg} alt="" />
            </div>
            <h1 className="title_slide">Pizza Americana</h1>
            <span className="price_slide">S/.30.00</span>
            <p className="description_slide">
              Curabitur rutrum erat eu tincidunt bibendum. Sed sollicitudin
              tempus nisl a porta. Sed euismod varius justo, non venenatis
              lacus. Sed felis elit, elementum vitae vestibulum id, malesuada
              vel leo.
            </p>
          </div>

          <div className="slide">
            <div className="img_container">
              <img src={PizzaImg} alt="" />
            </div>
            <h1 className="title_slide">Pizza Americana 2</h1>
            <span className="price_slide">S/.30.00</span>
            <p className="description_slide">
              Curabitur rutrum erat eu tincidunt bibendum. Sed sollicitudin
              tempus nisl a porta. Sed euismod varius justo, non venenatis
              lacus. Sed felis elit, elementum vitae vestibulum id, malesuada
              vel leo.
            </p>
          </div>

          <div className="slide">
            <div className="img_container">
              <img src={PizzaImg} alt="" />
            </div>
            <h1 className="title_slide">Pizza Americana 3</h1>
            <span className="price_slide">S/.30.00</span>
            <p className="description_slide">
              Curabitur rutrum erat eu tincidunt bibendum. Sed sollicitudin
              tempus nisl a porta. Sed euismod varius justo, non venenatis
              lacus. Sed felis elit, elementum vitae vestibulum id, malesuada
              vel leo.
            </p>
          </div>

          <div className="slide_first">
            <div className="img_container">
              <img src={PizzaImg} alt="" />
            </div>
            <h1 className="title_slide">Pizza Americana</h1>
            <span className="price_slide">S/.30.00</span>
            <p className="description_slide">
              Curabitur rutrum erat eu tincidunt bibendum. Sed sollicitudin
              tempus nisl a porta. Sed euismod varius justo, non venenatis
              lacus. Sed felis elit, elementum vitae vestibulum id, malesuada
              vel leo.
            </p>
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="btn_left" onClick={changeSlideLeft}>
          <ArrowSvg />
        </button>
        <button className="btn_rigth" onClick={changeSlideRight}>
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
};
