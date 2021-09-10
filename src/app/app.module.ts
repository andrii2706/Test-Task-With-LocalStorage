import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {ContactsComponent} from "./components/contacts/contacts.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactComponent } from './components/contacts/edit-contact/contact/contact.component';
import { DetailsComponent } from './components/contacts/edit-contact/contact/details/details.component';

let routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contacts", component:ContactsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactsComponent,
    EditContactComponent,
    ContactComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
