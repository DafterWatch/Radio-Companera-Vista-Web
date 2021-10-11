import { Component, OnInit,NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'ngx-audio-player';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticia-expandida',
  templateUrl: './noticia-expandida.component.html',
  styleUrls: ['./noticia-expandida.component.scss']
})
export class NoticiaExpandidaComponent implements OnInit {

  constructor(public router: Router, private _ngZone: NgZone, private http:HttpClient) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize | any;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  idNoticia:any;  
  ngOnInit(): void {
    this.idNoticia = sessionStorage.getItem('idNoticia');
    window.scroll(0,0);
    this.getNoticia();
    this.getComentario();
    this.getNoticias();
  }
  contenido;
  async getNoticias():Promise<void>{
    await this.http.post(this.serverDirection+"/getNoticias","1").toPromise()
    .then((res:any)=>this.noticias=res);
    this.noticias.reverse();
    for(let i = 0; i < 6; i++){
      this.noticiasPrincipales.push(this.noticias[i]);
    }
    for(let i = 6; i < 9; i++){
      this.noticiasCostado.push(this.noticias[i]);
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
    window.scroll(0,0);
    this.noticiasPrincipales = [];
    this.noticiasCostado = [];
    for(let i = 0; i < 6; i++){
      this.noticiasPrincipales.push(this.noticias[i]);
    }
    for(let i = 6; i < 9; i++){
      this.noticiasCostado.push(this.noticias[i]);
    }
  }
  noticia:Noticias[] = [];
  noticias:Noticias[] = [];
  noticiasCostado:Noticias[] = [];
  noticiasPrincipales:Noticias[] = [];
  //--------------reproductor----------
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
      title: 'Noticia 1',
      link: 'assets/audios/videoNoticia1.mp3',
      artist: 'Periodista 1'
    }
    ];
  //----------------comentarios-------------------------
  comentarios:Comentarios[]=[];
  async getComentario():Promise<void>{
    //console.log(`http://localhost:3000/getComentario/${this.idNoticia}`);
    await this.http.get(`http://localhost:3000/getComentario/${this.idNoticia}`,{}).toPromise()
    .then((res:any)=>{this.comentarios=res
    //console.log(this.comentarios);
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
  fecha_publicacion: Date;  
  estado :boolean;
  id_contenido: number;
  imagen: string;
  titulo:string;
  contenido:string;
  etiquetas: string[];
  id_categoria: number;
  nombre:string;
}
