import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor(public router: Router) { }

  

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((val) =>{
      this.className = val ? 'darkmode' : '';
    });
  }
  logo = "assets/images/logoRadioCompañera.jpg";
  categorias: Categoria[] = [
    {idCategoria: 1, nombre: 'Futuro'},
    {idCategoria: 2, nombre: 'Viajes'},
    {idCategoria: 3, nombre: 'Gente y Lugares'}
  ];
  value = 'Clear me';
  volverPrincipal(){
    this.router.navigate(['paginaPrincipal']);
    window.scroll(0,0);
  }
}
interface Categoria {
  idCategoria: number;
  nombre: string;
}
