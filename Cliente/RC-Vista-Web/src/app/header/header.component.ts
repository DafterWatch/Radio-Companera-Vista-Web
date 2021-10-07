import { Component, HostBinding, OnInit, ViewEncapsulation, Output,  EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  
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
    {idCategoria: 1, nombre: 'Internacional'},
    {idCategoria: 2, nombre: 'Moda'},
    {idCategoria: 3, nombre: 'Ciencia y tecnologia'}
  ];
  value = 'Clear me';
  volverPrincipal(){
    this.router.navigate(['paginaPrincipal']);
    window.scroll(0,0);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }


  public AbrirTopNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    }
    else {
    x.className = "topnav";
      }
}
}
interface Categoria {
  idCategoria: number;
  nombre: string;
}

