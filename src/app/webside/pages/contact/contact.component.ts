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

  mailSend: boolean = false;
  mailFail: boolean = false;
  failInputs: boolean = false;

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

    if(this.formContactMe.valid){
      this.mailSend = true;
      setTimeout(()=> {
        this.mailSend = false;
        this.formContactMe.reset();
      }, 3000)
    }else{
      this.failInputs = true;
      setTimeout(()=> {
        this.failInputs = false;
      }, 3000)
    }

    /*
    this.formServise.submitForm(this.formContactMe.value).subscribe({
      next: () => {
        this.formContactMe.reset();
        console.log("Envio de correo");
        this.mailSend = true;
        setTimeout(()=> {
          this.mailSend = false;
        }, 1000)
      },
      error: error => {
        console.log(error)
        this.mailSend = false;
      }
    })*/
  }

  eliminarScript(texto: string): string {
    let textoLimpio = texto.replace(/<script>/gi, '');
    textoLimpio = textoLimpio.replace(/<\/script>/gi, '');
    return textoLimpio;
  }

  async enviarMensaje(e: SubmitEvent){
    e.preventDefault();
    if(this.formContactMe.valid){
      const {name, email, message} = this.formContactMe.getRawValue();

      this.formContactMe.setValue({
        "name": this.eliminarScript(name),
        "email": this.eliminarScript(email),
        "message": this.eliminarScript(message)
      })

      const res = await fetch("/.netlify/functions/formularioContacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.formContactMe.value)
      })

      console.log("Respuesta", res)
      if(res.status === 200){
        // Exitoso
        this.mailSend = true;
        setTimeout(()=> {
          this.mailSend = false;
          this.formContactMe.reset();
        }, 2000)
      }else{
        this.mailFail = true;
        setTimeout(()=> {
          this.mailFail = false;
        }, 2000)
      }
    }
  }
}
