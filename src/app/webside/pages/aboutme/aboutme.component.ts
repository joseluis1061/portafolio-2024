import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SectionActiveService } from 'src/app/services/section-active.service';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
interface Skill {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('aboutme', {static: true}) aboutme!: ElementRef;
  private subscription!: Subscription;
  soft_skills: Skill[] = [];

  constructor(
    private sectionActiveService: SectionActiveService,
    private translate: TranslateService,
    private changeDetectorRef: ChangeDetectorRef
  ){}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.subscription = this.translate.stream('about_me.soft_skills').subscribe((soft_skills: Skill[]) => {
      this.soft_skills = soft_skills;
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const rect = this.aboutme.nativeElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= 200) {
        this.sectionActiveService.sectionUpdate = 'white';
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
