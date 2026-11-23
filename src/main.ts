import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideCodeEditor } from '@ngstack/code-editor';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    // Serve the version-pinned Monaco copied from node_modules (see angular.json)
    // instead of whatever "latest" build a public CDN hands out at runtime.
    provideCodeEditor({ baseUrl: 'assets/monaco' }),
  ],
}).catch((err: unknown) => console.error(err));
