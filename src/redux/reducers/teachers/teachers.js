
const initialState = {
    arrayTeachers: [],
  };
  export function Teachers(state = initialState, action) {
    switch (action.type) {
      case "ALL_TEACHERS":
        return {
          ...state,
          arrayTeachers: [...action.payload],
        };
      default:
        return state;
    }
  }