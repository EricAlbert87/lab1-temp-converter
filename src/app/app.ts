import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempConverter } from './temp-converter./temp-converter.';

@Component({
  imports: [RouterOutlet, TempConverter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lab1-temp-converter');
}
