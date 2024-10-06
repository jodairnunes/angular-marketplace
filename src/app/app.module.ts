import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { CardFilmComponent } from './components/template/card-film/card-film.component';
import { HttpClientModule } from '@angular/common/http';
import { ListFilmsComponent } from './views/list-films/list-films.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SelectButtonComponent } from './components/template/select-button/select-button.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardFilmComponent,
    ListFilmsComponent,
    SelectButtonComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule, 
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
