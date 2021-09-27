import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  SERVER_DIR : string = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }
  getComentarios(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.SERVER_DIR+'getComentarios');
  }
  getComentarioId(idNoticia : string): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.SERVER_DIR+'getComentarios/'+idNoticia);
  }
  subirComentario(comentario : Comentario) : void{
    this.http.post(this.SERVER_DIR,comentario).subscribe();
  }
}
