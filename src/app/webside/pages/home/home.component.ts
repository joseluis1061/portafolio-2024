import { Component, Renderer2, ElementRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { SectionActiveService } from 'src/app/services/section-active.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('home', {static: true}) home!: ElementRef;

  x: number = 0;
  y: number = 0;
  rainbow:number = 5;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private sectionActiveService: SectionActiveService
  ){}

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const rect = this.home.nativeElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= 200) {
        this.sectionActiveService.sectionUpdate = 'black';
      }
    });
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

    const containerRect = container.getBoundingClientRect();
    const offsetX = this.x - containerRect.left;
    const offsetY = this.y - containerRect.top;

    gsap.set(particle, {
      top: offsetY,
      left: offsetX,
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
        this.renderer.removeChild(container, particle);
      }
    });
  }
}
