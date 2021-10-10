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

    //this.getNoticias();
  }

  /*onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 3 : 3;
  }*/

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
  noticias:Noticias[] = [
    {id_noticia:1,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:2,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:3,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:4,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:5,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:6,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:7,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:8,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:9,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:10,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:11,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:12,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:13,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },
  {id_noticia:14,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },


  ];
  noticiaGrande:Noticias[] = [
    
    {id_noticia:1,
    id_reportero:1,
    ultima_modificacion:"Ayer",
    fecha: "09-03-2021",
    estado: false,
    id_contenido: 5,
    imagen:"assets/images/noticia5.jpg",
    titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    etiquetas: ["reporte"],
    id_categoria: 3,
    nombre: "Social",
  },

  ];  
  noticia1:Noticias[] = [

    {id_noticia:1,
      id_reportero:1,
      ultima_modificacion:"Ayer",
      fecha: "09-03-2021",
      estado: false,
      id_contenido: 5,
      imagen:"assets/images/noticia5.jpg",
      titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
      contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
      etiquetas: ["reporte"],
      id_categoria: 3,
      nombre: "Social",
    },

  ];
  noticia2:Noticias[] = [

    {id_noticia:1,
      id_reportero:1,
      ultima_modificacion:"Ayer",
      fecha: "09-03-2021",
      estado: false,
      id_contenido: 5,
      imagen:"assets/images/noticia5.jpg",
      titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
      contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
      etiquetas: ["reporte"],
      id_categoria: 3,
      nombre: "Social",
    },

  ];
  noticia3:Noticias[] = [

    {id_noticia:1,
      id_reportero:1,
      ultima_modificacion:"Ayer",
      fecha: "09-03-2021",
      estado: false,
      id_contenido: 5,
      imagen:"assets/images/noticia5.jpg",
      titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
      contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
      etiquetas: ["reporte"],
      id_categoria: 3,
      nombre: "Social",
    },

  ];
  noticia4:Noticias[] = [

    {id_noticia:1,
      id_reportero:1,
      ultima_modificacion:"Ayer",
      fecha: "09-03-2021",
      estado: false,
      id_contenido: 5,
      imagen:"assets/images/noticia5.jpg",
      titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
      contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
      etiquetas: ["reporte"],
      id_categoria: 3,
      nombre: "Social",
    },

  ];
}

interface Noticias {
  id_noticia: number;
  id_reportero:number;
  ultima_modificacion: string;  
  //fecha: Date; 
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