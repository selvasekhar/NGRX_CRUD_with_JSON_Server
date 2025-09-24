import { Action, createReducer, on } from '@ngrx/store';
import { createTodosSuccess, deleteTodosSuccess, loadTodosSuccess, updateTodosSuccess } from './crud.actions';

export interface TodoState {
  todos: any;
}

export const initialState: TodoState = {
  todos: [],
};

export const todoreducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state: TodoState, { todos }) => ({...state,todos})),
  on(createTodosSuccess, (state: TodoState, { todo }) => ({...state,todos : [...state.todos,todo]})),
  on(updateTodosSuccess, (state: TodoState, { todo }) => ({...state,todos : state.todos.map((t: { id: any; })=> t.id === todo.id ? todo:t)})),
  on(deleteTodosSuccess, (state: TodoState, { id }) => ({...state,todos : state.todos.filter((t: { id: any; })=>t.id !== id)})),
  
);


// export function reducer(state= initialState, action:Action): TodoState{
//     return todoreducer(state, action)
// }