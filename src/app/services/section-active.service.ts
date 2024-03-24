import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SectionActiveService {

  private section = new BehaviorSubject<string>('black');
  public section$ = this.section.asObservable();

  constructor() { }

  get getSectionActive(): string{
    return this.section.value;
  }

  set sectionUpdate(section: string) {
    this.section.next(section)
  }
}
