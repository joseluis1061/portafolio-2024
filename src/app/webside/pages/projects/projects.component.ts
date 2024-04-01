import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  gallery!: HTMLElement;
  track!: HTMLElement;
  cards!: NodeListOf<Element>;
  easing: number = 0.05;
  startY: number = 0;
  endY: number = 0;
  raf!: number;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  /*
  ngOnInit(): void {
    // Obtener elementos del DOM
    this.gallery = this.el.nativeElement.querySelector('.gallery');
    this.track = this.el.nativeElement.querySelector('.gallery-track');
    this.cards = this.el.nativeElement.querySelectorAll('.card');

    // Iniciar la actualización del desplazamiento cuando la página se carga completamente
    this.updateScroll();

    // Iniciar la inicialización del efecto de paralaje cuando se desplaza la página
    this.init();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Inicialización del efecto de paralaje cuando se desplaza la página
    this.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Actualizar el desplazamiento cuando se cambia el tamaño de la ventana del navegador
    this.updateScroll();
  }

  updateScroll(): void {
    this.startY = this.lerp(this.startY, this.endY, this.easing);
    this.renderer.setStyle(this.gallery, 'height', `${this.track.clientHeight}px`);
    this.renderer.setStyle(this.track, 'transform', `translateY(-${this.startY}px)`);
    this.activateParallax();
    this.raf = requestAnimationFrame(() => this.updateScroll());
    if (this.startY.toFixed(1) === window.scrollY.toFixed(1)) cancelAnimationFrame(this.raf);
  }

  init(): void {
    this.activateParallax();
    this.startScroll();
  }

  startScroll(): void {
    this.endY = window.scrollY;
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => this.updateScroll());
  }

  parallax(card: Element): void {
    const wrapper = card.querySelector('.card-image-wrapper');
    if (wrapper instanceof HTMLElement) {
      const diff = wrapper.offsetHeight - wrapper.offsetHeight;
      const { top } = card.getBoundingClientRect();
      const progress = top / window.innerHeight;
      const yPos = diff * progress;
      this.renderer.setStyle(wrapper, 'transform', `translateY(${yPos}px)`);
    }
  }

  activateParallax(): void {
    this.cards.forEach(card => this.parallax(card));
  }

  lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  */
}
