
const initialState = {
    arrayStudents: [],
  };
  export function Students(state = initialState, action) {
    switch (action.type) {
      case "ALL_STUDENTS":
        return {
          ...state,
          arrayStudents: [...action.payload],
        };
      default:
        return state;
    }
  }