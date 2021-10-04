import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { signInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './utilitiesComponents/header/header.component';
import { DownloadPageComponent } from './utilitiesComponents/download-page/download-page.component';
import { LoginInputDirective } from './directives/login-input.directive';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ProgressBarComponent } from './utilitiesComponents/progress-bar/progress-bar.component';
import { MustMatchDirective } from './directives/must-match.directive';
import { AddProfilePictureComponent } from './utilitiesComponents/add-profile-picture/add-profile-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    signInPageComponent,
    HomeComponent,
    HeaderComponent,
    DownloadPageComponent,
    LoginInputDirective,
    SignUpPageComponent,
    ProgressBarComponent,
    MustMatchDirective,
    AddProfilePictureComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
