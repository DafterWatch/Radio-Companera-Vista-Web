import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Track } from 'ngx-audio-player';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cols : number;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 2,
    xs: 1
  }

  breakpoint: number;

  ImagenGrande = "assets/images/afganistan.jpg";
  serverDirection :string = 'http://localhost:3000';

  constructor(public router: Router, private http:HttpClient, private breakpointObserver: BreakpointObserver) { 

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
  ngOnInit(): void { 

    window.scroll(0, 0);
    
    //this.breakpoint = (window.innerWidth > 400) ? 3 : 3;

    this.getNoticias();
  }
  /*onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 3 : 3;
  }*/
  noticiasCompletas:NoticiasCompletas[]=[];
  tamañoEtiquetas;
  async getNoticias():Promise<void>{
    await this.http.post(this.serverDirection+"/getNoticias","1").toPromise()
    .then((res:any)=>this.noticias=res);
    this.noticias.reverse();
    for(let i = 0; i < this.noticias.length; i++){
      this.getCategorias(this.noticias[i].id_noticia);
    }
  }
  cate:Categorias[] = []
  log(a:any){
    console.log(a);
  }
  async getCategorias(idNoticia:any):Promise<void>{
    await this.http.get(`http://localhost:3000/getCategorias/${idNoticia}`,{}).toPromise()
    .then((res:any)=>{
      let arrayCates=[];
      let idaux;
      let primera = true;
      res.forEach(element => {
        for(let i = 0; i < this.noticias.length; i++){
          if(this.noticias[i].id_noticia == element.id_noticia){       
            if(this.noticias[i].estado == true){
              arrayCates.push(element.nombre);
              switch(i){
                case 0:{
                  this.noticiaGrande.push(
                    {
                      id_noticia: this.noticias[i].id_noticia,
                      id_reportero:this.noticias[i].id_reportero,
                      ultima_modificacion: this.noticias[i].ultima_modificacion,
                      fecha_publicacion: this.noticias[i].fecha_publicacion,
                      estado :this.noticias[i].estado,
                      id_contenido: this.noticias[i].id_contenido,
                      imagen: this.noticias[i].imagen,
                      titulo:this.noticias[i].titulo,
                      contenido:this.noticias[i].contenido,
                      etiquetas: this.noticias[i].etiquetas,
                      categorias: arrayCates
                    }
                  );
                  break;
                }
                case 1:{
                  this.noticia1.push({
                    id_noticia: this.noticias[i].id_noticia,
                    id_reportero:this.noticias[i].id_reportero,
                    ultima_modificacion: this.noticias[i].ultima_modificacion,
                    fecha_publicacion: this.noticias[i].fecha_publicacion,
                    estado :this.noticias[i].estado,
                    id_contenido: this.noticias[i].id_contenido,
                    imagen: this.noticias[i].imagen,
                    titulo:this.noticias[i].titulo,
                    contenido:this.noticias[i].contenido,
                    etiquetas: this.noticias[i].etiquetas,
                    categorias: arrayCates
                  });
                  break;
                }
                case 2:{
                  this.noticia2.push({
                    id_noticia: this.noticias[i].id_noticia,
                    id_reportero:this.noticias[i].id_reportero,
                    ultima_modificacion: this.noticias[i].ultima_modificacion,
                    fecha_publicacion: this.noticias[i].fecha_publicacion,
                    estado :this.noticias[i].estado,
                    id_contenido: this.noticias[i].id_contenido,
                    imagen: this.noticias[i].imagen,
                    titulo:this.noticias[i].titulo,
                    contenido:this.noticias[i].contenido,
                    etiquetas: this.noticias[i].etiquetas,
                    categorias: arrayCates
                  });
                  break;
                }
                case 3:{
                  this.noticia3.push({
                    id_noticia: this.noticias[i].id_noticia,
                    id_reportero:this.noticias[i].id_reportero,
                    ultima_modificacion: this.noticias[i].ultima_modificacion,
                    fecha_publicacion: this.noticias[i].fecha_publicacion,
                    estado :this.noticias[i].estado,
                    id_contenido: this.noticias[i].id_contenido,
                    imagen: this.noticias[i].imagen,
                    titulo:this.noticias[i].titulo,
                    contenido:this.noticias[i].contenido,
                    etiquetas: this.noticias[i].etiquetas,
                    categorias: arrayCates
                  });
                  break;
                }
                case 4:{
                  this.noticia4.push({
                    id_noticia: this.noticias[i].id_noticia,
                    id_reportero:this.noticias[i].id_reportero,
                    ultima_modificacion: this.noticias[i].ultima_modificacion,
                    fecha_publicacion: this.noticias[i].fecha_publicacion,
                    estado :this.noticias[i].estado,
                    id_contenido: this.noticias[i].id_contenido,
                    imagen: this.noticias[i].imagen,
                    titulo:this.noticias[i].titulo,
                    contenido:this.noticias[i].contenido,
                    etiquetas: this.noticias[i].etiquetas,
                    categorias: arrayCates
                  });
                  break;
                }
              }
              if(primera){          
                primera = false;    
                idaux = element.id_noticia;
                this.noticiasCompletas.push(
                  {
                    id_noticia: this.noticias[i].id_noticia,
                    id_reportero:this.noticias[i].id_reportero,
                    ultima_modificacion: this.noticias[i].ultima_modificacion,
                    fecha_publicacion: this.noticias[i].fecha_publicacion,
                    estado :this.noticias[i].estado,
                    id_contenido: this.noticias[i].id_contenido,
                    imagen: this.noticias[i].imagen,
                    titulo:this.noticias[i].titulo,
                    contenido:this.noticias[i].contenido,
                    etiquetas: this.noticias[i].etiquetas,
                    categorias: arrayCates
                  }
                );
              } else {
                if(idaux != element.id_noticia){
                  idaux = element.id_noticia;
                  this.noticiasCompletas.push(
                    {
                      id_noticia: this.noticias[i].id_noticia,
                      id_reportero:this.noticias[i].id_reportero,
                      ultima_modificacion: this.noticias[i].ultima_modificacion,
                      fecha_publicacion: this.noticias[i].fecha_publicacion,
                      estado :this.noticias[i].estado,
                      id_contenido: this.noticias[i].id_contenido,
                      imagen: this.noticias[i].imagen,
                      titulo:this.noticias[i].titulo,
                      contenido:this.noticias[i].contenido,
                      etiquetas: this.noticias[i].etiquetas,
                      categorias: arrayCates
                    }
                  );                  
                }
              }
            }
          }
        }
      });


    });
  }
  sacarSoloFecha(fecha1:any){
    let cadena = "";
    cadena = fecha1.slice(0,10);
    return cadena;
  }
  //-------------------------------------------- Reproductor ----------------------------------------------
msaapDisplayTitle = true;
msaapDisplayPlayList = false;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = false;
msaapDisplayArtist = true;
msaapDisplayDuration = false;
msaapDisablePositionSlider = false;
   
// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Radio Compañera',
    link: 'https://stream.zeno.fm/xhh74fthxy8uv?1630882081587',
    artist: 'Estacion 106.3',
    duration: 3.5
  }
  ];
  //-------------------------------Noticias-----------------------------------
  cantidadItems = 9;
  paginaActual = 1;
  cambioPagina(evento:any){
    this.paginaActual = evento;
    //window.scroll(0,0);
  }  
  irNoticiaExpandida(noticia:any){
    sessionStorage.setItem('idNoticia',noticia.id_noticia);
    this.router.navigate(['noticia']);
  }
  noticias:Noticias[] = [];
  noticiaGrande:NoticiasCompletas[] = [];  
  noticia1:NoticiasCompletas[] = [];
  noticia2:NoticiasCompletas[] = [];
  noticia3:NoticiasCompletas[] = [];
  noticia4:NoticiasCompletas[] = [];
  
}

interface Noticias {
  id_noticia: number;
  id_reportero:number;
  ultima_modificacion: string;  
  fecha_publicacion: Date;
  estado :boolean;
  id_contenido: number;
  imagen: string;
  titulo:string;
  contenido:string;
  etiquetas: string[];
}
interface NoticiasCompletas {
  id_noticia: number;
  id_reportero:number;
  ultima_modificacion: string;  
  fecha_publicacion: Date;
  estado :boolean;
  id_contenido: number;
  imagen: string;
  titulo:string;
  contenido:string;
  etiquetas: string[];
  categorias: string[];
}
interface Categorias{
  id_noticia:number;
  id_categoria: number;
  nombre: string;
}