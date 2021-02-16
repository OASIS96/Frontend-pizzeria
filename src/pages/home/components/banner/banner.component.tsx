import React, { useEffect, useRef } from "react";
import "./banner.component.scss";
import bgBanner from "../../../../assets/banner.jpg";
import MenuSvg from "../../../../assets/menu.svg";
import { BannerI } from "../../../../models/banner.model";

export const BannerComponent = ({ contactRef,aboutRef,menuRef }: BannerI) => {
  const navRef = useRef<HTMLUListElement>(null);
  const buttonMenu = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const openMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    navRef.current?.classList.toggle("open");

    document.addEventListener("click", closeMenu);
  };

  const closeMenu = (e: MouseEvent) => {
    if (
      e.target !== navRef.current &&
      e.target !== navRef.current?.children[0] &&
      e.target !== buttonMenu.current &&
      e.target !== buttonMenu.current?.children[0] &&
      e.target !== buttonMenu.current?.children[0].children[0] &&
      e.target !== buttonMenu.current?.children[0].children[1] &&
      e.target !== buttonMenu.current?.children[0].children[2]
    ) {
      navRef.current?.classList.remove("open");
      document.removeEventListener("click", closeMenu);
    }
  };

  const goToContact = () => {
    contactRef.current?.scrollIntoView();
  };

  const goToAbout = () => {
    aboutRef.current?.scrollIntoView();
  };

  const goToMenu = () => {
    console.log(menuRef.current)
    menuRef.current?.scrollIntoView()
    
  };

  const goToStart = () => {
    document.documentElement.scrollTo({ top: 0 });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        headerRef.current?.classList.add("down");
      } else {
        headerRef.current?.classList.remove("down");
      }
    });

    return;
  }, []);
  return (
    <div
      className="banner_c_c"
      style={{ backgroundImage: `url('${bgBanner}')` }}
    >
      <header className="header" ref={headerRef}>
        <h1 className="logo">Pizzeria</h1>
        <button className="button_menu" onClick={openMenu} ref={buttonMenu}>
          <MenuSvg />
        </button>
        <ul className="menu" ref={navRef}>
          <div className="header_menu">Pizzeria</div>
          <li className="menu_item" onClick={goToStart}>
            Inicio
          </li>
          <li className="menu_item" onClick={goToAbout}>Acerca de</li>
          <li className="menu_item" onClick={goToMenu}>Productos</li>
          <li className="menu_item" onClick={goToContact}>Contacto</li>
        </ul>
      </header>
      <div className="banner_content">
        <h1 className="title_banner">Obtenla mientras esta caliente</h1>
        <p className="description_banner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          gravida nec nisl id laoreet. Sed egestas est ac feugiat fringilla.{" "}
        </p>
        <button className="button_banner" onClick={goToContact}>
          CONTACTANOS
        </button>
      </div>
    </div>
  );
};
