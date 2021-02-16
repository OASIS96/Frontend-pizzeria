import React from "react";
import "./menu.component.scss";
import Pizza1 from "../../../../assets/p-1 1.png";
import Pizza2 from "../../../../assets/p-2 1.png";
import Pizza3 from "../../../../assets/p-3 1.png";
import Pizza4 from "../../../../assets/p-4 1.png";
import { MenuI } from "../../../../models/menu.model";


export const MenuComponent = ({menuRef}:MenuI) => {
  return (
    <div className="menu_c_c" ref={menuRef}>
      <h1 className="title_menu">Nuestras Pizzas</h1>
      <div className="cards_c">
        <div className="card">
          <div className="img_c">
            <img src={Pizza1} alt="" />
          </div>
          <h2 className="title_card">Americana</h2>
          <p className="descr_card">
            Donec consequat vestibulum arcu, ultrices vestibulum tellus
            sollicitudin vitae. Proin rhoncus mollis imperdiet. Aliquam et lacus
            vestibulum, maximus arcu ac, vehicula neque.
          </p>
        </div>

        <div className="card">
          <div className="img_c">
            <img src={Pizza2} alt="" />
          </div>
          <h2 className="title_card">Americana</h2>
          <p className="descr_card">
            Donec consequat vestibulum arcu, ultrices vestibulum tellus
            sollicitudin vitae. Proin rhoncus mollis imperdiet. Aliquam et lacus
            vestibulum, maximus arcu ac, vehicula neque.
          </p>
        </div>

        <div className="card">
          <div className="img_c">
            <img src={Pizza3} alt="" />
          </div>
          <h2 className="title_card">Americana</h2>
          <p className="descr_card">
            Donec consequat vestibulum arcu, ultrices vestibulum tellus
            sollicitudin vitae. Proin rhoncus mollis imperdiet. Aliquam et lacus
            vestibulum, maximus arcu ac, vehicula neque.
          </p>
        </div>

        <div className="card">
          <div className="img_c">
            <img src={Pizza4} alt="" />
          </div>
          <h2 className="title_card">Americana</h2>
          <p className="descr_card">
            Donec consequat vestibulum arcu, ultrices vestibulum tellus
            sollicitudin vitae. Proin rhoncus mollis imperdiet. Aliquam et lacus
            vestibulum, maximus arcu ac, vehicula neque.
          </p>
        </div>
      </div>

      <button className="btn_load_more">CARGAR MAS</button>
    </div>
  );
};
