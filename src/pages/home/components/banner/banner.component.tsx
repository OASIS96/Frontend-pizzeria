import React, { useRef } from 'react';
import './banner.component.scss';
import bgBanner from '../../../../assets/banner.jpg';
import MenuSvg from '../../../../assets/menu.svg';

export const BannerComponent = () => {

  const menuRef = useRef<HTMLUListElement>(null);

  const openMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    menuRef.current?.classList.toggle('open');
  }
    return (
      <div
        className="banner_c_c"
        style={{ backgroundImage: `url('${bgBanner}')` }}
      >
        <header className="header">
          <h1 className="logo">Pizzeria</h1>
          <button className="button_menu" onClick={openMenu}>
            <MenuSvg />
          </button>
          <ul className="menu" ref={menuRef}>
            <div className="header_menu">
              <h1>Pizzeria</h1>
            </div>
            <li className="menu_item">Inicio</li>
            <li className="menu_item">Acerca de</li>
            <li className="menu_item">Productos</li>
            <li className="menu_item">Contacto</li>
          </ul>
        </header>
        <div className="banner_content">
          <h1 className="title_banner">Obtenla mientras esta caliente</h1>
          <p className="description_banner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            gravida nec nisl id laoreet. Sed egestas est ac feugiat fringilla.{" "}
          </p>
          <button className="button_banner">CONTACTANOS</button>
        </div>
      </div>
    );
}
