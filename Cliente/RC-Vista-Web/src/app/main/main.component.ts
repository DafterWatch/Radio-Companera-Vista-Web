import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {    
  }

  noticias:Noticias[] = [
    {idNoticia:1,titulo:"Dos niños escaparon de sus casas y amenazaron con suicidarse si no lo dejaban tener una relacion sentimental",imagen:"assets/images/noticia1.jpg "},
    {idNoticia:2,titulo:"Caso Anakin: Padre de la víctima asegura que abogada de Álvaro intenta cambiar los sucesos del crimen",imagen:"assets/images/noticia2.jpg"},
    {idNoticia:3,titulo:"Fiscalía solicita detención preventiva para los acusados de la muerte de Mayerly",imagen:"assets/images/noticia3.jpg"},
    {idNoticia:4,titulo:"Accidente en Santa Cruz deja tres personas fallecidas y siete heridas",imagen:"assets/images/noticia4.jpg"},
    {idNoticia:5,titulo:"El Banco Central Europeo advirtió que la variante delta puede retrasar la apertura total de la economía",imagen:"assets/images/noticia5.jpg"},
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

}
interface Noticias {
  idNoticia: number;
  titulo: string;
  imagen: string;
}