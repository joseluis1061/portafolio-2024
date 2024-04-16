import { Component, Input, AfterContentInit } from '@angular/core';
interface Source {
  path: string;
  media: string;
}
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements AfterContentInit{
  srcset: string = '';
  media: string = '';
  sources: Source[] = [];

  @Input() path: string = '';
  @Input() alt: string = '';

  ngAfterContentInit(): void {
    this.generateSizes();
  }

  generateSizes(){
    // Descomposición de nombre de imagen, path y extensión
    const splitPath = this.path.split('/');
    const fullName = splitPath.pop();
    const path = splitPath.join('/');
    const splitName = fullName?.split('.') ?? [];
    const ext = splitName.pop();
    const name = splitName.pop();

    // Ruta de imagenes
    this.sources = [
      {
        path: `${path}/${name}-large.webp`,
        media: '(min-width: 2000px)',
      },
      {
        path: `${path}/${name}-medium.webp`,
        media: '(min-width: 640px)',
      },
      {
        path: `${path}/${name}-small.webp`,
        media: '(min-width: 200px)',
      },
      {
        path: `${path}/${name}-large.${ext}`,
        media: '(min-width: 2000px)',
      },
      {
        path: `${path}/${name}-medium.${ext}`,
        media: '(min-width: 640px)',
      },
      {
        path: `${path}/${name}-small.${ext}`,
        media: '(min-width: 200px)',
      },
    ];
  }

}
