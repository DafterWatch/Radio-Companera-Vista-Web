import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.getConfiguracion();
  }
  logo;
  titulo; 
  facebook = "assets/images/facebook.png";
  twitter = "assets/images/twitter.png";
  youtube = "assets/images/youtube.png";
  volverPrincipal(){
    this.router.navigate(['paginaPrincipal']);
    window.scroll(0,0);
  }
  configuracion:Configuracion[] = [];
  serverDirection :string = 'http://localhost:3000';
  async getConfiguracion():Promise<void>{
    await this.http.post(this.serverDirection+"/getConfiguraciones","1").toPromise()
    .then((res:any)=>this.configuracion=res);
    this.titulo = this.configuracion[0].titulo;
    this.logo = this.configuracion[0].banner;
  }
}
interface Configuracion{
  titulo:string,
  banner:string
}
