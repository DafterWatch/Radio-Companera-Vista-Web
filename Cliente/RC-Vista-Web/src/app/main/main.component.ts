import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Track } from 'ngx-audio-player';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  ImagenGrande = "assets/images/afganistan.jpg";
  serverDirection :string = 'http://localhost:3000';
  constructor(public router: Router, private http:HttpClient) { }
  ngOnInit(): void {  
    window.scroll(0,0);
    this.getNoticias();
  }
  tamañoEtiquetas;
  async getNoticias():Promise<void>{
    await this.http.post(this.serverDirection+"/getNoticias","1").toPromise()
    .then((res:any)=>this.noticias=res);
    this.noticias.reverse();
    this.noticiaGrande.push(this.noticias[0]);
    this.noticia1.push(this.noticias[1]);
    this.noticia2.push(this.noticias[2]);
    this.noticia3.push(this.noticias[3]);
    this.noticia4.push(this.noticias[4]);
  }
  sacarSoloFecha(fecha:any){
    let cadena = "";
    cadena = fecha.slice(0,10);
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
  noticiaGrande:Noticias[] = [];  
  noticia1:Noticias[] = [];
  noticia2:Noticias[] = [];
  noticia3:Noticias[] = [];
  noticia4:Noticias[] = [];
}

interface Noticias {
  id_noticia: number;
  id_reportero:number;
  ultima_modificacion: string;  
  fecha: string;  
  estado :boolean;
  id_contenido: number;
  imagen: string;
  titulo:string;
  contenido:string;
  etiquetas: string[];
  id_categoria: number;
  nombre:string;
}