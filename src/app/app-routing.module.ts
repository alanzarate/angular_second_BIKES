import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  { path: 'home', component: FirstPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: SecondPageComponent },
  { path: 'aboutus', component: ThirdPageComponent },
  { path: 'clientform', component: FourthPageComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
