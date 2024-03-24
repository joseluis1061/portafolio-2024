import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SectionActiveService } from 'src/app/services/section-active.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  logo!: string;
  menu!: string;
  active: boolean = false;
  typeSection: string = 'black';

  constructor(
    private sectionActiveService: SectionActiveService
  ){}

  public sectionSuscribe$ !: Subscription;
  ngOnInit() {
    this.setImageBasedOnScreenSize();
    this.sectionSuscribe$ = this.sectionActiveService.section$
      .subscribe(arg => {
        this.typeSection = arg;
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setImageBasedOnScreenSize();
  }

  private setImageBasedOnScreenSize() {
    const screenWidth = window.innerWidth;
    // Lógica para determinar la ruta de la imagen según el tamaño de la pantalla
    if (screenWidth < 768) {
      this.logo = '../../../../assets/global/Logo-sm.svg';
      this.menu = '../../../../assets/global/menu-sm.png';
    } else {
      this.logo = '../../../../assets/global/Logo-lg.svg';
      this.menu = '../../../../assets/global/menu-lg.svg';
    }
  }

  activeMenu(){
    this.active = !this.active;
  }

  changeHiddenMenu(event:boolean){
    this.active = event;
  }

  ngOnDestroy(): void {
    this.sectionSuscribe$.unsubscribe();
  }
}
