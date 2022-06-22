import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getTasks,
  updateImportance,
  updateQuery,
} from "../../store/actions/taskActions";
import { connect } from "react-redux";
import { LoaderContainer, Wrapper } from "./Styles.js";
import Card from "../Card/Card";
import debounce from "lodash.debounce";
import Loader from "../Loader/Loader";
import { useResize } from "../Hooks/useResize";
import { Select } from "../../GlobalStyles/GlobalStyles";

const TasksList = ({
  tasks,
  filteredTasks,
  loading,
  error,
  importance,
  newTask,
}) => {
  const [value, setValue] = useState("ALL");
  const [search, setSearch] = useState("");
  const [list, setList] = useState(null);
  const [renderList, setRenderList] = useState(null);
  const { isPhone } = useResize()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(value === "ME" ? "me" : ""));
  }, [dispatch, value]);

  useEffect(() => {
    if (filteredTasks?.length) {
      setList(filteredTasks);
      setRenderList(filteredTasks);
    }
  }, [filteredTasks]);


  const renderColumnCards = (value) =>
    renderList?.filter((task) => task.status === value);

  const handleSearch = debounce((query) => {
    setSearch(query);
   
    dispatch(updateQuery(query, tasks));
  }, 100);

  if (error) return <div>Hay un error</div>;
 

  return (
    <Wrapper>
      <div>
        <div>
          <h1>Mis tareas</h1>
          <div>
            <input
              type="text"
              placeholder="Buscar tareas..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Select
              onChange={(e) =>
                dispatch(updateImportance(e.target.value, tasks))
              }
              name="importance"
            >
              <option value="">Filtrar por prioridad</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </Select>
          </div>
        </div>
        {renderList && (
          <div>
            <div>
              <h3>Nuevas</h3>
              <div>
                {loading ? (
                  <LoaderContainer>
                    <Loader />
                  </LoaderContainer>
                ) : !renderColumnCards("NEW").length ? (
                  <div>No hay tareas...</div>
                ) : (
                  renderColumnCards("NEW").map((task, index) => (
                    <Card task={task} key={index} />
                  ))
                )}
              </div>
            </div>
            <div>
              <h3>En progreso</h3>
              <div>
                {loading ? (
                  <Loader />
                ) : !renderColumnCards("IN PROGRESS").length ? (
                  <div>No hay tareas...</div>
                ) : (
                  renderColumnCards("IN PROGRESS").map((task, index) => (
                    <Card task={task} key={index} />
                  ))
                )}
              </div>
            </div>
            <div>
              <h3>Finalizadas</h3>
              <div>
                {loading ? (
                  <Loader />
                ) : !renderColumnCards("FINISHED").length ? (
                  <div>No hay tareas...</div>
                ) : (
                  renderColumnCards("FINISHED").map((task, index) => (
                    <Card task={task} key={index} />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  filteredTasks: state.tasks.filteredTasks,
  loading: state.tasks.loading,
  error: state.tasks.error,
  importance: state.tasks.importance,
  newTask: state.tasks.newTask,
});

export default connect(mapStateToProps)(TasksList);
