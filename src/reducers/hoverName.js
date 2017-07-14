const hoverName = (state = 'Turd Ferguson', action) => {
  switch (action.type) {
    case 'SET_HOVER_NAME':
      return action.name
    default:
      return state
  }
}

export default hoverName
