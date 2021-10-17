import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

const startingText = `
% this is a realtime LaTeX editor!
% made with AngularJS
% see the source code here: https://github.com/Zeyu-Li/overleaf-lite

\\pi = 3
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
  equation = beginningText;
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
    this.equation = value;
  }
}
