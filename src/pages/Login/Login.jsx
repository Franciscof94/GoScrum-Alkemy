import { useFormik } from "formik";
import React from "react";
import "./Styles.js";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { swal } from "../../utils/Swal";
import { Wrapper } from "./Styles.js";
import { Button } from "../../share/Button.js";
const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const Login = () => {
  const required = "* Campo obligatorio";
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(required),
      password: Yup.string().required(required),
    }),
    onSubmit: () => {
  
      fetch(
        'https://goscrum-api.alkemy.org/auth/login',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: values.userName,
            password: values.password,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status_code === 200) {
            localStorage.setItem("token", data?.result.token);
            localStorage.setItem("userName", data?.result.user.userName);
            navigate("/");
          } else {
            swal();
          }
        });
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  return (
    <Wrapper className="root">
      <form className="formContainer" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>

        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={values.userName}
            onBlur={handleBlur}
            onChange={handleChange}
            name="userName"
          />
          {errors.userName && touched.userName && (
            <small>{errors.userName}</small>
          )}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            name="password"
          />
          {errors.password && touched.password && (
            <small>{errors.password}</small>
          )}
        </div>
        <Button variant="primary" type="submit">Ingresar</Button>
        <span className="toRegister">No tienes una cuenta?<Link to="/register">Registrate</Link></span>
      </form>
    </Wrapper>
  );
};

export default Login;
