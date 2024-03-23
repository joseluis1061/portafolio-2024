import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  x: number = 0;

  onMouseMove(event: MouseEvent) {
    console.log(`Posición del mouse: X = ${event.clientX}, Y = ${event.clientY}`);
    this.x = event.clientX;
  }

}
