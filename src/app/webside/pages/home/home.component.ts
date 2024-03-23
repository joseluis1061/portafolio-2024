import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  x: number = 0;
  y: number = 0;
  rainbow:number = 5;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ){}

  ngAfterViewInit(): void {
    //this.createParticle();
  }

  onMouseMove(event: MouseEvent) {
    this.rainbow += 2;

    // Generamos un tamaño aleatorio para la partícula entre 30 y 150 píxeles
    const size = Math.random() * 120 + 30;
    console.log(`Posición del mouse: X = ${event.clientX}, Y = ${event.clientY}`);
    this.x = event.clientX;
    this.y = event.clientY;

    let particle = this.renderer.createElement('span');
    this.renderer.addClass(particle, 'particle');

    // const text = this.renderer.createText('Hola mundo!');
    // this.renderer.appendChild(particle, text);

    const container = this.el.nativeElement.querySelector('#home');
    this.renderer.appendChild(container, particle);



    gsap.set('particle', {
      x: this.x - size / 2, // Posición X de la partícula
      y: this.y - size / 2, // Posición Y de la partícula
      width: size, // Ancho de la partícula
      height: size, // Altura de la partícula
      filter: `blur(${(1 - ((size - 30) / 120)) * 10}px)`, // Desenfoque de la partícula (calculado dinámicamente)
      backgroundColor: `hsl(${this.rainbow}, 70%, 50%)` // Color de fondo de la partícula (basado en rainbow)
    });

    gsap.to(particle, {
      x: '+=random(-200, 200)',
      y: '+=random(-200, 200)',
      opacity: 0,
      duration: 'random(4, 7)',
      ease: 'power2.out',
      onComplete: () => {
        console.log('Particula')
        return particle.remove();
      }
    });
  }

}
