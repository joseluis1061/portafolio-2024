import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SectionActiveService } from 'src/app/services/section-active.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements AfterViewInit {
  @ViewChild('aboutme', {static: true}) aboutme!: ElementRef;

  constructor(
    private sectionActiveService: SectionActiveService
  ){}


  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const rect = this.aboutme.nativeElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= 200) {
        this.sectionActiveService.sectionUpdate = 'white';
      }
    });
  }


}
