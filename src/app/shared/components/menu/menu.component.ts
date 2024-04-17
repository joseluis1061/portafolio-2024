import { Component, Input, Output, EventEmitter, Inject,  } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() active: boolean = false;
  @Output() activeStateChange = new EventEmitter<boolean>()

  copyMail: boolean = false;

  constructor (
    @Inject(DOCUMENT) private document: Document
  ) {}

  toogleCopyMail(){
    this.copyMail = !this.copyMail;
    setTimeout(() => {
      this.copyMail = !this.copyMail;
    }, 2000);

  }

  toogleMenu(){
    this.active = !this.active;
    this.activeStateChange.emit(this.active);
  }

  public goto(page: string) {
    this.document?.getElementById(page)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
    this.toogleMenu();
  }

  async copyToClipboard(value: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      this.toogleCopyMail()
      console.log('Texto copiado con éxito!');
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  }
}
