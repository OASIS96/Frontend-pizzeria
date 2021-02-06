import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginUser } from "../../../../models/formLogin.model";
import SnackBar from "@material-ui/core/Snackbar";
import "./form.component.scss";
import { variables } from "../../../../environments/variables";
import { useHistory } from "react-router-dom";

const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const FormComponent = () => {
  const { register, handleSubmit, errors } = useForm({defaultValues:{
    username: 'diegorrc147@gmail.com',
    password: '12345678'
  }});
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const loginUser = async (user: LoginUser) => {
    const { data } = await axios.post(
      `${variables.BACKED_URI}/api/login-user`,
      user
    );
    if (!data.token) {
      setMessage(data.status);
      return setOpen(true);
    }
    localStorage.setItem("pizto1",data.token);
    history.push("/admin");
    return;
  };

  return (
    <div className="form_c_c">
      <h1 className="title_form">Login</h1>
      <form className="form">
        <div className="input_c">
          <input
            type="text"
            ref={register({
              required: true,
              pattern: pattern,
            })}
            name="username"
            placeholder="Usuario"
            autoComplete="off"
          />
          {errors.username?.type === "required" ? (
            <p className="message_error fadeIn">Ingrese un usuario</p>
          ) : errors.username?.type === "pattern" ? (
            <p className="message_error fadeIn">El usuario es invalido</p>
          ) : null}
        </div>
        <div className="input_c">
          <input
            type="password"
            placeholder="Contraseña"
            autoComplete="off"
            name="password"
            ref={register({
              required: true,
              minLength: 8,
            })}
          />
          {errors.password?.type === "required" ? (
            <p className="message_error fadeIn">Ingrese una contraseña</p>
          ) : errors.password?.type === "minLength" ? (
            <p className="message_error fadeIn">La contraseña es muy corta</p>
          ) : null}
        </div>
        <button className="button" onClick={handleSubmit(loginUser)}>
          Ingresar
        </button>
      </form>

      <SnackBar
        open={open}
        className="snackbar"
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </div>
  );
};

export default FormComponent;
