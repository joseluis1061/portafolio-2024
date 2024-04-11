import { Component } from '@angular/core';

interface Step {
  label: string;
}


@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.scss']
})
export class ExpirienceComponent {

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

}
