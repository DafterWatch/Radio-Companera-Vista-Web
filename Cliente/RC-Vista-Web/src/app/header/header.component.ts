import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logo = "assets/images/logoRadioCompañera.jpg";
  categorias: Categoria[] = [
    {idCategoria: 1, nombre: 'Futuro'},
    {idCategoria: 2, nombre: 'Viajes'},
    {idCategoria: 3, nombre: 'Gente y Lugares'}
  ];
  value = 'Clear me';
}
interface Categoria {
  idCategoria: number;
  nombre: string;
}
