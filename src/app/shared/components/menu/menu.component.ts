import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges{

  @Input() active: boolean = false;
  @Output() activeStateChange = new EventEmitter<boolean>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes: ", changes)
  }


  changeHiddenMenu(){
    this.active = !this.active;
    console.log("Emitir")
    this.activeStateChange.emit(this.active);
  }

}
