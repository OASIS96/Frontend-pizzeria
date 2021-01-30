import React, { useEffect, useRef, useState } from 'react';
import PizzaImg from '../.,/../../../../assets/Preview-slider.png';
import BGImage from '../.,/../../../../assets/Background-slider.jpg';
import ArrowSvg from '../.,/../../../../assets/arrow.svg';
import './slider.component.scss';

export const SliderComponent = () => {

  const sliderRef = useRef<HTMLDivElement>(null);
  let indexSLide = 0;
  const [slides_number, setslides_number] = useState(0)

  const changeSlideLeft = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(indexSLide < 1) {
      indexSLide = sliderRef.current?.children.length as number - 1;
      for(let i=0;i< slides_number ;i++) {
        sliderRef.current?.children[i].classList.remove('active');
      }
      sliderRef.current?.children[indexSLide].classList.add('active');
    }else {
      for(let i=0;i< slides_number ;i++) {
        sliderRef.current?.children[i].classList.remove('active');
      }
      indexSLide--;
      sliderRef.current?.children[indexSLide].classList.add('active');
    }
    
  }

  const changeSlideRight = () => {
    if(indexSLide > slides_number - 2) {
      
      for(let i=0;i< slides_number ;i++) {
        sliderRef.current?.children[i].classList.remove('active');
      }
      indexSLide = 0;
      sliderRef.current?.children[indexSLide].classList.add('active');
    }else {
      for(let i=0;i< slides_number ;i++) {
        sliderRef.current?.children[i].classList.remove('active');
      }
      indexSLide++;
      sliderRef.current?.children[indexSLide].classList.add('active');
    }
  }

  useEffect(()=> {
    sliderRef.current?.children[indexSLide].classList.add('active');
    setslides_number(sliderRef.current?.children.length as number);
  },[])

    return (
      <div
        className="slider_c_c"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="slides_container" ref={sliderRef}>
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
        </div>
        <div className="controls">
          <button className="btn_left" onClick={changeSlideLeft}><ArrowSvg/></button>
          <button className="btn_rigth" onClick={changeSlideRight}><ArrowSvg/></button>
        </div>
      </div>
    );
}
