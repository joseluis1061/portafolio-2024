import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

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

  constructor(
    private formServise: FormService
  ){}

  ngOnInit(): void {
    this.initFormParent();
  }

  onSubmit() {
    const name = this.formContactMe.get('name')?.value;
    const email = this.formContactMe.get('email')?.value;
    const message = this.formContactMe.get('message')?.value;

    this.formServise.submitFeedback(this.formContactMe.value).subscribe({
      next: () => {
        this.formContactMe.reset();
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
