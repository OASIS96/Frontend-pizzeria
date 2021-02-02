import React from 'react';
import './footer.component.scss';
import IconWhats from '../../../../assets/whatsapp 1.svg';
import IconFace from '../../../../assets/facebook 1.svg';
import IconTwitter from '../../../../assets/twitter 1.svg';
import IconInstagram from '../../../../assets/instagram 1.svg';

export const FooterComponent = () => {
    return (
        <div className="footer_c_c">
            <h1 className="logo">Pizzeria</h1>
            <div className="social_c">
                <a href=""><IconFace /></a>
                <a href=""><IconTwitter /></a>
                <a href=""><IconInstagram /></a>
                <a href=""><IconWhats /></a>
            </div>
            <div className="menu_c">
                <span>INICIO</span>
                <span>ACERCA DE</span>
                <span>PRODUCTOS</span>
                <span>CONTACTO</span>
            </div>
            <p className="rigths">2021 Todos los derechos reservados. Diseñado por <a href="">_OASIS_ </a></p>
        </div>
    )
}
