import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {CardsComponent } from './component/cards/cards.component';
import { Form1Component } from './component/form1/form1.component';
import { Form2Component } from './component/form2/form2.component';
import { Form3Component } from './component/form3/form3.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { VehicleInfoComponent } from './component/vehicle-info/vehicle-info.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vehicle-info', component: VehicleInfoComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'form', component: Form1Component},
  {path: 'second', component: Form2Component},
  {path: 'third', component: Form3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    NavbarComponent,
    VehicleInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
