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
    
    //this.breakpoint = (window.innerWidth > 400) ? 3 : 3;
    this.getNoticias();
    this.noticiasCompletas.push({
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
      categorias: ["categoria1","categoria2","categoria3","categoria4"],
    });    

    window.scroll(0, 0);
  }
  /*onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 3 : 3;
  }*/
  public noticiasCompletas:NoticiasCompletas[]=[];
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
  primera = true;
  segunda = false;
  tercera = false;
  cuarta = false;
  quinta = false;
  async getCategorias(idNoticia:any):Promise<void>{
    await this.http.get(`http://localhost:3000/getCategorias/${idNoticia}`,{}).toPromise()
    .then((res:any)=>{
      let arrayCates=[];
      let idaux;
      let n = -1;
      res.forEach(element => {
        for(let i = 0; i < this.noticias.length; i++){
          if(this.noticias[i].id_noticia == element.id_noticia){       
            if(this.noticias[i].estado == true){
              arrayCates.push(element.nombre);          
              if(this.primera){      
                this.primera = false;    
                this.segunda = true;    
                idaux = element.id_noticia;
                this.noticiasCompletas.push(
                  {
                    id_noticia: this.noticias[i].id_noticia,
                    id_reportero:this.noticias[i].id_reportero,
                    ultima_modificacion: this.noticias[i].ultima_modificacion,
                    fecha_publicacion: "a",
                    estado :this.noticias[i].estado,
                    id_contenido: this.noticias[i].id_contenido,
                    imagen: this.noticias[i].imagen,
                    titulo:this.noticias[i].titulo,
                    contenido:this.noticias[i].contenido,
                    etiquetas: this.noticias[i].etiquetas,
                    categorias: arrayCates
                  }
                );
                this.noticiaGrande.push(
                  {
                    id_noticia: this.noticias[i].id_noticia,
                    id_reportero:this.noticias[i].id_reportero,
                    ultima_modificacion: this.noticias[i].ultima_modificacion,
                    fecha_publicacion: "a",
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
                      fecha_publicacion: "a",
                      estado :this.noticias[i].estado,
                      id_contenido: this.noticias[i].id_contenido,
                      imagen: this.noticias[i].imagen,
                      titulo:this.noticias[i].titulo,
                      contenido:this.noticias[i].contenido,
                      etiquetas: this.noticias[i].etiquetas,
                      categorias: arrayCates
                    }
                  );
                  if(this.segunda){
                    this.segunda = false;
                    this.tercera = true;  
                    this.noticia1.push({
                      id_noticia: this.noticias[i].id_noticia,
                      id_reportero:this.noticias[i].id_reportero,
                      ultima_modificacion: this.noticias[i].ultima_modificacion,
                      fecha_publicacion: "a",
                      estado :this.noticias[i].estado,
                      id_contenido: this.noticias[i].id_contenido,
                      imagen: this.noticias[i].imagen,
                      titulo:this.noticias[i].titulo,
                      contenido:this.noticias[i].contenido,
                      etiquetas: this.noticias[i].etiquetas,
                      categorias: arrayCates
                    });
                  }else if(this.tercera){
                    this.tercera = false;
                    this.cuarta = true;  
                    this.noticia2.push({
                      id_noticia: this.noticias[i].id_noticia,
                      id_reportero:this.noticias[i].id_reportero,
                      ultima_modificacion: this.noticias[i].ultima_modificacion,
                      fecha_publicacion: "a",
                      estado :this.noticias[i].estado,
                      id_contenido: this.noticias[i].id_contenido,
                      imagen: this.noticias[i].imagen,
                      titulo:this.noticias[i].titulo,
                      contenido:this.noticias[i].contenido,
                      etiquetas: this.noticias[i].etiquetas,
                      categorias: arrayCates
                    });
                  } else if(this.cuarta){
                    this.cuarta = false;
                    this.quinta = true;  
                    this.noticia3.push({
                      id_noticia: this.noticias[i].id_noticia,
                      id_reportero:this.noticias[i].id_reportero,
                      ultima_modificacion: this.noticias[i].ultima_modificacion,
                      fecha_publicacion: "a",
                      estado :this.noticias[i].estado,
                      id_contenido: this.noticias[i].id_contenido,
                      imagen: this.noticias[i].imagen,
                      titulo:this.noticias[i].titulo,
                      contenido:this.noticias[i].contenido,
                      etiquetas: this.noticias[i].etiquetas,
                      categorias: arrayCates
                    });
                  } else if(this.quinta){
                    this.quinta = false;
                    this.noticia4.push({
                      id_noticia: this.noticias[i].id_noticia,
                      id_reportero:this.noticias[i].id_reportero,
                      ultima_modificacion: this.noticias[i].ultima_modificacion,
                      fecha_publicacion: "a",
                      estado :this.noticias[i].estado,
                      id_contenido: this.noticias[i].id_contenido,
                      imagen: this.noticias[i].imagen,
                      titulo:this.noticias[i].titulo,
                      contenido:this.noticias[i].contenido,
                      etiquetas: this.noticias[i].etiquetas,
                      categorias: arrayCates
                    });
                  }


                 

                  
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
    //link: 'https://stream.zeno.fm/xhh74fthxy8uv?1630882081587',
    link: '',
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
  public noticiaGrande:NoticiasCompletas[] = [];  
  public noticia1:NoticiasCompletas[] = [];
  public noticia2:NoticiasCompletas[] = [];
  public noticia3:NoticiasCompletas[] = [];
  public noticia4:NoticiasCompletas[] = [];
  
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
  fecha_publicacion: string;
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