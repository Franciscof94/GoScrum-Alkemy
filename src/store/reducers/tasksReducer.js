import { TASK_FAILURE, TASK_REQUEST, TASK_SUCCESS, UPDATE_IMPORTANCE, UPDATE_QUERY } from "../types";

const initialState = {
  loading: "",
  tasks: [],
  error: "",
  importance: "",
  filteredTasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload, 
        filteredTasks: action.payload,
        error: "",
        loading: false
      };
    case TASK_FAILURE:
      return {
        error: action.payload,
        loading: false,
        tasks: [],
      };
    case UPDATE_IMPORTANCE:
      return {
        ...state,
        filteredTasks: action.payload.task,
        importance: action.payload.importance,
      }
    case UPDATE_QUERY:
      return {
        ...state,
        filteredTasks: action.payload
      }
    default:
      return state;
  }
};
export default tasksReducer;
