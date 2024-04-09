import { Component } from '@angular/core';
import { PROJECTS_DATA } from 'src/app/shared/constants/data/projects/projects.data';
import { Projects } from 'src/app/models/project.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  projects: Projects[] = PROJECTS_DATA;



}
