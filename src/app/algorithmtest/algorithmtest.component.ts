import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const emailsUnicos: any;

@Component({
  selector: 'app-algorithmtest',
  templateUrl: './algorithmtest.component.html',
  styleUrls: ['./algorithmtest.component.css']
})
export class AlgorithmtestComponent implements OnInit {

  public correo: string;
  public nvoCorreo: string;

  constructor() { }

  ngOnInit(): void {
  }

  transformEmail() {
    this.nvoCorreo = emailsUnicos(this.correo);
  }


}
