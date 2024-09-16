import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-switch-languages',
  templateUrl: './switch-languages.component.html',
  styleUrls: ['./switch-languages.component.scss']
})
export class SwitchLanguagesComponent {
  options = [
    {value: 'en', display: 'English'},
    {value: 'es', display: 'Español'}
  ];

  constructor(private translate: TranslateService){};

  onChange(event: Event){
    const lang = (event.target as HTMLSelectElement).value;
    console.log("Selección: ", lang);
    this.translate.use(lang);
    console.log("Idioma: ", this.translate.currentLang)
  }


}
