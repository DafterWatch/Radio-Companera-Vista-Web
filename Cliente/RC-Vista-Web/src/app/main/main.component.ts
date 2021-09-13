import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Track } from 'ngx-audio-player';  

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {    
  }

  //-------------------------------------------- Carrusel ----------------------------------------------
  noticias:Noticias[] = [
    {
      idNoticia:1,
      titulo:"Dos niños escaparon de sus casas y amenazaron con suicidarse si no lo dejaban tener una relacion sentimental",
      imagen:"assets/images/noticia1.jpg ",
      contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
      fecha:"11/09/2021",
      categoria:"Social"
    },
    {idNoticia:2,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:3,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:4,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:5,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:6,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:7,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:8,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:9,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:10,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:11,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:12,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:13,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:14,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:15,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:16,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:17,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:18,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:19,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:20,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:21,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:22,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:23,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:24,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:25,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:26,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"21/12/2021",categoria:"Economia"},
  ]
  customOptions: OwlOptions = {
   loop: true,
   mouseDrag: false,
   touchDrag: false,
   pullDrag: false,
   dots: false,
   navSpeed: 600,
   navText: ['&#8249', '&#8250;'],
   responsive: {
     0: {
       items: 1 
     }
   },
   nav: true
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
  onEnded(){

  }
  //-------------------------------Noticias-----------------------------------
  cantidadItems = 6;
  paginaActual = 1;
  cambioPagina(evento:any){
    this.paginaActual = evento;
    window.scroll(0,0);
  }
}

interface Noticias {
  idNoticia: number;
  titulo: string;
  imagen: string;
  contenido: string;
  fecha: string;
  categoria: string;
}