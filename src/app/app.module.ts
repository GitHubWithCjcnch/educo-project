import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { signInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './utilitiesComponents/header/header.component';
import { DownloadPageComponent } from './utilitiesComponents/download-page/download-page.component';
import { LoginInputDirective } from './directives/login-input.directive';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ProgressBarComponent } from './utilitiesComponents/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    signInPageComponent,
    HomeComponent,
    HeaderComponent,
    DownloadPageComponent,
    LoginInputDirective,
    SignUpPageComponent,
    ProgressBarComponent
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
