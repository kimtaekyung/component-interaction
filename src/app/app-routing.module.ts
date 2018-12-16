import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ServiceComponent } from './pages/service.component';
import { NotFoundComponent } from './pages/not-found.component';

const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', component: HomeComponent },
  { path : 'about' , component: AboutComponent},
  { path : 'service' , component: ServiceComponent},
  { path : '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
