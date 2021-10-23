import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor(public router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.getPublicidades();
  }
  serverDirection :string = 'http://localhost:3000';
  publicidad2;  
  publicidades:Publicidad[] = [];
  publicidadDerecha:Publicidad[] = [];
  async getPublicidades():Promise<void>{
    await this.http.post(this.serverDirection+"/getPublicidades","1").toPromise()
    .then((res:any)=>this.publicidades=res);
    let i = 1;
    this.publicidades.reverse();
    if(this.publicidades[1].estado){  
      if(this.restarFecha(this.publicidades[1].fechafin)){        
        this.publicidadDerecha.push(this.publicidades[i]);
      } else {
        this.publicidadDerecha.push(this.publicidades[i+1]);
      }
    } else {
      if(this.restarFecha(this.publicidades[0].fechafin)){        
        this.publicidadDerecha.push(this.publicidades[i+1]);
      } else {
        this.publicidadDerecha.push(this.publicidades[i+2]);
      }
    }
    this.publicidad2 = this.publicidadDerecha[0].imagepublicidad;

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
