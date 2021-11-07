import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Track } from 'ngx-audio-player';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PasarBusquedaNoticiasService } from '../pasar-busqueda-noticias.service';

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

  constructor(public router: Router, private http:HttpClient, private breakpointObserver: BreakpointObserver, private pasarDatosBusqueda: PasarBusquedaNoticiasService) { 

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
    //this.breakpoint = (window.innerWidth > 400) ? 3 : 3;

    /*this.noticias.push({
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
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    });
    this.noticiaGrande.push({
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
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    });
    this.noticia1.push({
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
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    });
    this.noticia2.push({
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
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    });
    this.noticia3.push({
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
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    });
    this.noticia4.push({
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
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    });*/
    
    this.noticias = [];
    this.noticiasAux = [];
    this.noticiaGrande = [];
    this.noticia1 = [];
    this.noticia2 = [];
    this.noticia3 = [];
    this.noticia4 = [];
    
    this.getNoticias();
    window.scroll(0, 0);
    this.pasarDatosBusqueda.disparador.subscribe((data) => {      
      //console.log(data.data);
      if(data.data == ""){
        this.noticias = this.noticiasAux;
      } else {
        this.buscarNoticias(data.data);
      }
    })
  }
  /*onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 3 : 3;
  }*/
  resultados;
  buscarNoticias(busqueda:string){
    this.resultados = this.noticias.filter(noti => noti.titulo.includes(busqueda));
    this.noticias = [];
    this.noticias = this.resultados;
  }
  tamañoEtiquetas;
  async getNoticias():Promise<void>{
    await this.http.post(this.serverDirection+"/getNoticias","1").toPromise()
    .then((res:any)=>this.noticias=res);
    this.noticiasAux = this.noticias; 
    this.noticias.reverse();
    this.noticiaGrande.push(this.noticias[0]);
    this.noticia1.push(this.noticias[1]);
    this.noticia2.push(this.noticias[2]);
    this.noticia3.push(this.noticias[3]);
    this.noticia4.push(this.noticias[4]);
  }
  cate:Categorias[] = []
  log(a:any){
    console.log(a);
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
    //link: '',
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
  public noticias:Noticias[] = [];
  public noticiasAux:Noticias[] = [];
  public noticiaGrande:Noticias[] = [];  
  public noticia1:Noticias[] = [];
  public noticia2:Noticias[] = [];
  public noticia3:Noticias[] = [];
  public noticia4:Noticias[] = [];
  
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
interface Categorias{
  id_noticia:number;
  id_categoria: number;
  nombre: string;
}