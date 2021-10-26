import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.getPublicidades();
  }
  serverDirection :string = 'http://localhost:3000';
  publicidad1;  
  enlaceLink;  
  estadoPubli;  
  publicidades:Publicidad[] = [];
  publicidadIzquierda:Publicidad[] = [];
  async getPublicidades():Promise<void>{
    await this.http.post(this.serverDirection+"/getPublicidades","1").toPromise()
    .then((res:any)=>this.publicidades=res);
    let i = 0;
    this.publicidades.reverse();
    
    if(this.publicidades[0].estado){  
      if(this.restarFecha(this.publicidades[0].fechafin)){        
        this.publicidadIzquierda.push(this.publicidades[i]);
      } else {
        this.publicidadIzquierda.push(this.publicidades[i+1]);
      }
    } else {
      if(this.restarFecha(this.publicidades[0].fechafin)){        
        this.publicidadIzquierda.push(this.publicidades[i+1]);
      } else {
        this.publicidadIzquierda.push(this.publicidades[i+2]);
      }
    }
    this.publicidad1 = this.publicidadIzquierda[0].imagepublicidad;
    this.enlaceLink = this.publicidadIzquierda[0].enlace;
    this.estadoPubli = this.publicidadIzquierda[0].estado;
  }
  restarFecha(fecha:Date){
    let date = new Date();
    let fechanueva;

    fechanueva = fecha.toString();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let day2 = fechanueva.slice(8,10);
    let month2 = fechanueva.slice(5,7);
    let year2 = fechanueva.slice(0,4);

    if(day<=day2 && month<=month2 && year<=year2){
      return true;
    } else {
      return false;
    }
  }
}
interface Publicidad{
  id_publicidad:number,
  id_reportero:number,
  titulo:string,
  empresa:string,
  fechainicio:Date,
  fechafin:Date,
  estado:true,
  enlace:string,
  imagepublicidad:string
}
