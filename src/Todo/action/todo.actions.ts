import axios from "axios";
import { GET_TODOS, SET_LOADING } from "./actions.types";
import { Dispatch } from "redux";
import { baseURL } from "../../constant";
import TodoModel from "../model/todo-model";

export const fetchTodos = async (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    const res = await axios.get(baseURL + `_page=${page}`);
    const data: TodoModel = await res.data;
    dispatch({
      type: GET_TODOS,
      payload: data
    });
  };
};

export const setLoading = (): { type: string } => ({ type: SET_LOADING });
