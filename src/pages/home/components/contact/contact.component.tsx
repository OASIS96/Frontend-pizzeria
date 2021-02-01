import React from "react";
import "./contact.component.scss";

export const ContactComponent = () => {
  return (
    <div className="contact_c_c">
      <h1 className="title_contact">Contactanos</h1>
      <div className="map_c">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d478.49392163092983!2d-71.52338144349821!3d-16.376439317492245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1612138365631!5m2!1ses-419!2spe"
          width="800"
          height="600"
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </div>

      <div className="data_c">
        <h1 className="title_data">Sientete libre de Contactarnos</h1>
        <p className="descrp_data">
          Aenean vitae molestie dui. Morbi commodo maximus eros in ullamcorper.
          Quisque maximus orci blandit erat molestie, quis porta lorem interdum.
          Nam vel purus arcu. Nulla et nisi et nunc tristique viverra quis vel
          risus. Suspendisse massa libero, dictum vel congue eu, faucibus vitae
          nunc. Mauris rutrum erat in leo consequat laoreet.{" "}
        </p>
        <div className="information">
          <h2 className="section_title">Datos de Contacto</h2>
          <div className="line_inf">
            <span>Telefono</span>
            <span>999 - 999 - 999</span>
          </div>

          <div className="line_inf">
            <span>Correo</span>
            <span>correo@correo.com</span>
          </div>

          <h2 className="section_title">Direccion</h2>
          <h3 className="district">Alto Selva alegre</h3>
          <span className="street">Cooperativa Villa el Sol M-9</span>

          <h2 className="section_title">Horario de Atencion</h2>
          <div className="line_inf">
            <span>Lunes a Aviernes</span>
            <span>12:00 a 19:00</span>
          </div>
          <div className="line_inf">
            <span>Sabados a Domingos</span>
            <span>13:00 a 19:00</span>
          </div>
        </div>

        <form action="" className="form">
          <input type="text" placeholder="Nombre"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Asunto"/>
          <textarea placeholder="Mensaje"/>
          <button type="button" className="btn_send">Enviar</button>
        </form>
      </div>
    </div>
  );
};
