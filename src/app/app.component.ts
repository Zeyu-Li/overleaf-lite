import { Component } from '@angular/core';
import { CodeEditorComponent, CodeModel } from '@ngstack/code-editor';
import { saveAs } from 'file-saver';

import { KatexDirective } from './katex.directive';

const startingText = `
% Overleaf Lite a realtime LaTeX editor!
% made with AngularJS (Autosaves on keypress)
% see the source code here: https://github.com/Zeyu-Li/overleaf-lite

\sum_{n=1}^{\\infty} 2^{-n} = 1
`;

const beginningText: string = localStorage.getItem('beginningText') || startingText;

@Component({
  selector: 'app-root',
  imports: [CodeEditorComponent, KatexDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'overleaf-lite';
  equation = beginningText.split('\n').join('\n\\\\ ');
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

  onCodeChanged(value: string): void {
    // console.log(value, value.split('\n').join('\n\\newline '));
    this.equation = value.split('\n').join('\n\\\\ ');

    localStorage.setItem('beginningText', value);
  }
  downloadLatex(): void {
    var blob = new Blob([this.equation], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'file.tex');
  }
}
