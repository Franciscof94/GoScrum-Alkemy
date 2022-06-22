import React from "react";
import { Wrapper } from "./Styles";
import { IoMdCloseCircle } from "react-icons/io";
import { connect } from "react-redux";
import { deleteTask, taskEdit } from "../../store/actions/taskActions";
import { truncate, upperCase } from "../../utils/Helpers";


const Card = ({ task, deleteTask, taskEdit }) => {
  const datetime = new Date(task.createdAt).toLocaleString();

  return (
    <>
      {
        <Wrapper importance={task.importance} status={task.status}>
          <div>
            <div>
              <h3>{upperCase(truncate(task.title, 11))}</h3>
              <div onClick={() => deleteTask(task._id)}>
                <IoMdCloseCircle fontSize={24} color="#b93939" />
              </div>
            </div>
            <div>
              <div>
                <span>Descripción</span>
                <div>{datetime}</div>
              </div>
              <div>
                <p>{upperCase(truncate(task.description, 70))}</p>
              </div>
              <div>
                <div>
                  <span>Prioridad</span>
                  <div>{task.importance}</div>
                </div>
                <div>
                  <span>Estado</span>
                  <div onClick={() => taskEdit(task)}>{task.status}</div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      }
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
    taskEdit: (task) => dispatch(taskEdit(task)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
