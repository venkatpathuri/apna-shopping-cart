import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsNavigationComponent } from './items-navigation/items-navigation.component';
import { ItemsDashboardComponent } from './items-dashboard/items-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ShortenDescComponent } from './shorten-desc/shorten-desc.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsNavigationComponent,
    ItemsDashboardComponent,
    CartComponent,
    ShortenDescComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
