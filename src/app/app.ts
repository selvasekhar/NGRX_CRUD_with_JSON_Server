import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { masterservices } from './masters.service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTodos } from './State/CRUD/crud.selector';
import { createTodos, deleteTodos, loadTodos, updateTodos } from './State/CRUD/crud.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, AsyncPipe, NgFor],
  // providers:[NumberDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

   private store = inject(Store);
  datass: any;
  newData = '';
  isCreate!: boolean;

  crudData$!: Observable<any[]>;

 

  // constructor(private services: masterservices) {}

  ngOnInit(): void {
    this.crudData$ = this.store.select(selectTodos);
    this.loadData();
  }

  @HostListener('window:scroll')
  onscroll() {
    console.log('scroll......');
  }

  loadData() {
    this.store.dispatch(loadTodos());
  }

  addData(data: any) {
    this.store.dispatch(createTodos({ todo: { title: data } }));
    this.newData = '';
  }
  updataData(id: number, todo: any) {
    const updataData = { ...todo, title: prompt('enter new title', todo.title) };
    this.store.dispatch(updateTodos({ id, todo: updataData }));
  }
  deleteData(id: number) {
    this.store.dispatch(deleteTodos({ id }));
  }
  createdata() {
    this.isCreate = true;
  }
}
