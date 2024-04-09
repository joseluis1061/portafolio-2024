import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  formContactMe: FormGroup = new FormGroup({});

  initFormParent(): void {
    this.formContactMe = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.initFormParent();
  }

  onSubmit() {
    const name = this.formContactMe.get('name')?.value;
    const email = this.formContactMe.get('email')?.value;
    const message = this.formContactMe.get('message')?.value;
  }
}
