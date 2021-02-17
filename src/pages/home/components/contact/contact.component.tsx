import React from "react";
import { useForm } from "react-hook-form";
import { ContactI } from "../../../../models/contact.model";
import "./contact.component.scss";

export const ContactComponent = ({ contactRef }: ContactI) => {
  const { register, handleSubmit, errors } = useForm();

  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const sendMessage = (data: any) => {
    console.log(data);
  };

  return (
    <div className="contact_c_c" ref={contactRef}>
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
          <div className="input_c">
            <input
              type="text"
              name="name"
              autoComplete="off"
              className={errors.name?.type === "required" ? "error" : ""}
              placeholder="Nombre"
              ref={register({
                required: true,
              })}
            />
            {errors.name?.type === "required" ? (
              <p className="message_error visible fadeIn">
                EL nombre es requerido
              </p>
            ) : null}
          </div>
          <div className="input_c">
            <input
              type="text"
              name="email"
              autoComplete="off"
              className={
                errors.email?.type === "required"
                  ? "error"
                  : errors.email?.type === "pattern"
                  ? "error"
                  : ""
              }
              placeholder="Email"
              ref={register({
                required: true,
                pattern: pattern,
              })}
            />
            {errors.email?.type === "required" ? (
              <p className="message_error visible fadeIn">
                EL email es requerido
              </p>
            ) : errors.email?.type === "pattern" ? (
              <p className="message_error visible fadeIn">
                EL email es invalido
              </p>
            ) : null}
          </div>
          <div className="input_c">
            <input
              type="text"
              name="subject"
              autoComplete="off"
              className={errors.subject?.type === "required" ? "error" : ""}
              placeholder="Asunto"
              ref={register({
                required: true,
              })}
            />
            {errors.subject?.type === "required" ? (
              <p className="message_error visible fadeIn">
                EL asunto es requerido
              </p>
            ) : null}
          </div>
          <div className="textarea_c">
            <textarea
              name="message"
              placeholder="Mensaje"
              autoComplete="off"
              className={errors.message?.type === "required" ? "error" : ""}
              ref={register({
                required: true,
              })}
            />
            {errors.message?.type === "required" ? (
              <p className="message_error visible fadeIn">
                EL mensaje es requerido
              </p>
            ) : null}
          </div>
          <button
            type="button"
            className="btn_send"
            onClick={handleSubmit(sendMessage)}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
