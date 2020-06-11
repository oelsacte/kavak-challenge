import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountryServiceService } from '../services/country-service.service';
import { zip } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-kavak',
  templateUrl: './form-kavak.component.html',
  styleUrls: ['./form-kavak.component.css']
})
export class FormKavakComponent implements OnInit {

  public countries: any;

  private MSG_SUCCESS = 'Formulario llenado exitosamente';

  private MSG_TITLE_SUCCESS = 'Genial!!'

  public contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[ñA-Za-z]*[ñA-Za-z][ñA-Za-z]*$/)]],
    surname: ['', [Validators.required, Validators.pattern(/^[ñA-Za-z]*[ñA-Za-z][ñA-Za-z]*$/)]],
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    country: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\d{3}-\d{3}-\d{2}$/)]]
  })

  constructor(private fb: FormBuilder, private countryServices: CountryServiceService, private router: Router) { }

  ngOnInit(): void {
    const contact = localStorage.getItem('contact');

    this.countryServices.getCountries().subscribe(
      countries => {
        this.countries = countries
      }
    )

    if (contact) {
      const contactJSON = JSON.parse(contact);
      this.contactForm.setValue(contactJSON);
    }

    zip(this.contactForm.statusChanges, this.contactForm.valueChanges).pipe(
      filter(([state, value]) => state == 'VALID'),
      map(([state, value]) => value)
    ).subscribe(formValue => {
      localStorage.setItem('contact', JSON.stringify(formValue));
    });
  }

  sendInfo() {
    this.contactForm.reset();
    localStorage.removeItem('contact');
    this.router.navigate(['/algoritmo']);
    Swal.fire(this.MSG_SUCCESS, this.MSG_TITLE_SUCCESS, 'success');
  }

  get name() {
    return this.contactForm.get('name');
  }

  get surname() {
    return this.contactForm.get('surname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get phone() {
    return this.contactForm.get('phone');
  }
  get gender() {
    return this.contactForm.get('gender');
  }

}
