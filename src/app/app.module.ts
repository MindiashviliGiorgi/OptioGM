import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerFormComponent } from './banner-form/banner-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerListComponent,
    BannerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
