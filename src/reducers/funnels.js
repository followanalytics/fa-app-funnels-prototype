export const ADD_STEP = 'steps/ADD_STEP'
export const DELETE_STEP = 'steps/DELETE_STEP'

const initialState = {
  steps: ['step_1'],
  explorationEnabled: true,
  selected: -1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STEP:
      return {
        ...state,
        steps: [
          ...state.steps,
          action.step
        ]
      }

    case DELETE_STEP:
      return {
        ...state,
        steps: state.steps.filter((el, index) => {
          return index !== action.id
        })
      }

    default:
      return state
  }
}

export const addStep = (step = ['new step']) => {
  return dispatch => {
    dispatch({
      type: ADD_STEP,
      step: step
    })
  }
}

export const deleteStep = (id) => {
  return dispatch => {
    dispatch({
      type: DELETE_STEP,
      id: id
    })
  }
}

