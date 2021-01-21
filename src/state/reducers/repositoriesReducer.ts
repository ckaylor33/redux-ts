import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'

interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

const inititalState = {
  loading: false,
  error: null,
  data: [],
}

const reducer = (
  state: RepositoriesState = inititalState,
  action: Action
): RepositoriesState => {
  // switch statements act as type guards
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
