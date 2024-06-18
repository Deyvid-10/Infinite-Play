import { Component, inject} from '@angular/core';
import { SweetAlertService } from '../sweet-alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  // Inyecta los servicios de sweetAlert y FormBuilder
  private alert = inject (SweetAlertService)
  private fb = inject (FormBuilder)
  
  // Creación del formulario
  messageForm: FormGroup = this.fb.group({})

  ngOnInit()
  {
    this.messageForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required]
      })
  }

  // Función para enviar el formulario
  toSend(): void
  {
    //Velicar si el dato ingresado en el input email es un correo electrónico
    let regexEmail = /.+@\w+[.]\w+/

    if(!regexEmail.test(this.messageForm.value.email))
    {
      this.alert.messageAlert("Campo para e-mail con formato inválido", "error")
      
      return
    }

    // Vaciar el formulario
    this.messageForm.reset()
    
    this.alert.messageAlert("Mensaje enviado satisfactoriamente", "success")
  }
}
