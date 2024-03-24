import { Component, Renderer2, ElementRef, AfterViewInit, HostListener } from '@angular/core';
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

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const particle = this.renderer.createElement('span');
    this.renderer.appendChild(this.el.nativeElement, particle);

    const container = this.el.nativeElement.querySelector('#home-container');
    this.renderer.appendChild(container, particle);

    const size = Math.random() * 120 + 30;
    this.rainbow += 2;
    this.x = e.clientX;
    this.y = e.clientY;

    gsap.set(particle, {
      x: 0,
      y: 0,
      width: size,
      height: size,
      position: 'absolute',
      borderRadius: '50%',
      zIndex: -2,
      filter: `blur(${(1 - ((size - 30) / 120)) * 10}px)`,
      backgroundColor: `hsl(${this.rainbow}, 70%, 50%)`
    });

    gsap.to(particle, {
      x: '+=random(-200, 200)',
      y: '+=random(-200, 200)',
      opacity: 0,
      duration: 'random(4, 7)',
      ease: 'power2.out',
      onComplete: () => {
        // this.renderer.removeChild(this.el.nativeElement, particle);
        // const container = this.el.nativeElement.querySelector('#home');
        this.renderer.removeChild(container, particle);
      }
    });
  }
}
/*







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
        console.log('Parti')
        return particle.remove();
      }
    });
  }
*/
