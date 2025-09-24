import { createAction, props } from "@ngrx/store";

export const loadTodos = createAction('[Todo] load Tools');
export const loadTodosSuccess = createAction('[Todo] loadTodos success', props<{todos:any[]}>());
export const loadTodosFailure = createAction('[Todo] load loadTodosure', props<{error:any}>());

export const createTodos = createAction('[Todo] Create Tools', props<{todo:any}>());
export const createTodosSuccess = createAction('[Todo] Create success', props<{todo:any}>());
export const createTodosFailure = createAction('[Todo] Create failure', props<{error:any}>());


export const updateTodos = createAction('[Todo] Update Tools', props<{id:number, todo:any}>());
export const updateTodosSuccess = createAction('[Todo] Update success', props<{todo:any}>());
export const updateTodosFailure = createAction('[Todo] Update failure', props<{error:any}>());

export const deleteTodos = createAction('[Todo] Delete Tools' , props<{id:number}>());    
export const deleteTodosSuccess = createAction('[Todo] Delete success', props<{id:number}>());   
export const deleteTodosFailure = createAction('[Todo] Delete failure', props<{error:any}>());