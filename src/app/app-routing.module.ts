import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricipalComponent } from './pricipal/pricipal.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  {
    path: "",
    component: PricipalComponent
  },
  {
    path: "pelicula",
    component: PeliculaComponent
  },
  {
    path: "**",
    component: PricipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
