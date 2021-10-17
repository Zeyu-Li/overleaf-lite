import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

const startingText = `
% this is a realtime LaTeX editor
`;

let beginningText = localStorage.getItem('beginningText')
  ? localStorage.getItem('beginningText')
  : startingText;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'overleaf-lite';
  equation: string = '\\sum_{i=1}^nx_i';
  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'latex',
    uri: 'main.json',
    value: beginningText,
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
