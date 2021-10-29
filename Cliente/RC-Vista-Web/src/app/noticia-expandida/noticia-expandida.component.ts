import { Component, OnInit,NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'ngx-audio-player';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-noticia-expandida',
  templateUrl: './noticia-expandida.component.html',
  styleUrls: ['./noticia-expandida.component.scss']
})
export class NoticiaExpandidaComponent implements OnInit {
  cols : number;

  gridByBreakpoint = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 1,
    xs: 1
  }

  breakpoint: number;

  constructor(public router: Router, private _ngZone: NgZone, private http:HttpClient, private breakpointObserver: BreakpointObserver) { 

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });

  }
  @ViewChild('autosize') autosize: CdkTextareaAutosize | any;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  log(a:any){
    console.log(a);
  }
  idNoticia:any;  
  ngOnInit(): void {
    this.idNoticia = sessionStorage.getItem('idNoticia');
    window.scroll(0,0);    
    /*this.noticia.push({
      id_noticia: 1,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 1,
      imagen: "assets/images/afganistan.jpg",
      titulo: "Afganistan algo algo algo malo etc",
      contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
      etiquetas: ["uno","dos","tres"],
      categoriasarray:["categoria1","categoria2","categoria3","categoria4"]
    });
    this.contenido = this.noticia[0].contenido;

    this.comentarios.push({
      idComentario:1,
      idNoticia:1,
      fecha:"2021-10-20",
      nombre:"Usuario1",
      contenido:"eso tilin"
    });
    this.comentarios.push({
      idComentario:2,
      idNoticia:1,
      fecha:"2021-10-20",
      nombre:"Usuario1",
      contenido:"vaya tilin"
    });
    this.comentarios.push({
      idComentario:3,
      idNoticia:1,
      fecha:"2021-10-20",
      nombre:"Usuario1",
      contenido:"wow tilin"
    });
    this.comentarios.push({
      idComentario:4,
      idNoticia:1,
      fecha:"2021-10-20",
      nombre:"Usuario1",
      contenido:"ala mrd tilin"
    });
    this.comentariosCortados = this.comentarios.slice(0,this.numeroDivisionComentarios);
    this.cantidadComentarios = this.comentarios.length;
    this.noticiasPrincipales.push({
      id_noticia: 1,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 1,
      imagen: "assets/images/afganistan.jpg",
      titulo: "Afganistan algo algo algo malo etc",
      contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
      etiquetas: ["uno","dos","tres"],
      categoriasarray:["categoria1","categoria2","categoria3","categoria4"]
    });
    this.noticiasPrincipales.push({
      id_noticia: 1,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 1,
      imagen: "assets/images/afganistan.jpg",
      titulo: "Afganistan algo algo algo malo etc",
      contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
      etiquetas: ["uno","dos","tres"],
      categoriasarray:["categoria1","categoria2","categoria3","categoria4"]
    });
    this.noticiasPrincipales.push({
      id_noticia: 1,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 1,
      imagen: "assets/images/afganistan.jpg",
      titulo: "Afganistan algo algo algo malo etc",
      contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
      etiquetas: ["uno","dos","tres"],
      categoriasarray:["categoria1","categoria2","categoria3","categoria4"]
    });
    this.noticiasPrincipales.push({
      id_noticia: 1,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 1,
      imagen: "assets/images/afganistan.jpg",
      titulo: "Afganistan algo algo algo malo etc",
      contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
      etiquetas: ["uno","dos","tres"],
      categoriasarray:["categoria1","categoria2","categoria3","categoria4"]
    });*/
    this.getNoticia();
    this.getComentario();
    this.getNoticias();
  }
  async getNoticias():Promise<void>{
    await this.http.post(this.serverDirection+"/getNoticias","1").toPromise()
    .then((res:any)=>this.noticias=res);
    this.noticias.reverse();
    for(let i = 0; i < 4; i++){
      this.noticiasPrincipales.push(this.noticias[i]);
    }
  }
  async getNoticia():Promise<void>{
    await this.http.get(`http://localhost:3000/getNoticias/${this.idNoticia}`,{}).toPromise()
    .then((res:any)=>{this.noticia=res
      this.contenido = this.noticia[0].contenido;
    });
  }
  cantidadItems = 8;
  paginaActual = 1;
  irNoticiaExpandida(noticia:any){
    sessionStorage.setItem('idNoticia',noticia.id_noticia);
    this.idNoticia = sessionStorage.getItem('idNoticia');    
    this.noticia = [];
    this.noticiasPrincipales = [];
    this.contenido = [];    
    this.getNoticia();
    this.getComentario();
    this.getNoticias();
    window.scroll(0,0);
  }  
  contenido;
  noticia:Noticias[] = [];
  noticias:Noticias[] = [];
  noticiasPrincipales:Noticias[] = [];
  //----------------comentarios-------------------------
  comentarios:Comentarios[]=[];
  async getComentario():Promise<void>{
    await this.http.get(`http://localhost:3000/getComentario/${this.idNoticia}`,{}).toPromise()
    .then((res:any)=>{this.comentarios=res
    this.comentarios.reverse();
    this.comentariosCortados = this.comentarios.slice(0,this.numeroDivisionComentarios);
    this.cantidadComentarios = this.comentarios.length;
    });
  }
  numeroDivisionComentarios = 5;
  comentariosCortados:Comentarios[] | any;
  cantidadComentarios = 0;
  aumentarComentariosVista(){
    this.numeroDivisionComentarios = this.numeroDivisionComentarios + 5;
    this.comentariosCortados=this.comentarios.slice(0,this.numeroDivisionComentarios);
  }
  nowDate(){
    var result="";
    var d = new Date();
    result += d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    return result;
  }
  sacarSoloFecha(fecha:any){
    let cadena = "";
    cadena = fecha.slice(0,10);
    return cadena;
  }  
  restaFecha(fechaComentario:string){
    var fecha1 = moment(this.nowDate());
    var fecha2 = moment(fechaComentario);
    var resultado = fecha1.diff(fecha2, 'days');
    var diferencia;
    if(resultado>0){
      diferencia = "Hace "+resultado+' dias';
    } else{
      diferencia = "Hoy";
    }    
    return diferencia;
  }
  mensajeWarning="";
  serverDirection :string = 'http://localhost:3000';
  async enviarComentario(comentarioTexto:string, usuarioTexto:string):Promise<void>{  
    if(comentarioTexto.length > 0 && usuarioTexto.length > 0){
      this.mensajeWarning = "";
        let comentarioObjeto:Comentarios={
          idComentario: 0,
          idNoticia: this.idNoticia,
          fecha: this.nowDate(),
          nombre: usuarioTexto,
          contenido: comentarioTexto
        }
        //console.log(comentarioObjeto);
        let respuestaUser=null;
        await this.http.post(this.serverDirection+"/postComentario",comentarioObjeto).toPromise()
        .then(res=>respuestaUser=res);
        if(respuestaUser){
          //console.log('Comentario enviado');  
        }
        this.getComentario();   
    }
    else {
      this.mensajeWarning = "Por favor rellene los campos vacios";
    }
  }
}
interface Comentarios{  
  idComentario: number;
  idNoticia: number;
  fecha: string;
  nombre: string;
  contenido: string;
}
interface Noticias {
  id_noticia: number;
  id_reportero:number;
  ultima_modificacion: string;  
  fecha_publicacion: string;
  estado :boolean;
  id_contenido: number;
  imagen: string;
  titulo:string;
  contenido:string;
  etiquetas: string[];
  categoriasarray: string[];
}