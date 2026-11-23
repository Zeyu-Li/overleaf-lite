import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CodeEditorComponent } from '@ngstack/code-editor';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Monaco is loaded from static assets at runtime, so stub the editor element out here.
    TestBed.overrideComponent(AppComponent, {
      remove: { imports: [CodeEditorComponent] },
      add: { schemas: [CUSTOM_ELEMENTS_SCHEMA] },
    });
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  it('renders the document as KaTeX', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();

    const preview: HTMLElement = fixture.nativeElement.querySelector('.container__output');
    expect(preview.querySelector('.katex')).toBeTruthy();
  });

  it('re-renders and autosaves when the code changes', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.onCodeChanged('\\frac{a}{b}');
    await fixture.whenStable();

    const preview: HTMLElement = fixture.nativeElement.querySelector('.container__output');
    expect(preview.querySelector('.mfrac')).toBeTruthy();
    expect(localStorage.getItem('beginningText')).toBe('\\frac{a}{b}');
  });
});
