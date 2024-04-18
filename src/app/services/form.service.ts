import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormModel } from '../models/forms.model';
import { Observable, catchError, ErrorNotification, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  submitForm(formData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams(formData).toString();

    return this.http.post('/', body, { headers })
      .pipe(map(response => {
        console.log('Form successfully submitted');
        return response;
      }))
  }
}
