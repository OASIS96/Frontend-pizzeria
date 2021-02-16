import React, { useEffect, useRef } from "react";
import { AboutComponent } from "./components/about/about.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ContactComponent } from "./components/contact/contact.component";
import { MenuComponent } from "./components/menu/menu.component";
import { SliderComponent } from "./components/slider/slider.component";
import BG from "../../assets/bg.jpg";

import "./home.styles.scss";
import { FooterComponent } from "./components/footer/footer.component";

const HomePage = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home_p_c">
      <BannerComponent
        contactRef={contactRef}
        menuRef={menuRef}
        aboutRef={aboutRef}
      />
      <AboutComponent aboutRef={aboutRef}/>
      <SliderComponent />
      <div
        className="container_home_page"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <MenuComponent menuRef={menuRef}/>
        <ContactComponent contactRef={contactRef} />
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
