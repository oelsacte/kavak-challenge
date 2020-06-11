import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormKavakComponent } from './form-kavak/form-kavak.component';
import { AlgorithmtestComponent } from './algorithmtest/algorithmtest.component';


const routes: Routes = [
  { path: '', component: FormKavakComponent },
  { path: 'algoritmo', component: AlgorithmtestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
