import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-languages',
  templateUrl: './switch-languages.component.html',
  styleUrls: ['./switch-languages.component.scss']
})
export class SwitchLanguagesComponent {
  options = [
    {value: 'en', display: 'English', src:'../../../../assets/flags/usa.svg'},
    {value: 'es', display: 'Español', src:'../../../../assets/flags/spain.svg'}
  ];

  selectedLang: string;
  selectedOption: any;
  dropdownOpen = false;

  constructor(private translate: TranslateService) {
    this.selectedOption = this.options.find(option => option.value === (this.translate.currentLang || this.translate.getDefaultLang()));
    this.selectedLang = this.selectedOption.value;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onChange(lang: string) {
    this.translate.use(lang);
    this.selectedLang = lang;
    this.selectedOption = this.options.find(option => option.value === lang);
    this.dropdownOpen = false;
    console.log("Idioma: ", this.translate.currentLang);
    this.toggleDropdown();
  }

  // onChange(event: Event) {
  //   const lang = (event.target as HTMLSelectElement).value;
  //   this.translate.use(lang);
  //   this.selectedLang = lang;
  //   console.log("Idioma: ", this.translate.currentLang);
  // }



}
