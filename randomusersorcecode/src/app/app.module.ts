import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { SwiperModule } from "swiper/angular";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SwiperModule, HttpClientModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
