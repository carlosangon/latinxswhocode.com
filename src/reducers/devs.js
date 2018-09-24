const devsReducerDefaultState = [];

export default (state = devsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DEVS':
      return action.devs;
    default:
      return state;
  }
};
