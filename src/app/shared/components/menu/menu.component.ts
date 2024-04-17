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

  copyToClipboard(value: string): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
