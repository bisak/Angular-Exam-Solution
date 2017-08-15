import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AllAnimalsComponent } from './components/all-animals/all-animals.component';
import { SingleAnimalComponent } from './components/single-animal/single-animal.component';
import { MyAnimalsComponent } from './components/my-animals/my-animals.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'animals/add',
    component: AddAnimalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'animals/all',
    component: AllAnimalsComponent
  },
  {
    path: 'animals/details/:id',
    component: SingleAnimalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'animals/mine',
    component: MyAnimalsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
