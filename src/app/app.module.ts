import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './utilitiesComponents/header/header.component';
import { DownloadPageComponent } from './pages/download-page/download-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    HeaderComponent,
    DownloadPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
