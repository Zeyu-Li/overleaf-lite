import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { KatexDirective } from './katex.directive';

@Component({
  imports: [KatexDirective],
  template: `<span [appKatex]="tex()"></span>`,
})
class HostComponent {
  readonly tex = signal('x^2');
}

async function render(tex: string): Promise<HTMLElement> {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.componentInstance.tex.set(tex);
  await fixture.whenStable();
  return fixture.nativeElement;
}

describe('KatexDirective', () => {
  it('renders LaTeX', async () => {
    const el = await render('\\sqrt{x}');
    expect(el.querySelector('.katex .sqrt')).toBeTruthy();
  });

  it('swallows parse errors from half-typed LaTeX', async () => {
    const el = await render('\\frac{');
    expect(el.querySelector('.katex')).toBeNull();
  });

  it.each([
    '\\href{javascript:alert(1)}{click}',
    '\\url{javascript:alert(1)}',
    '\\includegraphics[height=1em]{x" onerror="alert(1)}',
    '\\htmlData{onclick=alert(1)}{x}',
    '\\htmlStyle{background:url(javascript:alert(1))}{x}',
  ])('does not turn %s into a link, image or attribute', async (tex: string) => {
    const el = await render(tex);
    expect(el.querySelector('a, img, [onclick], [data-onclick], [style*="javascript"]')).toBeNull();
  });
});
