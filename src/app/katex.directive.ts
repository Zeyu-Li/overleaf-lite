import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import katex from 'katex';

/** Renders a LaTeX string into the host element with KaTeX. */
@Directive({ selector: '[appKatex]' })
export class KatexDirective {
  readonly appKatex = input.required<string>();

  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {
    effect(() => {
      try {
        // `trust: false` keeps \href, \url, \includegraphics and \html* from
        // emitting links, images or raw attributes into the page.
        katex.render(this.appKatex(), this.host.nativeElement, { trust: false });
      } catch (error: unknown) {
        // Half-typed LaTeX is normal while editing; the preview stays empty until it parses.
        if (!(error instanceof katex.ParseError)) {
          throw error;
        }
      }
    });
  }
}
