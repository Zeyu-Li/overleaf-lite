import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'overleaf-lite';
  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'javascript',
    uri: 'main.json',
    value: 'const a = () => {c.l()}',
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value) {
    console.log('CODE', value);
  }
}
