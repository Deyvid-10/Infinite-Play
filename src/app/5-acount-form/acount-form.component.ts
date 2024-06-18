import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-acount-form',
  templateUrl: './acount-form.component.html',
  styleUrl: './acount-form.component.css'
})
export class AcountFormComponent {

    // Inyecta los servicios de sweetAlert
    private alert = inject (SweetAlertService)

    // Determina en qué ruta se encuentra la aplicación
    currentPage: string = ""

    constructor(private router: Router)
    {
      this.router.events.subscribe(event =>
        {
          if(event instanceof NavigationEnd)
          {
            this.currentPage = event.urlAfterRedirects
          }
        }
      )
    }

    // Creación del formulario
    private fb = inject (FormBuilder)
    acountForm: FormGroup = this.fb.group({})

   ngOnInit()
   {
    if(this.currentPage === "/signup" || this.currentPage === "/config-acount")
    {
      this.acountForm = this.fb.group({
        name: ["", Validators.required],
        lastName: ["", Validators.required],
        acount: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        address: ["", Validators.required],
        tel: ["", Validators.required]
        })
    }
    else
    {
      this.acountForm = this.fb.group({
        acount: ["", Validators.required],
        password: ["", Validators.required]
        })
    }     
   }

  //Validar si algunos campos ingresados  estructura
  showWarnningAcount: boolean = false
  showWarnningPass: boolean = false
  showWarnningConfirmPass: boolean = false
  showWarnningTel: boolean = false
   
  getAcount():void
  {
    let regexEmail = /.+@\w+[.]\w+/
    let regexTel = /^\d{10}$/
    let regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[\w\d\S]{8,}/

    !regexEmail.test(this.acountForm.value.acount) ? this.showWarnningAcount = true : this.showWarnningAcount = false

    !regexPass.test(this.acountForm.value.password) ? this.showWarnningPass = true : this.showWarnningPass = false
   
    this.acountForm.value.password !== this.acountForm.value.confirmPassword && this.currentPage !== "/login" ? this.showWarnningConfirmPass = true : this.showWarnningConfirmPass = false

    !regexTel.test(this.acountForm.value.tel) && this.currentPage !== "/login" ? this.showWarnningTel = true : this.showWarnningTel = false
  
    if(this.showWarnningAcount === true || this.showWarnningPass === true || this.showWarnningConfirmPass === true  || this.showWarnningTel === true)
    {
      return
    }

    console.log(this.acountForm.value);  
  }
}
