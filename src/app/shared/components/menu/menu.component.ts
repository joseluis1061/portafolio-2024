import { Component, Input, Output, EventEmitter,  } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() active: boolean = false;
  @Output() activeStateChange = new EventEmitter<boolean>()

  changeHiddenMenu(){
    this.active = !this.active;
    this.activeStateChange.emit(this.active);
  }
}
