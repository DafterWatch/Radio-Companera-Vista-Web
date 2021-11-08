import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit, ViewEncapsulation, Output,  EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { PasarDatosSwitchService } from '../pasar-datos-switch.service';
import { PasarBusquedaNoticiasService } from '../pasar-busqueda-noticias.service';
import { BuscarCategoriaService } from '../buscar-categoria.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private http:HttpClient,
    private pasarDatos:PasarDatosSwitchService, 
    private pasarDatosBusqueda:PasarBusquedaNoticiasService,
    private pasarDatosBusquedaCategoria: BuscarCategoriaService
    ) { }

  

  ngOnInit(): void {
    //this.getConfiguracion();
    this.extraCategorias = false;
    this.getConfiguracion();
    this.getCategorias();
  }
  logo;
  facebook = "assets/images/facebook.png";
  twitter = "assets/images/twitter.png";
  youtube = "assets/images/youtube.png";

  extraCategorias;
  categorias: Categoria[] = [
    {id_categoria: 1, nombre: 'Internacional', estado: true},
    {id_categoria: 2, nombre: 'Moda', estado: true},
    {id_categoria: 3, nombre: 'Ciencia y tecnologia', estado: true}
  ];
  categoriasAux: Categoria[] = [];
  categoriasDefecto: Categoria[] = [];

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

  eventoBusquedaCategoria(textoB:string){
    this.pasarDatosBusquedaCategoria.disparador.emit({
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
    async getCategorias():Promise<void>{
      await this.http.post(this.serverDirection+"/getCategorias","1").toPromise()
      .then((res:any)=>this.categoriasAux = res);
      for(let j = 0; j<this.categoriasAux.length; j++){
        if(j > 4){
          this.categorias.push(this.categoriasAux[j]);
          this.extraCategorias = true;
        } else {
          this.categoriasDefecto.push(this.categoriasAux[j]);
          this.extraCategorias = false;       
        }
      }
    }
}
interface Categoria {
  id_categoria: number;
  nombre: string;
  estado: boolean;
}
interface Configuracion{
  titulo:string,
  banner:string
}

