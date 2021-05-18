import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './background-color.directive';
import { DirettivaCustomDirective } from './direttiva-custom.directive';
import { SimilIfDirective } from './simil-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    DirettivaCustomDirective,
    SimilIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
