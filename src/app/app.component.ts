import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'impetus-admin';
  spin:boolean = true;

  constructor(){

    setTimeout(()=>{
      this.spin = false;
    },1500);
    
  }

}
