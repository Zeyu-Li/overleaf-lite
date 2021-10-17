import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KatexModule } from 'ng-katex';
import { AppComponent } from './app.component';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KatexModule, CodeEditorModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
