import { HttpClient } from '@angular/common/http';
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

  constructor(public router: Router, private http:HttpClient) { }

  

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((val) =>{
      this.className = val ? 'darkmode' : '';
    });
    this.getConfiguracion();
  }
  logo;
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
  configuracion:Configuracion[] = [];
  serverDirection :string = 'http://localhost:3000';
  async getConfiguracion():Promise<void>{
    await this.http.post(this.serverDirection+"/getConfiguraciones","1").toPromise()
    .then((res:any)=>this.configuracion=res);
    this.logo = this.configuracion[0].banner;
  }

}
interface Categoria {
  idCategoria: number;
  nombre: string;
}
interface Configuracion{
  titulo:string,
  banner:string
}

