import React, { useRef } from "react";
import "./header.component.scss";
import IconMenu from "@material-ui/icons/Menu";
import IconHome from "@material-ui/icons/HomeOutlined";
import IconSlide from "@material-ui/icons/Slideshow";
import IconBook from "@material-ui/icons/MenuBook";
import IconEmail from "@material-ui/icons/EmailOutlined";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const handleOpenNav = () => {
    navRef.current?.classList.add("visible");
  };

  const handleCloseNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === navRef.current) {
      navRef.current.classList.remove("visible");
    }
  };

  return (
    <div className="header_c_c">
      <IconButton onClick={handleOpenNav}>
        <IconMenu />
      </IconButton>
      <h1 className="logo">Pizzeria</h1>
      <button className="btn_avatar">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </button>
      <div className="nav_click_c" ref={navRef} onClick={handleCloseNav}>
        <nav className="nav">
          <h2 className="logo_nav">Pizzeria</h2>
          <ul className="menu">
            <NavLink
              to="/admin/dashboard"
              activeClassName="active"
              className="menu_item"
              onClick={() => navRef.current?.classList.remove("visible")}
            >
              <IconHome /> Dashboard
            </NavLink>
            <NavLink
              to="/admin/slider"
              activeClassName="active"
              className="menu_item"
              onClick={() => navRef.current?.classList.remove("visible")}
            >
              <IconSlide />
              Slider
            </NavLink>
            <NavLink
              to="/admin/menu"
              activeClassName="active"
              className="menu_item"
              onClick={() => navRef.current?.classList.remove("visible")}
            >
              <IconBook /> Menu
            </NavLink>
            <NavLink
              to="/admin/contact"
              activeClassName="active"
              className="menu_item"
              onClick={() => navRef.current?.classList.remove("visible")}
            >
              <IconEmail /> Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
