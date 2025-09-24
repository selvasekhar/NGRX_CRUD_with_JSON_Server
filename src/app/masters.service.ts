import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodo } from "./State/CRUD/store";

@Injectable({
    providedIn:'root'
})

export class masterservices {
    private base_url = 'http://localhost:3000/Todos';
    constructor(private http:HttpClient){

    }

    // getalldatas(){
    //     return this.http.get('')
    // }

    getTodos(): Observable<ITodo[]>{
        return this.http.get<ITodo[]>(this.base_url);
    }
    postTodods (todo: any) {
        return this.http.post(this.base_url, todo);
    }
    putTodods (id: number, todo: any) {
        return this.http.put(`${this.base_url}/${id}`, todo);
    }
    deleteTodos(id: number){
        return this.http.delete(`${this.base_url}/${id}`);
    }
}