import { Component, OnInit ,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  logo = "assets/images/logoRadioCompañera.jpg";
  facebook = "assets/images/facebook.png";
  twitter = "assets/images/twitter.png";
  youtube = "assets/images/youtube.png";
  volverPrincipal(){
    this.router.navigate(['paginaPrincipal']);
    window.scroll(0,0);
  }
}
