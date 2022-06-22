import {
  TASK_FAILURE,
  TASK_REQUEST,
  TASK_SUCCESS,
  UPDATE_IMPORTANCE,
  UPDATE_QUERY,
} from "../types";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const TasksRequest = () => ({
  type: TASK_REQUEST,
});

export const getTasks = (value) => (dispatch) => {
  dispatch(TasksRequest());
  fetch(`${API_ENDPOINT}task/${value}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(tasksSuccess(data.result));
    })
    .catch((error) => dispatch(tasksFailure(error)));
};

export const tasksSuccess = (value) => {
  return {
    type: TASK_SUCCESS,
    payload: value,
  };
};

export const tasksFailure = (value) => ({
  type: TASK_FAILURE,
  payload: value,
});

export const deleteTask = (id) => (dispatch) => {
  fetch(`${API_ENDPOINT}task/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch(getTasks("")))
    .catch((error) => dispatch(tasksFailure(error)));
};

export const taskEdit = (data) => (dispatch) => {
  const statusArray = ["NEW", "IN PROGRESS", "FINISHED"];

  const newStatusIndex =
    statusArray.indexOf(data.status) > 1
      ? 0
      : statusArray.indexOf(data.status) + 1;

  fetch(`${API_ENDPOINT}task/${data._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({
      task: {
        title: data.title,
        importance: data.importance,
        status: statusArray[newStatusIndex],
        description: data.description,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => dispatch(getTasks("")))
    .catch((error) => dispatch(tasksFailure(error)));
};

export const updateQuery = (query, tasks) => (dispatch) => {
  dispatch({
    type: UPDATE_QUERY,
    payload: !query
      ? tasks
      : tasks.filter((task) =>
          task.title.toLowerCase().startsWith(query.toLowerCase())
        ),
  });
};

export const updateImportance = (value, task) => (dispatch) => {
  dispatch({
    type: UPDATE_IMPORTANCE,
    payload: {
      importance: value,
      task:
        value === "" ? task : task.filter((task) => task.importance === value),
    },
  });
};
