import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit, ViewEncapsulation, Output,  EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { PasarDatosSwitchService } from '../pasar-datos-switch.service';
import { PasarBusquedaNoticiasService } from '../pasar-busqueda-noticias.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private http:HttpClient,
    private pasarDatos:PasarDatosSwitchService, private pasarDatosBusqueda:PasarBusquedaNoticiasService
    ) { }

  

  ngOnInit(): void {
    this.getConfiguracion();
  }
  logo;
  facebook = "assets/images/facebook.png";
  twitter = "assets/images/twitter.png";
  youtube = "assets/images/youtube.png";
  
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
  textoBusqueda = "";
  eventoSwitch(event: MatSlideToggleChange){
    let cambioValor = event.checked
    this.pasarDatos.disparador.emit({
      data:cambioValor
    })
  }
  eventoBusqueda(textoB:string){
    this.pasarDatosBusqueda.disparador.emit({
      data:textoB
    });
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

