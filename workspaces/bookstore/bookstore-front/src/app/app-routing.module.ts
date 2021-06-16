import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { IntroComponent } from './components/views/intro/intro.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: IntroComponent},
  {path: "categorias", component: CategoriaReadComponent},
  {path: "categorias/create", component: CategoriaCreateComponent},
  {path: "categorias/delete/:id", component: CategoriaDeleteComponent},
  {path: "categorias/update/:id", component: CategoriaUpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
