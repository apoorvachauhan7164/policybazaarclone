import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {CardsComponent } from './component/cards/cards.component';
import { Form1Component } from './component/form1/form1.component';
import { Form2Component } from './component/form2/form2.component';
import { Form3Component } from './component/form3/form3.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { VehicleInfoComponent } from './component/vehicle-info/vehicle-info.component';
import { FinalDetailsComponent } from './component/final-details/final-details.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vehicle-info', component: VehicleInfoComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'form', component: Form1Component},
  {path: 'second', component: Form2Component},
  {path: 'third', component: Form3Component},
  {path: 'final-details', component: FinalDetailsComponent}

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
    VehicleInfoComponent,
    FinalDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
