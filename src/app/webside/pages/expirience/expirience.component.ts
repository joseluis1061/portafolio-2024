import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.scss']
})
export class ExpirienceComponent implements OnInit{

  idCurrentItem: number = 0;


  itemNavigate = [
    {
      id: 1,
      title: "Billing 1"
    },
    {
      id: 2,
      title: "Billing 2"
    },
    {
      id: 3,
      title: "Billing 3"
    },
    {
      id: 4,
      title: "Billing 4"
    },
    {
      id: 5,
      title: "Billing 5"
    },
  ]

  ngOnInit(): void {
    if(this.itemNavigate.length > 0 && this.idCurrentItem === 0){
      this.selectItem(this.itemNavigate[0].id)
    }
  }

  //Función para activar un paso
  selectItem(id: number){
    if(id !== this.idCurrentItem){
      this.idCurrentItem = id;
    }
  }

}
