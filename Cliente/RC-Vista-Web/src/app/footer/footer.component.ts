import { Component, OnInit ,} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logo = "assets/images/logoRadioCompañera.jpg";
  facebook = "assets/images/facebook.png";
  twitter = "assets/images/twitter.png";
  youtube = "assets/images/youtube.png";
}
