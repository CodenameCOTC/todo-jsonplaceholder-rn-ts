import { GET_TODOS, SET_LOADING } from "../action/actions.types";
import TodoModel from "../model/todo-model";

interface TodoState {
  todos: TodoModel[];
  isLoading: boolean;
}

interface actionInterface {
  type: string;
  payload: TodoModel[];
}

const initialState: TodoState = {
  todos: [],
  isLoading: false
};

export default function(
  state = initialState,
  action: actionInterface
): TodoState {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
        isLoading: false
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
