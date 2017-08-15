import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { AuthHelperService } from './services/auth-helper.service';
import { ValidateService } from './services/validate.service';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { ToastService } from './services/toast.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StatsService } from './services/stats.service';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalsService } from './services/animals.service';
import { AuthGuard } from './guards/auth.guard';
import { AllAnimalsComponent } from './components/all-animals/all-animals.component';
import { SearchComponent } from './sub-components/search/search.component';
import { PaginationComponent } from './sub-components/pagination/pagination.component';
import { ListProductComponent } from './sub-components/list-product/list-product.component';
import { SingleAnimalComponent } from './components/single-animal/single-animal.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { MyAnimalsComponent } from './components/my-animals/my-animals.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    AddAnimalComponent,
    AllAnimalsComponent,
    SearchComponent,
    PaginationComponent,
    ListProductComponent,
    SingleAnimalComponent,
    DateAgoPipe,
    MyAnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [
    AuthService,
    ApiService,
    AuthHelperService,
    ValidateService,
    ToastService,
    StatsService,
    AnimalsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
