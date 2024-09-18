import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio2024';

  constructor(private translate: TranslateService){
    this.translate.addLangs(['en', 'es']);
    const lang = this.translate.getBrowserLang();
    if(lang !=='en' && lang !== 'es'){
      this.translate.setDefaultLang('en');
    }else{
      this.translate.use(lang);
    }
  }
}
