import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CodeEditorModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
