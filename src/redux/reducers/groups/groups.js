
const initialState = {
    arrayGroups: [],
  };
  export function Groups(state = initialState, action) {
    switch (action.type) {
      case "ALL_GROUPS":
        return {
          ...state,
          arrayGroups: [...action.payload],
        };
      default:
        return state;
    }
  }