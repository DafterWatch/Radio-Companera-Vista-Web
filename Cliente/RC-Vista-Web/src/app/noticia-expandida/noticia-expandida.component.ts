import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-noticia-expandida',
  templateUrl: './noticia-expandida.component.html',
  styleUrls: ['./noticia-expandida.component.scss']
})
export class NoticiaExpandidaComponent implements OnInit, AfterContentInit {

  constructor() { }
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
    console.log(this.idNoticia,this.titulo,this.imagen,this.contenido,this.fecha,this.categoria);
  }
  /*public noticiaprincipal:NoticiaPrincipal= {
    idNoticia: this.noticiaEntrante.idNoticia,
    titulo: this.noticiaEntrante.titulo,
    imagen: this.noticiaEntrante.imagen,
    contenido: this.noticiaEntrante.contenido,
    fecha: this.noticiaEntrante.fecha,
    categoria: this.noticiaEntrante.categoria
  };*/
  noticias:Noticias[] = [
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
    contenido:"La Paz, 13 de septiembre (RC).- Abel Loma, abogado de la viceministra de Educación Superior, Aura Balderrama, informó que se notificará al ministro de Educación, Adrián Quelca, para que preste su declaración por el caso “tráfico de exámenes”. La autoridad de educación es el principal acusado y no goza de ningún beneficio, acotó.“Llamó la atención al Ministerio Púbico para que se puedan determinar la veracidad y la participación de las personas, Adrián Quelca será notificado para que pueda declarar de manera informativa en calidad de denunciado”, manifestó Loma a Radio Compañera. En el proceso ya declararon más de 11 personas y todas indicaron que perdieron sus celulares, los cuales serían sometidos a una pericia para recuperar la información.“Los investigadores asignados empezaron a tomar declaraciones a diferentes testigos que tienen cargos directivos en el sistema educativo plurinacional de Bolivia y todos misteriosamente perdieron sus celulares”, detalló.",
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
    {idNoticia:4,
      titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",
      imagen:"assets/images/noticia4.jpg",
      contenido:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb",
    fecha:"11/09/2021",
    autor:"Radio Compañera",
    categoria:"Social"
  },
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

}

interface Noticias {
  idNoticia: number;
  titulo: string;
  imagen: string;
  contenido: string;
  fecha: string;
  autor: string;
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
