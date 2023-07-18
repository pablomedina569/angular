import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { appComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    appComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
