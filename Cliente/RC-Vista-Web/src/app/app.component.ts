import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { PasarDatosSwitchService } from './pasar-datos-switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RC-Vista-Web';
  
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor(private overlay: OverlayContainer,private pasarDatos:PasarDatosSwitchService) { }

  ngOnInit(): void {

    this.pasarDatos.disparador.subscribe((data) => {
      
      const darkClassName = 'darkMode';      

        this.className = data.data ? darkClassName : '';
        
        if (data.data) {
          this.overlay.getContainerElement().classList.add(darkClassName);
        } else{
          this.overlay.getContainerElement().classList.remove(darkClassName);
        }
    })

  }

}
