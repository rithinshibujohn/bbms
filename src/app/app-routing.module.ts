import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonorregisterComponent } from './pages/donorregister/donorregister.component';
import { LoginComponent } from './pages/login/login.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BloodbankComponent } from './pages/bloodbank/bloodbank.component';
import { RequestComponent } from './pages/request/request.component';
import { SingleComponent } from './pages/single/single.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'donorregister',component:DonorregisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'faq',component:FaqComponent
  },
  {
    path:'bloodbank',component:BloodbankComponent
  },
  {
    path:'request',component:RequestComponent
  },
  {
    path:'single',component:SingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
