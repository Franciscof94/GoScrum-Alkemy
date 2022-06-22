import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../Login/Styles";
import { Link } from 'react-router-dom'
import { Button } from "../../share/Button";
import { Select } from "../../GlobalStyles/GlobalStyles";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}auth/data`)
      .then((response) => setData(response.data.result));
  }, []);

  const required = "* Campo obligatorio";

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      teamID: "",
      role: "",
      continent: "",
      region: "",
      switch: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(required),
      password: Yup.string().required(required),
      email: Yup.string().email("Debe ser un email válido").required(required),
      role: Yup.string().required(required),
      continent: Yup.string().required(required),
      region: Yup.string().required(required),
    }),
    onSubmit: () => {
      const teamID = values.teamID ? values.teamID : uuidv4();
      fetch(`${API_ENDPOINT}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            userName: values.userName,
            password: values.password,
            email: values.email,
            teamID,
            role: values.role,
            continent: values.continent,
            region: values.region,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/registered", {
            state: { data: data?.result.user.teamID },
          });
        });
    },
  });

  const handleChangeContinent = (value) => {
    setFieldValue("continent", value);
    value !== "America" && setFieldValue("region", "Otro");
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = formik;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            value={values.userName}
            onBlur={handleBlur}
            onChange={handleChange}
            name="userName"
            placeholder="Nombre de usuario"
          />
          {errors.userName && touched.userName && (
            <small>{errors.userName}</small>
          )}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            name="password"
            placeholder="Contraseña"
          />
          {errors.password && touched.password && (
            <small>{errors.password}</small>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          {errors.email && touched.email && <small>{errors.email}</small>}
        </div>
        <div>
        <FormControlLabel
          control={
            <Switch
              value={values.switch}
              onChange={() =>
                formik.setFieldValue("switch", !formik.values.switch)
              }
              name="switch"
              color="secondary"
            />
          }
          label="Pertenecés a un equipo ya creado"
        />
        </div>
        {values.switch && (
          <div>
            <label>Por favor, introduce el identificador de equipo</label>
            <input
              type="text"
              value={values.teamID}
              onBlur={handleBlur}
              onChange={handleChange}
              name="teamID"
              placeholder="Team ID"
            />
          </div>
        )}
        <div>
          <label>Role</label>
          <Select
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
            name="role"
          >
            <option value="">Seleccionar role</option>
            {data?.Rol?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </Select>
          {errors.role && touched.role && <small>{errors.role}</small>}
        </div>
        <div>
          <label>Continente</label>
          <Select
            onChange={(e) => handleChangeContinent(e.currentTarget.value)}
            onBlur={handleBlur}
            name="continent"
            value={values.continent}
          >
            <option value="">Seleccionar contienent...</option>
            {data?.continente?.map((continent) => (
              <option value={continent} key={continent}>
                {continent}
              </option>
            ))}
          </Select>
          {errors.continent && touched.continent && (
            <small>{errors.continent}</small>
          )}
        </div>
        {values.continent === "America" && (
          <div>
            <label>Región</label>
            <Select
              onChange={handleChange}
              onBlur={handleBlur}
              name="region"
              value={values.region}
            >
              <option value="">Seleccionar región...</option>
              {data?.region?.map((region) => (
                <option name="region" value={region} key={region}>
                  {region}
                </option>
              ))}
            </Select>
            {errors.region && touched.region && <small>{errors.region}</small>}
          </div>
        )}
        <Button variant="primary" type="submit">Enviar</Button>
        <span className="toRegister">Ya tienes una cuenta?<Link to="/login">Ingresá</Link></span>
      </form>
    </Wrapper>
  );
};

export default Register;
