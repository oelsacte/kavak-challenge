import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormKavakComponent } from './form-kavak/form-kavak.component';


const routes: Routes = [
  { path: '', component: FormKavakComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
