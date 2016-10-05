const initialState = {
  count: 1,
  clase: 'positive'
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {
        count: state.count + 1,
        clase: 'positive'
      }
    case 'SUBTRACT_ONE':
      return {
        count: state.count - 1,
        clase: 'negative'
      }

    default:
      return state
  }
}

export default counter
