import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-noticia-expandida',
  templateUrl: './noticia-expandida.component.html',
  styleUrls: ['./noticia-expandida.component.scss']
})
export class NoticiaExpandidaComponent implements OnInit, AfterContentInit {

  constructor(public router: Router) { }
  ngAfterContentInit(): void {    
  }
  idNoticia:any;
  titulo:any;
  imagen:any;
  contenido:any;
  fecha:any;
  categoria:any;
  /*public noticiaEntrante:NoticiaPrincipal={
    idNoticia: 0,
    titulo: 'error 404',
    imagen: '',
    contenido: '',
    fecha: '',
    categoria: ''
  };*/
  
  ngOnInit(): void {
    this.idNoticia = sessionStorage.getItem('idNoticia');
    this.titulo = sessionStorage.getItem('titulo');
    this.imagen = sessionStorage.getItem('imagen');
    this.contenido = sessionStorage.getItem('contenido');
    this.fecha = sessionStorage.getItem('fecha');
    this.categoria = sessionStorage.getItem('categoria');
    //console.log(this.idNoticia,this.titulo,this.imagen,this.contenido,this.fecha,this.categoria);
    window.scroll(0,0);
  }
  /*public noticiaprincipal:NoticiaPrincipal= {
    idNoticia: this.noticiaEntrante.idNoticia,
    titulo: this.noticiaEntrante.titulo,
    imagen: this.noticiaEntrante.imagen,
    contenido: this.noticiaEntrante.contenido,
    fecha: this.noticiaEntrante.fecha,
    categoria: this.noticiaEntrante.categoria
  };*/
  irNoticiaExpandida(noticia:any){
    sessionStorage.setItem('idNoticia',noticia.idNoticia);
    sessionStorage.setItem('titulo',noticia.titulo);
    sessionStorage.setItem('imagen',noticia.imagen);
    sessionStorage.setItem('contenido',noticia.contenido);
    sessionStorage.setItem('fecha',noticia.fecha);
    sessionStorage.setItem('categoria',noticia.categoria);

    this.idNoticia = sessionStorage.getItem('idNoticia');
    this.titulo = sessionStorage.getItem('titulo');
    this.imagen = sessionStorage.getItem('imagen');
    this.contenido = sessionStorage.getItem('contenido');
    this.fecha = sessionStorage.getItem('fecha');
    this.categoria = sessionStorage.getItem('categoria');
    window.scroll(0,0);
  }
  noticias:Noticias[] = [
    {
      idNoticia:1,
      titulo:"Dos niños escaparon de sus casas y amenazaron con suicidarse si no lo dejaban tener una relacion sentimental",
      imagen:"assets/images/noticia1.jpg ",
      contenido:"La Paz, 9 de septiembre (RC).- Dos niños escaparon de sus domicilios en la ciudad de La Paz y amenazaron a sus familias con suicidarse si no los dejaban tener una relación sentimental. La menor de 12 años y el varón de 16 serán valorados psicológicamente de acuerdo a la normativa, detalló el jefe de la División de Trata y Tráfico de personas, Marco Puente.“Hace dos días los dos menores deciden escapar de su domicilio porque sus familias no permitían la relación entre ambos, se dirigen hasta el sector de Villa El Carmen donde la Policía inició la búsqueda para dar con su paradero”, indicó Puente.El jefe policial detalló que los dos menores de edad retornaron sus casas al enterarse que sus familias empezaron la búsqueda con diferentes anuncios.",
      fecha:"11/09/2021",
      categoria:"Social"
    },
    {idNoticia:2,
    titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",
    imagen:"assets/images/noticia2.jpg",
    contenido:"El padre de Anakin, Milton Tancara, afirmó que la abogada defensora de Álvaro S. intenta cambiar los hechos y desvirtúa las declaraciones realizadas los últimos días en diferentes medios de comunicación. “Ese día mi hijo salió de casa rumbo a la Caja Nacional de Salud, realizaba un trámite, él llega a casa a las 15.30 con los documentos. Eso desvirtúa totalmente que ese día mi hijo se fue a encontrar con los autores del asesinato”, manifestó el padre de Anakin en entrevista con Radio Compañera. Además, recalcó que fue un asesinato y se tiene las pruebas suficientes. “Entiendo que es el trabajo de la abogada e intentará cambiar todo lo sucedido, con nuevos argumentos”, acotó. Monica Irusta, abogada del autor del crimen, aseguró en días pasados que la muerte de Anakin fue un crimen pasional y horas antes del suceso existió un encuentro. “Hay un roce de golpes y le dice arreglaremos esto como caballeros y tienen la maravillosa idea de ir a consumir bebidas alcohólicas entre los tres, se dirigen a la casa de la señorita”, detalló Irusta.",
    fecha:"11/09/2021",
    categoria:"Seguridad"},
    {idNoticia:3,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",
    contenido:"La Fiscalía de La Paz solicitó hoy de manera formal detención preventiva para los dos acusados del asesinato de Mayerly, el autor confeso del crimen, Matusalén M., será enviado a la cárcel de Chonchocoro y Roberto a San pedro, informó la fiscal Dubravka Jordan. “Se está solicitando para el autor del crimen, Matusalén, pueda ser enviado a Chonchocoro y Roberto en el penal de San Pedro. Este ilícito es calificado como feminicidio”, aseguró la fiscal. La autoridad judicial indicó que la madre de la víctima y su hermana menor implicaron en el caso a Roberto porque Mayerly afirmó que se encontraba con Rolando Quispe, nombre ficticio que era usado por Roberto en Redes Sociales. Por otro lado, la familia de Roberto asegura que es inocente, Matusalén mencionó a esta persona para usarlo como coartada, la Policía continúa con las investigaciones respecto al hecho.",
    fecha:"09/09/2021",categoria:"Seguridad"},
    {idNoticia:4,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",
    contenido:"En la carretera Camiri – Santa  Cruz, ruta 34,  se produjo un choque entre un bus interprovincial  y un automóvil que dejó tres personas fallecidas y siete heridas, según información de medios locales. De acuerdo a la investigación inicial de la Policía los los cadáveres quedaron atrapados entre los fierros de la vagoneta que quedó destruida por el fuerte impacto, debido a este el motor del vehículo se encontraba a unos 10 metros del lugar. Testigos que evidenciaron el hecho describieron que el vehículo trato de adelantar a un motorizado, impactando de manera directa con el bus. De las personas heridas dos serán ingresadas a terapia intensiva.",
    fecha:"09/09/2021",categoria:"Seguridad"},
    {idNoticia:5,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    fecha:"09/09/2021",categoria:"Social"},
    {idNoticia:6,titulo:"Clausuran negocio de comida donde denunciaron el hallazgo de un dedo humano en una hamburguesa",imagen:"assets/images/noticia6.jpg",
    contenido:"El restaurant Hot Burger que fue denunciado con fotografías al encontrar en una hamburguesa un dedo humano fue clausurado por funcionarios del Viceministerio de Defensa al Consumidor, quienes llegaron la tarde de este lunes al lugar ubicado en el tercer anillo de la avenida San Aurelio en la ciudad de Santa Cruz.La encargada de la instancia gubernamental, Giancarla Bojanic, informó que se iniciará  una investigación para precautelar los derechos de los consumidores.“Nos hicimos presente para clausurar de manera temporal Hot Burger hasta que esta denuncia sea aclarada, estamos trabajando de manera coordinada con la Fiscalía y la Fuerza Especial de Lucha Contra el Crimen”, informó la autoridad. Asimismo, trabajadores del negocio de comida rápida prestaron su declaración informativa para esclarecer el hecho. En imágenes y videos que circulan en Redes Sociales se evidencia el hallazgo del dedo humano, poco después los usuarios increpan a la responsable del lugar, quien indica que el producto les llega elaborado. “Esta sucursal nunca ha tenido problemas, esto escapa de nuestras manos, pero lo que ustedes quieran les vamos a dar”, manifestó la funcionaria.",
    fecha:"13/09/2021",categoria:"Seguridad"},
    {idNoticia:7,titulo:"Cotoca: Sujeto que presuntamente asesinó a su esposa e hijastra con una picota fue capturado por la Policía",imagen:"assets/images/noticia7.jpg",
    contenido:"La Paz, 13 de septiembre (RC).- La Policía capturó a medio día de este lunes a Fernando M. A., después de darse a la fuga tras presuntamente asesinar a su esposa e hijastra, en el municipio de Cotoca en Santa Cruz.José María Velasco, director de la Fuerza Especial de Lucha Contra la Violencia (FELCV), informó que el acusado fue encontrado escondido entre unos matorrales. De acuerdo al informe preliminar las víctimas Florentina Cordero Ortega, de 36 años, y Adelaida Candia Codero, de 18, mantenían una relación sentimental con el presunto feminicida. El asesinato ocurrió en presencia de cuatro niños de entre 1 y 10 años, los cuales se encuentran en protección de la Defensoría de la Niñez.",
    fecha:"13/09/2021",categoria:"Seguridad"},
    {idNoticia:8,titulo:"Notificarán al ministro de Educación para declarar por el caso “tráfico de exámenes”",imagen:"assets/images/noticia8.jpg",
    contenido:"Abel Loma, abogado de la viceministra de Educación Superior, Aura Balderrama, informó que se notificará al ministro de Educación, Adrián Quelca, para que preste su declaración por el caso “tráfico de exámenes”. La autoridad de educación es el principal acusado y no goza de ningún beneficio, acotó. “Llamó la atención al Ministerio Púbico para que se puedan determinar la veracidad y la participación de las personas, Adrián Quelca será notificado para que pueda declarar de manera informativa en calidad de denunciado”, manifestó Loma a Radio Compañera. En el proceso ya declararon más de 11 personas y todas indicaron que perdieron sus celulares, los cuales serían sometidos a una pericia para recuperar la información. “Los investigadores asignados empezaron a tomar declaraciones a diferentes testigos que tienen cargos directivos en el sistema educativo plurinacional de Bolivia y todos misteriosamente perdieron sus celulares”, detalló.",
    fecha:"13/09/2021",categoria:"Seguridad"},
    {idNoticia:9,titulo:"Médicos de Reino Unido piden vacunar a los menores de 12 a 15 años",imagen:"assets/images/noticia9.jpg",
    contenido:"Los asesores médicos del Gobierno británico solicitaron mediante un comunicado que todos los menores entre 12 y 15 años reciban una primera dosis de la vacuna contra el coronavirus de Pfizer, según el portal La Vanguardia. “COVID es una enfermedad que puede transmitirse de manera muy efectiva por propagación masiva en eventos, especialmente con la variante delta”, indicó el comunicado y resaltó que la inmunización de los menores reducirá la posibilidad de que se generen brotes de la pandemia en centros educativos. Asimismo, los médicos manifestaron que la vacunación de los menores reducirá las alteraciones en la educación y prevén que se realice la inmunización a alrededor de tres millones de menores de edad. Dichas declaraciones fueron realizadas pese a que el Comité Conjunto de Vacunación e Inmunización (JCVI) desaconsejó la vacunación en masa a menores de edad.",
    fecha:"11/09/2021",categoria:"Internacional"},
    {idNoticia:10,titulo:"ONU asevera que los talibanes ya han “refugiado” a miembros de Al Qaeda",imagen:"assets/images/noticia10.jpg",
    contenido:"La enviada especial de la ONU para Afganistán, Deborah Lyons, informó que los talibanes ya han “acogido y refugiado visiblemente” a miembros de Al Qaeda, por lo que pidió a las autoridades y organizaciones internacionales que se unan para evitar el colapso de la economía de Afganistán, según el portal Infobae. Del mismo modo, la representante de la ONU explicó que el Consejo de Seguridad de la ONU deberá determinar cómo ser relacionará con los 33 miembros del gobierno talibán que están en la lista negra de sanciones de la ONU, ya que varias de las autoridades de dicho sector son personas buscadas por la ley. Por otro lado, Lyons advirtió de “una crisis inminente” causada por la congelación de miles de millones de dólares en activos afganos. La enviada de la ONU explicó que dicha situación podría causar una recesión económica que dejaría a millones de afganos en la pobreza.",
    fecha:"10/09/2021",categoria:"Internacional"},
    {idNoticia:11,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:12,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:13,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:14,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:15,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:16,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:17,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:18,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:19,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
    {idNoticia:20,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",categoria:"Social"},
  ]

  

  relacionados:Relacionados[] = [
    {
      idNoticia:1,
      titulo:"ONU asevera que los talibanes ya han “refugiado” a miembros de Al Qaeda",
      imagen:"assets/images/afganistan.jpg ",
      contenido:"La Paz, 10 de septiembre (RC).- La enviada especial de la ONU para Afganistán, Deborah Lyons, informó que los talibanes ya han “acogido y refugiado visiblemente” a miembros de Al Qaeda, por lo que pidió a las autoridades y organizaciones internacionales que se unan para evitar el colapso de la economía de Afganistán, según el portal Infobae. Del mismo modo, la representante de la ONU explicó que el Consejo de Seguridad de la ONU deberá determinar cómo ser relacionará con los 33 miembros del gobierno talibán que están en la lista negra de sanciones de la ONU, ya que varias de las autoridades de dicho sector son personas buscadas por la ley. Por otro lado, Lyons advirtió de “una crisis inminente” causada por la congelación de miles de millones de dólares en activos afganos. La enviada de la ONU explicó que dicha situación podría causar una recesión económica que dejaría a millones de afganos en la pobreza.",
      fecha:"11/09/2021",
      autor:"Radio Compañera",
      categoria:"Social"
    },
    {idNoticia:2,
      titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",
    imagen:"assets/images/noticia2.jpg",
    contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",
    autor:"Radio Compañera",
    categoria:"Social"
  },
    {idNoticia:3,
      titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",
    imagen:"assets/images/noticia3.jpg"
    ,contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",
    autor:"Radio Compañera",
    categoria:"Social"
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
}

interface Noticias {
  idNoticia: number;
  titulo: string;
  imagen: string;
  contenido: string;
  fecha: string;
  //autor: string;
  categoria: string;
}

/*interface NoticiaPrincipal {
  idNoticia: number;
  titulo: string;
  imagen: string;
  contenido: string;
  fecha: string;
  //autor: string;
  categoria: string;
}*/

interface Relacionados {
  idNoticia: number;
  titulo: string;
  imagen: string;
  contenido: string;
  fecha: string;
  autor: string;
  categoria: string;
}
