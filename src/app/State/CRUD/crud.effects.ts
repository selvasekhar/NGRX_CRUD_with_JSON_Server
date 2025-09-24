import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { masterservices } from '../../masters.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  createTodos,
  createTodosFailure,
  createTodosSuccess,
  deleteTodos,
  deleteTodosFailure,
  deleteTodosSuccess,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  updateTodos,
  updateTodosFailure,
  updateTodosSuccess,
} from './crud.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoEffects {
  actions$ = inject(Actions);
  private store = inject(Store);

  constructor(private todoservice: masterservices) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoservice.getTodos().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodos),
      mergeMap(({ todo }) =>
        this.todoservice.postTodods(todo).pipe(
          map((createdTodo) => {
            this.store.dispatch(loadTodos());
            return createTodosSuccess({ todo: createdTodo });
          }),
          catchError((error) => of(createTodosFailure({ error })))
        )
      )
    )
  );
  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodos),
      mergeMap(({ id, todo }) =>
        this.todoservice.putTodods(id, todo).pipe(
          map((updatedTodo) => {
            this.store.dispatch(loadTodos());
            return updateTodosSuccess({ todo: updatedTodo });
          }),
          catchError((error) => of(updateTodosFailure({ error })))
        )
      )
    ) 
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodos),
      mergeMap(({ id }) =>
        this.todoservice.deleteTodos(id).pipe(
          map(() => {
            this.store.dispatch(loadTodos());
            return deleteTodosSuccess({ id });
          }),
          catchError((error) => of(deleteTodosFailure({ error })))
        )
      )
    )
  );
}
