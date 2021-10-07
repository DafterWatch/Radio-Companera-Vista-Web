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
  }
  contenido;
  async getNoticias():Promise<void>{
    await this.http.post(this.serverDirection+"/getNoticias","1").toPromise()
    .then((res:any)=>this.noticias=res);
    //  .log(this.noticias);
    this.noticias.reverse();
    /*this.noticiaGrande.push(this.noticias[0]);
    this.noticia1.push(this.noticias[1]);
    this.noticia2.push(this.noticias[2]);
    this.noticia3.push(this.noticias[3]);
    this.noticia4.push(this.noticias[4]);*/
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
  }
  noticia:Noticias[] = [];
  noticias:Noticias[] = [];

  noticiasCostado:NoticiasCostado[] = [
    {idNoticia:1,titulo:"La actual Miss Universo publicó una foto en la que muestra sus pies y le ‘llovieron’ los comentarios",
    imagen:"assets/images/noticia16.jpg",
    contenido:"La Miss Universo, la mexicana Andrea Meza, ha levantado críticas, pero también ha recibido apoyo. Esta vez una foto que se tomó en Nueva York y que publicó en sus redes sociales ha convertido a sus pies en el centro de la atención. En la imagen se la ve luciendo un conjunto casual que deja ver sus piernas y también las sandalias que calza. De inmediato le llovieron las críticas en las redes y es que por la foto parecería que la reina universal tiene los dedos de los pies torcidos y que el calzado no le queda bien. Ni ella ni la Organización Miss Universo (OMU) se han pronunciado, ni han retirado de circulación la fotografía.Los seguidores más radicales de los concursos de belleza critican que sus dedos no sean como como el estándar y que esa foto no la favorece, que la OMU debería supervisar todo el material que sus reinas suben a las redes sociales, que se ve muy mal que una Miss Universo dé esa imagen de 'desprolijidad'. Estos críticos le aconsejan utilizar zapatos cerrados, informa el diario La Opinión.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:2,titulo:"Sergio Ramírez denuncia en Madrid el exilio forzado que le impone Ortega",
    imagen:"assets/images/noticia18.jpg",
    contenido:"Antes, el gobierno español rechazó las infundadas acusaciones contra el literato, ganador en 2017 del máximo galardón de las letras españolas, el Premio Cervantes. Ramírez ha demostrado siempre su compromiso en la defensa de la democracia en su país, afirmaron en un comunicado conjunto el ministerio de Asuntos Exteriores y el de Cultura, recordando su papel en la lucha contra el régimen de los Somoza desde el movimiento sandinista, al lado precisamente del actual presidente, Daniel Ortega.El ex presidente colombiano Juan Manuel Santos, que se encuentra en Madrid con la antigua candidata presidencial Ingrid Betancourt, presentando el libro de ambos Una conversación pendiente, tildó de oprobioso lo que está haciendo Ortega.  Es oprobioso, es la demostración de algo que está sucediendo en América Latina en muchos países, y está in crescendo, que es esa tendencia al autoritarismo y prácticamente hacia la dictadura, afirmó Santos.Tongolele no sabe bailar, la nueva obra del nicaragüense, es una entrega de las peripecias del inspector Dolores Morales, ambientada en las protestas de 2018, duramente reprimidas por el gobierno de Ortega.Las relaciones entre España y Nicaragua se tensaron a raíz de la campaña de detenciones de opositores, entre ellos siete aspirantes a la presidencia en las elecciones generales del 7 de noviembre.El presidente Daniel Ortega, de 75 años y en el poder desde 2007, se postula para un cuarto mandato sucesivo.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:3,titulo:"China hace millonaria donación a Afganistán sin obviar la amenaza terrorista",
    imagen:"assets/images/noticia19.jpg",
    contenido:"En una reunión con los ministros de Exteriores de los países vecinos de Afganistán, el canciller Wang Yi anunció la donación de 31 millones de dólares en ayudas a Afganistán para apoyar su recuperación. El diplomático pidió gestos similares a Estados Unidos y sus aliados para que asuman sus responsabilidades y advirtió del riesgo terrorista que aún se cierne sobre el país.Una vez anunciado el nuevo Gobierno de los talibanes en Afganistán, China ha empezado a mover sus fichas.El pasado miércoles 8 septiembre tuvo lugar una reunión virtual entre los ministros de Exteriores de los países limítrofes con Afganistán: China, Pakistán, Irán, Tayikistán, Uzbekistán y Turkmenistán.En la cumbre, el canciller chino, Wang Yi, anunció el envío de 31 millones de dólares en ayudas a Afganistán. Se trata de 200 millones de yuanes en grano, suministros para el invierno, vacunas y medicamentos, que se suman a otro lote de tres millones de dosis de vacunas contra el Covid-19. El ministro destacó que los países vecinos, más que nadie, quieren ayudar a que Afganistán salga del caos.Por ello, el diplomático aseguró que China está dispuesta a ayudar al país a construir nuevos proyectos de infraestructuras que hagan más fácil la vida de los ciudadanos afganos y, en la medida de sus posibilidades, apoyar la reconstrucción pacífica y el desarrollo económico una vez haya seguridad en el país.",
    fecha:"11/09/2021",categoria:"Social"
  },
  ]
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
    console.log(`http://localhost:3000/getComentario/${this.idNoticia}`);
    await this.http.get(`http://localhost:3000/getComentario/${this.idNoticia}`,{}).toPromise()
    .then((res:any)=>{this.comentarios=res
    console.log(this.comentarios);
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
        console.log(comentarioObjeto);
        let respuestaUser=null;
        await this.http.post(this.serverDirection+"/postComentario",comentarioObjeto).toPromise()
        .then(res=>respuestaUser=res);
        if(respuestaUser){
          console.log('Comentario enviado');  
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
  fecha: Date;  
  estado :boolean;
  id_contenido: number;
  imagen: string;
  titulo:string;
  contenido:string;
  etiquetas: string[];
  id_categoria: number;
  nombre:string;
}
interface NoticiasCostado {
  idNoticia: number;
  titulo: string;
  imagen: string;
  contenido: string;
  fecha: string;
  categoria: string;
}
