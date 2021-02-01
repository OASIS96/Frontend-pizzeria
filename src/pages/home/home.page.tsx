import React from "react";
import { AboutComponent } from "./components/about/about.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ContactComponent } from "./components/contact/contact.component";
import { MenuComponent } from "./components/menu/menu.component";
import { SliderComponent } from "./components/slider/slider.component";
import BG from "../../assets/Image-about.jpg";

import "./home.styles.scss";

export const HomePage = () => {
  return (
    <div className="home_p_c">
      <BannerComponent />
      <AboutComponent />
      <SliderComponent />
      <div className="container_home_page" style={{ backgroundImage: `url(${BG})` }}>
        <MenuComponent />
        <ContactComponent />
      </div>
    </div>
  );
};
