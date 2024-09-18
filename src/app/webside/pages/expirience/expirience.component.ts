import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
interface Education {
  title: string;
  description: string;
}
interface Jobs {
  title: string;
  descriptions: [];
}
@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.scss']
})
export class ExpirienceComponent implements OnInit, OnDestroy{

  idCurrentItem: number = 0;
  educations: Education[] = [];
  jobs: Jobs[] = [];
  educationSubs!: Subscription;
  jobsSubs!: Subscription;

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

  constructor(
    private translate: TranslateService
  ){}



  ngOnInit(): void {
    if(this.itemNavigate.length > 0 && this.idCurrentItem === 0){
      this.selectItem(this.itemNavigate[0].id);


      this.educationSubs = this.translate.stream('experience.education').subscribe((educations: Education[]) => {
        this.educations = educations;
      });

      this.jobsSubs = this.translate.stream('experience.jobs').subscribe((jobs: Jobs[]) => {
        this.jobs = jobs;
      });
    }
  }

  //Función para activar un paso
  selectItem(id: number){
    if(id !== this.idCurrentItem){
      this.idCurrentItem = id;
    }
  }

  ngOnDestroy(): void {
    this.educationSubs.unsubscribe();
    this.jobsSubs.unsubscribe();
  }

}
