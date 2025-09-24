import { createSelector } from '@ngrx/store';

export const selectTodosState = (state: any) => state.todos;

export const selectTodos = createSelector(selectTodosState, (state: any) => state.todos);
