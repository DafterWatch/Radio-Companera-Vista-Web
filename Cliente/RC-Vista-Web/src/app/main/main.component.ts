import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Track } from 'ngx-audio-player';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PasarBusquedaNoticiasService } from '../pasar-busqueda-noticias.service';
import { BuscarCategoriaService } from '../buscar-categoria.service';

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

  constructor(public router: Router, 
    private http:HttpClient, 
    private breakpointObserver: BreakpointObserver, 
    private pasarDatosBusqueda: PasarBusquedaNoticiasService,
    private pasarDatosBusquedaCategoria: BuscarCategoriaService) {

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
    
    /*this.noticias = [
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      },
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      },
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      },
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12c",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      },
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12c",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      },
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12c",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      },
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12c",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      },
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12c",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      }
    ];
    this.noticiasAux = [
      {
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
      }
    ];
    this.noticiaGrande = [
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "How Michigan Republicans are trying to sway state's independent redistricting process",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      }
    ];
    this.noticia1 = [
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/noticia12.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      }
    ];
    this.noticia2 = [
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/noticia2.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      }
    ];
    this.noticia3 = [
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/noticia7.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      }
    ];
    this.noticia4 = [
      {
        id_noticia: 1,
        id_reportero:1,
        ultima_modificacion: "10-09-10",
        fecha_publicacion: "10-10-10",
        estado :true,
        id_contenido: 1,
        imagen: "assets/images/afganistan.jpg",
        titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
        contenido: "<h2>Aqui esta el contenido con codigo html</h2>",
        etiquetas: ["uno","dos","tres"],
        categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
      }
    ];
    */
    this.busquedaNoIniciada = true;
    this.getNoticias();
    window.scroll(0, 0);
    this.pasarDatosBusqueda.disparador.subscribe((data) => {
      if(data.data == ""){
        this.busquedaNoIniciada = true;
        this.noticias = this.noticiasAux;
        this.textoNoticiasTitular = "Noticias Principales";
      } else {
        this.busquedaNoIniciada = false;
        this.buscarNoticias(data.data);
        this.textoNoticiasTitular = "Resultados de "+data.data;
      }
    })
    this.pasarDatosBusquedaCategoria.disparador.subscribe((data) => {
      if(data.data == ""){
        this.noticias = this.noticiasAux;
        this.busquedaNoIniciada = true;
        this.textoNoticiasTitular = "Noticias Principales";
      } else {        
        this.getNoticiaCategoria(data.data);
        this.textoNoticiasTitular = data.data;      
      }
    })
  }
  textoNoticiasTitular = "Noticias Principales";
  busquedaNoIniciada = true;
  sinNoticias:Boolean = false;
  /*onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 3 : 3;
  }*/
  async getNoticiaCategoria(nombre:string):Promise<void>{
    window.scroll(0,0);
    this.busquedaNoIniciada = false;
    await this.http.get(`http://localhost:3000/getCategorias/${nombre}`,{}).toPromise()
    .then((res:any)=>{this.noticias = res});
    this.noticias.reverse();
    this.textoNoticiasTitular = nombre;
  }
  async getNoticiaCategoriaFecha(fecha:string):Promise<void>{
    window.scroll(0,0);
    this.busquedaNoIniciada = false;
    await this.http.get(`http://localhost:3000/getCategoriasFecha/${fecha}`,{}).toPromise()
    .then((res:any)=>{this.noticias = res});
    this.noticias.reverse();
    this.textoNoticiasTitular = fecha;
  }
  resultados;
  buscarNoticias(busqueda:string){
    this.noticias = this.noticiasAux;
    this.resultados = this.noticias.filter(noti => noti.titulo.toUpperCase().includes(busqueda.toUpperCase()));
    if(this.resultados.length > 0){
      this.sinNoticias = false;
      this.noticias = [];
      this.noticias = this.resultados;
      this.textoNoticiasTitular = "Resultados de "+busqueda;
    } else {
      this.sinNoticias = true;
      this.textoNoticiasTitular = "Noticias Principales";
    }    
    if(this.sinNoticias){
      this.noticias = [];
      this.textoNoticiasTitular = "Noticias Principales";
    }
  }
  tama??oEtiquetas;
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
    this.textoNoticiasTitular = "Noticias Principales";
  }
  cate:Categorias[] = []
  log(a:any){
    console.log(this.sacarSoloFecha(a));
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
    title: 'Radio Compa??era',
    link: 'https://stream.zeno.fm/xhh74fthxy8uv?1630882081587',
    //link: '',
    artist: 'La Paz - Bolivia',
    duration: 3.5
  }
  ];
  //-------------------------------Noticias-----------------------------------
  cantidadItems = 9;
  paginaActual = 1;
  cambioPagina(evento:any){
    this.paginaActual = evento;
    if(this.paginaActual == 1){      
      this.busquedaNoIniciada = true;
    } else {      
      this.busquedaNoIniciada = false;
    }
    window.scroll(0,0);
  }  
  irNoticiaExpandida(noticia:any){
    sessionStorage.setItem('idNoticia',noticia.id_noticia);
    this.router.navigate(['noticia']);
  }
  /*public noticias:Noticias[] = [];
  public noticiasAux:Noticias[] = [];
  public noticiaGrande:Noticias[] = [];  
  public noticia1:Noticias[] = [];
  public noticia2:Noticias[] = [];
  public noticia3:Noticias[] = [];
  public noticia4:Noticias[] = [];*/



  public noticias:Noticias[] = [
    /*{
    id_noticia: 1,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/afganistan.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 2,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia1.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 3,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia3.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 4,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia4.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 5,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia10.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 6,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia5.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 7,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia7.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 8,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia9.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 9,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 1,
    imagen: "assets/images/noticia11.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  },
  {
    id_noticia: 10,
    id_reportero:1,
    ultima_modificacion: "10-09-10",
    fecha_publicacion: "10-10-10",
    estado :true,
    id_contenido: 11,
    imagen: "assets/images/noticia8.jpg",
    titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
    etiquetas: ["uno","dos","tres"],
    categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
  }*/
];
  public noticiasAux:Noticias[] = [];
  public noticiaGrande:Noticias[] = [
    /*{
      id_noticia: 1,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 11,
      imagen: "assets/images/noticia4.jpg",
      titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      etiquetas: ["uno","dos","tres"],
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    }*/
  ];  
  public noticia1:Noticias[] = [
   /* {
      id_noticia: 2,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 11,
      imagen: "assets/images/noticia7.jpg",
      titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      etiquetas: ["uno","dos","tres"],
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    }*/
  ];
  public noticia2:Noticias[] = [
    /*{
      id_noticia: 3,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 11,
      imagen: "assets/images/noticia11.jpg",
      titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      etiquetas: ["uno","dos","tres"],
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    }*/
  ];
  public noticia3:Noticias[] = [
   /* {
      id_noticia: 4,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 11,
      imagen: "assets/images/noticia6.jpg",
      titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      etiquetas: ["uno","dos","tres"],
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    }*/
  ];
  public noticia4:Noticias[] = [
    /*{
      id_noticia: 5,
      id_reportero:1,
      ultima_modificacion: "10-09-10",
      fecha_publicacion: "10-10-10",
      estado :true,
      id_contenido: 11,
      imagen: "assets/images/noticia1.jpg",
      titulo: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      contenido: "Judge in trial of Arbery slaying says nothing he can do about 11 white people on jury of 12",
      etiquetas: ["uno","dos","tres"],
      categoriasarray: ["categoria1","categoria2","categoria3","categoria4"],
    }*/
  ];
  
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