import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountryServiceService } from '../services/country-service.service';

@Component({
  selector: 'app-form-kavak',
  templateUrl: './form-kavak.component.html',
  styleUrls: ['./form-kavak.component.css']
})
export class FormKavakComponent implements OnInit {

  public countries: any;

  private regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  public contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[ñA-Za-z]*[ñA-Za-z][ñA-Za-z]*$/) ]],
    surname: ['', [Validators.required, Validators.pattern(/^[ñA-Za-z]*[ñA-Za-z][ñA-Za-z]*$/) ]],
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    country: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/(\(\d{3}\)[.-]?|\d{3}[.-]?)?\d{3}[.-]?\d{4}/)]]
  })

  constructor(private fb: FormBuilder, private countryServices: CountryServiceService) { }

  ngOnInit(): void {
    debugger;
    this.countryServices.getCountries().subscribe(
      countries => {
        this.countries = countries
      }
    )
  }

  sendInfo(){
    alert('The form is valid')
  }

  get name(){
    return this.contactForm.get('name');
  }

  get surname(){
    return this.contactForm.get('surname');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get country(){
    return this.contactForm.get('country');
  }

  get phone(){
    return this.contactForm.get('phone');
  }
  get gender(){
    return this.contactForm.get('gender');
  }

}
