import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MultipleDirectiveComponent } from '../multiple-directive/multiple-directive.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, MultipleDirectiveComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
