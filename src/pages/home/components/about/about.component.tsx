import React from 'react';
import Icon1 from '../../../../assets/Icon-clock.svg';
import Icon2 from '../../../../assets/Icon-nature.svg';
import Icon3 from '../../../../assets/Icon-pizza.svg';
import AboutBg from '../../../../assets/Image-about.jpg';
import { AboutI } from '../../../../models/about.model';
import './about.component.scss';

export const AboutComponent = ({aboutRef}:AboutI) => {
    return (
      <div className="about_c_c" style={{backgroundImage: `url(${AboutBg})`}} ref={aboutRef}>
        <h1 className="title_about">Nuestras pizzas hablan por nosotros</h1>
        <p className="descrip_about">
          Praesent ipsum mauris, rutrum et dapibus ac, pulvinar sagittis lacus.
          Etiam laoreet, tellus at commodo porttitor, arcu mauris tincidunt
          massa, sed tempor massa metus quis sapien.{" "}
        </p>
        <div className="cards_container">
          <div className="card">
            <Icon1 />
            <h2 className="title_card">Rapida Entrega</h2>
            <p className="description_card">
              Praesent ipsum mauris, rutrum et dapibus ac, pulvinar sagittis
              lacus. Etiam laoreet, tellus at commodo porttitor, arcu mauris
              tincidunt massa, sed tempor massa metus quis sapien.{" "}
            </p>
          </div>

          <div className="card">
            <Icon2 />
            <h2 className="title_card">Rapida Entrega</h2>
            <p className="description_card">
              Praesent ipsum mauris, rutrum et dapibus ac, pulvinar sagittis
              lacus. Etiam laoreet, tellus at commodo porttitor, arcu mauris
              tincidunt massa, sed tempor massa metus quis sapien.{" "}
            </p>
          </div>

          <div className="card">
            <Icon3 />
            <h2 className="title_card">Rapida Entrega</h2>
            <p className="description_card">
              Praesent ipsum mauris, rutrum et dapibus ac, pulvinar sagittis
              lacus. Etiam laoreet, tellus at commodo porttitor, arcu mauris
              tincidunt massa, sed tempor massa metus quis sapien.{" "}
            </p>
          </div>
        </div>
      </div>
    );
}
