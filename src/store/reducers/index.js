const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AddUser":
      return { ...state, users: [...state.users, action.payload] };
    case "ClearUsers":
      return { ...state, users: [] };
    default:
      return state;
  }
};
