import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Track } from 'ngx-audio-player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public router: Router) { }
  ngOnInit(): void {  
    window.scroll(0,0);  
  }

  //-------------------------------------------- Carrusel ----------------------------------------------
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
    categoria:"Seguridad"
  },
    {idNoticia:3,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",
    imagen:"assets/images/noticia3.jpg",
    contenido:"La Fiscalía de La Paz solicitó hoy de manera formal detención preventiva para los dos acusados del asesinato de Mayerly, el autor confeso del crimen, Matusalén M., será enviado a la cárcel de Chonchocoro y Roberto a San pedro, informó la fiscal Dubravka Jordan. “Se está solicitando para el autor del crimen, Matusalén, pueda ser enviado a Chonchocoro y Roberto en el penal de San Pedro. Este ilícito es calificado como feminicidio”, aseguró la fiscal. La autoridad judicial indicó que la madre de la víctima y su hermana menor implicaron en el caso a Roberto porque Mayerly afirmó que se encontraba con Rolando Quispe, nombre ficticio que era usado por Roberto en Redes Sociales. Por otro lado, la familia de Roberto asegura que es inocente, Matusalén mencionó a esta persona para usarlo como coartada, la Policía continúa con las investigaciones respecto al hecho.",
    fecha:"09/09/2021",categoria:"Seguridad"
  },
    {idNoticia:4,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",
    imagen:"assets/images/noticia4.jpg",
    contenido:"En la carretera Camiri – Santa  Cruz, ruta 34,  se produjo un choque entre un bus interprovincial  y un automóvil que dejó tres personas fallecidas y siete heridas, según información de medios locales. De acuerdo a la investigación inicial de la Policía los los cadáveres quedaron atrapados entre los fierros de la vagoneta que quedó destruida por el fuerte impacto, debido a este el motor del vehículo se encontraba a unos 10 metros del lugar. Testigos que evidenciaron el hecho describieron que el vehículo trato de adelantar a un motorizado, impactando de manera directa con el bus. De las personas heridas dos serán ingresadas a terapia intensiva.",
    fecha:"09/09/2021",categoria:"Seguridad"
  },
    {idNoticia:5,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",
    imagen:"assets/images/noticia5.jpg",
    contenido:"La presidenta del Banco Central Europeo (BCE), Christine Lagarde, advirtió que la variante delta puede retrasar la apertura total de la economía, por lo que destacó la importancia de que las personas se inmunicen contra el coronavirus, según el portal Infobae. “La propagación de la variante delta no ha requerido que se vuelvan a imponer medidas de confinamiento, pero podría ralentizar la recuperación en el comercio global y la reapertura completa de la economía”, indicó Lagarde. Del mismo modo, la presidenta del BCE explicó que el aumento de la inmunidad al coronavirus significa que “el impacto de la pandemia es ahora menos duro”, sin embargo, advirtió que “la propagación en todo el mundo de la variante delta podría retrasar la reapertura completa de la economía”.",
    fecha:"09/09/2021",categoria:"Social"
  },
    {idNoticia:6,titulo:"Clausuran negocio de comida donde denunciaron el hallazgo de un dedo humano en una hamburguesa",
    imagen:"assets/images/noticia6.jpg",
    contenido:"El restaurant Hot Burger que fue denunciado con fotografías al encontrar en una hamburguesa un dedo humano fue clausurado por funcionarios del Viceministerio de Defensa al Consumidor, quienes llegaron la tarde de este lunes al lugar ubicado en el tercer anillo de la avenida San Aurelio en la ciudad de Santa Cruz.La encargada de la instancia gubernamental, Giancarla Bojanic, informó que se iniciará  una investigación para precautelar los derechos de los consumidores.“Nos hicimos presente para clausurar de manera temporal Hot Burger hasta que esta denuncia sea aclarada, estamos trabajando de manera coordinada con la Fiscalía y la Fuerza Especial de Lucha Contra el Crimen”, informó la autoridad. Asimismo, trabajadores del negocio de comida rápida prestaron su declaración informativa para esclarecer el hecho. En imágenes y videos que circulan en Redes Sociales se evidencia el hallazgo del dedo humano, poco después los usuarios increpan a la responsable del lugar, quien indica que el producto les llega elaborado. “Esta sucursal nunca ha tenido problemas, esto escapa de nuestras manos, pero lo que ustedes quieran les vamos a dar”, manifestó la funcionaria.",
    fecha:"13/09/2021",categoria:"Seguridad"
  },
    {idNoticia:7,titulo:"Cotoca: Sujeto que presuntamente asesinó a su esposa e hijastra con una picota fue capturado por la Policía",
    imagen:"assets/images/noticia7.jpg",
    contenido:"La Paz, 13 de septiembre (RC).- La Policía capturó a medio día de este lunes a Fernando M. A., después de darse a la fuga tras presuntamente asesinar a su esposa e hijastra, en el municipio de Cotoca en Santa Cruz.José María Velasco, director de la Fuerza Especial de Lucha Contra la Violencia (FELCV), informó que el acusado fue encontrado escondido entre unos matorrales. De acuerdo al informe preliminar las víctimas Florentina Cordero Ortega, de 36 años, y Adelaida Candia Codero, de 18, mantenían una relación sentimental con el presunto feminicida. El asesinato ocurrió en presencia de cuatro niños de entre 1 y 10 años, los cuales se encuentran en protección de la Defensoría de la Niñez.",
    fecha:"13/09/2021",categoria:"Seguridad"
  },
    {idNoticia:8,titulo:"Notificarán al ministro de Educación para declarar por el caso “tráfico de exámenes”",
    imagen:"assets/images/noticia8.jpg",
    contenido:"Abel Loma, abogado de la viceministra de Educación Superior, Aura Balderrama, informó que se notificará al ministro de Educación, Adrián Quelca, para que preste su declaración por el caso “tráfico de exámenes”. La autoridad de educación es el principal acusado y no goza de ningún beneficio, acotó. “Llamó la atención al Ministerio Púbico para que se puedan determinar la veracidad y la participación de las personas, Adrián Quelca será notificado para que pueda declarar de manera informativa en calidad de denunciado”, manifestó Loma a Radio Compañera. En el proceso ya declararon más de 11 personas y todas indicaron que perdieron sus celulares, los cuales serían sometidos a una pericia para recuperar la información. “Los investigadores asignados empezaron a tomar declaraciones a diferentes testigos que tienen cargos directivos en el sistema educativo plurinacional de Bolivia y todos misteriosamente perdieron sus celulares”, detalló.",
    fecha:"13/09/2021",categoria:"Seguridad"
  },
    {idNoticia:9,titulo:"Médicos de Reino Unido piden vacunar a los menores de 12 a 15 años",
    imagen:"assets/images/noticia9.jpg",
    contenido:"Los asesores médicos del Gobierno británico solicitaron mediante un comunicado que todos los menores entre 12 y 15 años reciban una primera dosis de la vacuna contra el coronavirus de Pfizer, según el portal La Vanguardia. “COVID es una enfermedad que puede transmitirse de manera muy efectiva por propagación masiva en eventos, especialmente con la variante delta”, indicó el comunicado y resaltó que la inmunización de los menores reducirá la posibilidad de que se generen brotes de la pandemia en centros educativos. Asimismo, los médicos manifestaron que la vacunación de los menores reducirá las alteraciones en la educación y prevén que se realice la inmunización a alrededor de tres millones de menores de edad. Dichas declaraciones fueron realizadas pese a que el Comité Conjunto de Vacunación e Inmunización (JCVI) desaconsejó la vacunación en masa a menores de edad.",
    fecha:"11/09/2021",categoria:"Internacional"
  },
    {idNoticia:10,titulo:"ONU asevera que los talibanes ya han “refugiado” a miembros de Al Qaeda",
    imagen:"assets/images/noticia10.jpg",
    contenido:"La enviada especial de la ONU para Afganistán, Deborah Lyons, informó que los talibanes ya han “acogido y refugiado visiblemente” a miembros de Al Qaeda, por lo que pidió a las autoridades y organizaciones internacionales que se unan para evitar el colapso de la economía de Afganistán, según el portal Infobae. Del mismo modo, la representante de la ONU explicó que el Consejo de Seguridad de la ONU deberá determinar cómo ser relacionará con los 33 miembros del gobierno talibán que están en la lista negra de sanciones de la ONU, ya que varias de las autoridades de dicho sector son personas buscadas por la ley. Por otro lado, Lyons advirtió de “una crisis inminente” causada por la congelación de miles de millones de dólares en activos afganos. La enviada de la ONU explicó que dicha situación podría causar una recesión económica que dejaría a millones de afganos en la pobreza.",
    fecha:"10/09/2021",categoria:"Internacional"
  },
    {idNoticia:11,titulo:"Najib Mikati, el hombre más rico de Líbano encargado de sacar a su país de una de las peores crisis de su historia",
    imagen:"assets/images/noticia11.jpg",
    contenido:"Trece meses después de la renuncia del exprimer ministro Hassan Diab -tras la explosión en el puerto de Beirut que dejó más de 200 muertos-, Líbano tiene finalmente un nuevo gobierno.El magnate de las comunicaciones Najib Mikati asumió este 10 de septiembre su puesto como primer ministro de la nacíon árabe y presentó en el Palacio Baabda de Beirut, la capital libanesa, un nuevo gabinete junto al presidente Michel Aoun y el jefe del Parlamento, Nabih Berri.A sus 65 años, este multimillonario sunita asume la cabeza de un gobierno libanés por tercera vez (ocupó el puesto de primer ministro brevemente en 2005 y luego entre 2011 y 2014). Al mismo tiempo insta a la clase política a trabajar conjuntamente para salir de la profunda crisis que atraviesa Líbano.Todos conocen la situación en el país, desde los mayores hasta los más pequeños, aseguró Najib Mikati en su discurso tras el anuncio de la formación de su gobierno. Los niños son privados de leche infantil, los niños se preguntan si irán a la escuela y quieren emigrar. Los padres han visto cómo sus ingresos pierden más del 80% de su valor y ya no saben cómo llegar a fin de mes. Y las madres, no encuentran medicamentos, agregó.",
    fecha:"11/09/2021",
    categoria:"Social"
  },
    {idNoticia:12,titulo:"Qué hay detrás de la histórica derrota del kirchnerismo en las primarias parlamentarias de Argentina (y por qué es importante)",
    imagen:"assets/images/noticia12.jpg",
    contenido:"En Argentina se la considera una derrota histórica.El gobernante Frente de Todos, liderado por los kirchneristas Alberto Fernández y la exmandataria Cristina Fernández de Kirchner, perdió las elecciones primarias de medio término en los principales distritos del país.La coalición gobernante apenas se impuso en 7 de los 24 distritos electorales y perdió el que era considerado su mayor bastión: la provincia de Buenos Aires.También perdió en la patagónica Santa Cruz, la cuna política de los Kirchner. El resultado de las primarias legislativas sorprendió a todos: la misma fuerza que hace dos años había logrado llegar al poder con el 48% de los votos, esta vez logró una adhesión de apenas el 30%.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:13,titulo:"Oruro: 5 ancianos del hogar La Sagrada Familia se encuentran en terapia intensiva tras el contagio masivo en el festejo del Día del Adulto Mayor",
    imagen:"assets/images/noticia13.jpeg",
    contenido:"El 26 de agosto se celebra el Día del Adulto Mayor y en el hogar La Sagrada Familia ese día hubo festejo. Las autoridades de Oruro afirmaron que esa fue la ocasión en la que los 90 ancianitos que viven allí estuvieron expuestos al virus Covid-19 y se contagiaron 77. La noticia del contagio masivo recién se hizo pública el 8 de agosto, día en que se registró un deceso.Desde entonces hasta la fecha, según informó el director del Servicio Departamental de Salud (Sedes) de Oruro, Juan Carlos Challapa, cinco adultos mayores continúan en terapia intensiva y 33 en terapia intermedia. La autoridad del Sedes explicó también que 24 ancianos están en el Centro de Inteligencia Epidemiológica (Cieso), mientras que los demás se encuentran recibiendo asistencia médica en los hospitales San Juan de Dios y en el Oruro-Corea. La noticia de este contagio masivo conmocionó a la población orureña, así como autoridades, que la semana pasada organizaron campañas solidarias para apoyar a los adultos mayores. Incluso, médicos se turnaron en dos grupos para darles asistencia las 24 horas.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:14,titulo:"Reportan que Sedcam controla el incendio en su campamento, pero el fuego salta a otros domicilios",
    imagen:"assets/images/noticia14.jpg",
    contenido:"Con maquinaria pesada y mucha tierra, los propios obreros del campamento Camargo, del Servicio Departamental de Caminos (Sedcam) lograron controlar el fuego, sin embargo, el mismo saltó a otros domicilios que son socorridos por los propios pobladores ante la ausencia de autoridades.Radio Camargo informó que hasta las 19:45 el fuego había sido controlado por la maquinaria que echó tierra sobre el fuego que amenazaba con extenderse a otros domicilios. Los pobladores esperaban el arribo de los bomberos de Tarija que son los más cercanos para atender este desastre.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:15,titulo:"Accidente vial deja cuatro muertos y heridos de gravedad",
    imagen:"assets/images/noticia15.jpg",
    contenido:"El accidente ocurrió este jueves, aproximadamente a las 9:30, a la altura del kilómetro 34, donde la vagoneta quedó completamente deshecha tras chocar con el bus que también quedó con serios daños en la parte frontal.Familiares llegaron hasta la morgue para reconocer los cuerpos. Una de las víctimas es Virginia Chacón (28), su mamá Mamerta Guerra (62), al llegar a la morgue de la Pampa de la Isla con su nieta de seis años, dijo que toda la semana presagió que algo le iba a suceder a su hija, aunque no imaginó que sería trágico.Guerra señaló que presintió la tragedia, luego que soñó que a su hija la llamaba su papá que ya es fallecido, por eso estuvo pendiente de ella los últimos días.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:16,titulo:"La actual Miss Universo publicó una foto en la que muestra sus pies y le ‘llovieron’ los comentarios",
    imagen:"assets/images/noticia16.jpg",
    contenido:"La Miss Universo, la mexicana Andrea Meza, ha levantado críticas, pero también ha recibido apoyo. Esta vez una foto que se tomó en Nueva York y que publicó en sus redes sociales ha convertido a sus pies en el centro de la atención. En la imagen se la ve luciendo un conjunto casual que deja ver sus piernas y también las sandalias que calza. De inmediato le llovieron las críticas en las redes y es que por la foto parecería que la reina universal tiene los dedos de los pies torcidos y que el calzado no le queda bien. Ni ella ni la Organización Miss Universo (OMU) se han pronunciado, ni han retirado de circulación la fotografía.Los seguidores más radicales de los concursos de belleza critican que sus dedos no sean como como el estándar y que esa foto no la favorece, que la OMU debería supervisar todo el material que sus reinas suben a las redes sociales, que se ve muy mal que una Miss Universo dé esa imagen de 'desprolijidad'. Estos críticos le aconsejan utilizar zapatos cerrados, informa el diario La Opinión.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:17,titulo:"Silvia Pinal celebró sus 90 años en compañía de su familia",
    imagen:"assets/images/noticia17.jpg",
    contenido:"No todos los días se cumplen 90 años, ni se sale de una grave enfermedad, dijo emocionada y feliz la última diva del cine mexicano, Silvia Pinal, en el festejo de su aniversario natal, que tuvo lugar de manera íntima en su casa de Ciudad de México, y la que asistieron todos los integrantes de su familia, que alcanza a cuatro generaciones.Desde hace varios días ya se sabía que la actriz iba a ser agasajada por su cumpleaños, pero que los asistentes serían limitados, porque la pandemia sigue fuerte en su país, ella viene de vencer una dolencia y tiene que evitar las aglomeraciones.Sus hijas Alejandra Guzmán y Sylvia Pasquel, y su nieta Michelle Salas fueron las encargas de la organización, y quienes hablaron en nombre de la familia. Dijeron que eran felices y agradecidas con Dios por la madre que les dio, abnegada y que se preocupa por todo ellos. Luego vinieron los mariachis que interpretaron las canciones preferidas de la anfitriona.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:18,titulo:"Sergio Ramírez denuncia en Madrid el exilio forzado que le impone Ortega",
    imagen:"assets/images/noticia18.jpg",
    contenido:"Antes, el gobierno español rechazó las infundadas acusaciones contra el literato, ganador en 2017 del máximo galardón de las letras españolas, el Premio Cervantes. Ramírez ha demostrado siempre su compromiso en la defensa de la democracia en su país, afirmaron en un comunicado conjunto el ministerio de Asuntos Exteriores y el de Cultura, recordando su papel en la lucha contra el régimen de los Somoza desde el movimiento sandinista, al lado precisamente del actual presidente, Daniel Ortega.El ex presidente colombiano Juan Manuel Santos, que se encuentra en Madrid con la antigua candidata presidencial Ingrid Betancourt, presentando el libro de ambos Una conversación pendiente, tildó de oprobioso lo que está haciendo Ortega.  Es oprobioso, es la demostración de algo que está sucediendo en América Latina en muchos países, y está in crescendo, que es esa tendencia al autoritarismo y prácticamente hacia la dictadura, afirmó Santos.Tongolele no sabe bailar, la nueva obra del nicaragüense, es una entrega de las peripecias del inspector Dolores Morales, ambientada en las protestas de 2018, duramente reprimidas por el gobierno de Ortega.Las relaciones entre España y Nicaragua se tensaron a raíz de la campaña de detenciones de opositores, entre ellos siete aspirantes a la presidencia en las elecciones generales del 7 de noviembre.El presidente Daniel Ortega, de 75 años y en el poder desde 2007, se postula para un cuarto mandato sucesivo.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:19,titulo:"China hace millonaria donación a Afganistán sin obviar la amenaza terrorista",
    imagen:"assets/images/noticia19.jpg",
    contenido:"En una reunión con los ministros de Exteriores de los países vecinos de Afganistán, el canciller Wang Yi anunció la donación de 31 millones de dólares en ayudas a Afganistán para apoyar su recuperación. El diplomático pidió gestos similares a Estados Unidos y sus aliados para que asuman sus responsabilidades y advirtió del riesgo terrorista que aún se cierne sobre el país.Una vez anunciado el nuevo Gobierno de los talibanes en Afganistán, China ha empezado a mover sus fichas.El pasado miércoles 8 septiembre tuvo lugar una reunión virtual entre los ministros de Exteriores de los países limítrofes con Afganistán: China, Pakistán, Irán, Tayikistán, Uzbekistán y Turkmenistán.En la cumbre, el canciller chino, Wang Yi, anunció el envío de 31 millones de dólares en ayudas a Afganistán. Se trata de 200 millones de yuanes en grano, suministros para el invierno, vacunas y medicamentos, que se suman a otro lote de tres millones de dosis de vacunas contra el Covid-19. El ministro destacó que los países vecinos, más que nadie, quieren ayudar a que Afganistán salga del caos.Por ello, el diplomático aseguró que China está dispuesta a ayudar al país a construir nuevos proyectos de infraestructuras que hagan más fácil la vida de los ciudadanos afganos y, en la medida de sus posibilidades, apoyar la reconstrucción pacífica y el desarrollo económico una vez haya seguridad en el país.",
    fecha:"11/09/2021",categoria:"Social"
  },
    {idNoticia:20,titulo:"Droga ‘fina’ por autos ‘clonados’: el negocio crece en el salar de Coipasa",
    imagen:"assets/images/noticia20.jpg",
    contenido:"El lugar es inhóspito, pero ahí se hacen grandes negocios, todos ilegales. El intercambio de autos chutos por droga en el sur del salar de Coipasa está en su auge. Las mafias se apoderaron de la zona para operar. Según un informe de la Brigada Antinarcóticos y Contra el Crimen Organizado (Brianco) de la Policía de Investigaciones (PDI) de Chile, al que tuvo acceso EL DEBER, del lado chileno llegan los vehículos “clonados” y del lado boliviano la cocaína u otro tipo de drogas.El “negocio” se ejecuta hace tiempo, pero ahora -con un incremento notable- se modernizó el trueque. De un lado exigen motorizados último modelo y del otro bando droga de última generación, señala el informe.Layaca y Tres Cruces son los poblados en el lado boliviano donde se reúnen las mafias internacionales. Estas comunidades están en el sur del salar de Coipasa, que pertenece al departamento de Oruro. Los vehículos indocumentados siguen un segundo tramo: llegar a los poblados bolivianos donde los chutos son aceptados. Existen muchas rutas, pero la principal pasa por el municipio de Challapata, en Oruro.El informe de la Policía de Investigaciones (PDI) de Chile revela cómo operan las mafias en el lado chileno. Estos grupos roban las patentes (placas) de vehículos en diferentes puntos del vecino país y son llevadas a las ciudades ubicadas en el norte chileno para clonar motorizados. Desde ahí, los automóviles, todos último modelo y de marcas reconocidas, pasan a suelo boliviano para ser cambiados por droga.",
    fecha:"11/09/2021",categoria:"Social"
  },
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
  //-------------------------------Noticias-----------------------------------
  cantidadItems = 9;
  paginaActual = 1;
  cambioPagina(evento:any){
    this.paginaActual = evento;
    window.scroll(0,0);    
  }
  //@Input() noticiaEntrante:any;
  irNoticiaExpandida(noticia:any){
    /*this.noticiaEntrante = noticia;
    this.servicioNoticia.disparadorNoticia.emit({data:this.noticiaEntrante});
    console.log(this.noticiaEntrante)
    console.log("se envio los datos");*/
    sessionStorage.setItem('idNoticia',noticia.idNoticia);
    sessionStorage.setItem('titulo',noticia.titulo);
    sessionStorage.setItem('imagen',noticia.imagen);
    sessionStorage.setItem('contenido',noticia.contenido);
    sessionStorage.setItem('fecha',noticia.fecha);
    sessionStorage.setItem('categoria',noticia.categoria);
    this.router.navigate(['noticia']);
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