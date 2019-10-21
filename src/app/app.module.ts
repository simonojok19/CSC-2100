import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProjectDetailsModule } from './project-details/project-details.module';
import { P2Module } from './p2/p2.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ProjectDetailsModule,
    P2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
