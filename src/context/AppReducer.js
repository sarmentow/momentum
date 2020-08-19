export default function appReducer(state, { type, payload }) {
  switch (type) {
    case "SET_CURRENT_TASK":
      return { ...state, currentTask: payload };
    case "SET_FETCHED_TASKS":
      return { ...state, tasks: [...payload] };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, payload] };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== payload._id),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id === payload._id) {
            return payload;
          }
          return task;
        }),
      };
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: payload,
      };
    case "SET_IS_DARK":
      return {
        ...state,
        isDark: payload,
      };
    default:
      return state;
  }
}
