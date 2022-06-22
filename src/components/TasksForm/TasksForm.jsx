import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { toast } from "react-toastify";
import { Wrapper } from "./Styles";
import { Button } from "../../share/Button";
import { connect, useDispatch } from "react-redux";
import { addNewTask } from "../../store/actions/taskActions";
import { Select } from "../../GlobalStyles/GlobalStyles";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const TasksForm = () => {
  const dispatch = useDispatch();
  const required = "* Campo obligatorio";

  const formik = useFormik({
    initialValues: {
      title: "",
      status: "",
      importance: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(6, "La cantidad mínima de caracteres es 6")
        .required(required),
      status: Yup.string().required(required),
      importance: Yup.string().required(required),
      description: Yup.string().required(required),
    }),
    onSubmit: () => {
      fetch(`${API_ENDPOINT}task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ task: values }),
      })
        .then((response) => response.json())
        .then((data) => {;
          resetForm();
          toast("Tu tarea se creo correctamente");
        });
    },
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    resetForm,
  } = formik;

  return (
    <Wrapper>
      <h1>Crear tarea</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                type="text"
                placeholder="Título"
                value={values.title}
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title && <small>{errors.title}</small>}
            </div>
            <div>
              <Select
                name="status"
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Seleccionar estado</option>
                <option value="NEW">Nueva</option>
                <option value="IN PROGRESS">En progreso</option>
                <option value="FINISHED">Finalizada</option>
              </Select>
              {errors.status && touched.status && (
                <small>{errors.status}</small>
              )}
            </div>
            <div>
              <Select
                name="importance"
                value={values.importance}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Seleccionar prioridad</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </Select>
              {errors.importance && touched.importance && (
                <small>{errors.importance}</small>
              )}
            </div>
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Descripción"
              value={values.description}
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.description && touched.description && (
              <small>{errors.description}</small>
            )}
          </div>
          <Button variant="primary" type="submit">
            Crear
          </Button>
        </form>
      </div>
    </Wrapper>
  );
};

export default TasksForm;
