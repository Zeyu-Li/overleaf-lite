import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { saveAs } from 'file-saver';

const startingText = `
% Overleaf Lite a realtime LaTeX editor!
% made with AngularJS (Autosaves every 30 seconds)
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
    // console.log(value, value.split('\n').join('\n\\newline '));
    this.equation = value.split('\n').join('\n\\\\ ');
  }
  downloadLatex() {
    var blob = new Blob([this.equation], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'file.tex');
  }
}
