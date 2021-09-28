import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../services/database-service.service';
import { Comentario } from '../types';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private dataBase : DatabaseServiceService) { }

  ngOnInit(): void {
    /*let comentario:Comentario[];
    this.dataBase.getComentarios().subscribe(comentarios => comentario = comentarios);
    /*
    let comentarios : Observable<Comentario[]>;
    comentarios =this.dataBase.getComentarios();
    */
  }
}
