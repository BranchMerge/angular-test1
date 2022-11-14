import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Hello2Component } from './hello2.component';
import { Hello3Component } from './hello3/hello3.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Hello2Component, Hello3Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
