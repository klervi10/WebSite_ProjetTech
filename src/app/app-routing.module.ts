import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageMonEauComponent } from './page-mon-eau/page-mon-eau.component';
import { PageMonAirComponent } from './page-mon-air/page-mon-air.component';
import { PageRegisterComponent } from './page-register/page-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ProjetTech-list/all'},
  { path: 'ProjetTech-list/:what', component: PageAccueilComponent},
  { path: 'Accueil', component: PageAccueilComponent},
  { path: 'MonEau', component: PageMonEauComponent },
  { path: 'MonAir', component: PageMonAirComponent },
  { path: 'Register', component: PageRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
