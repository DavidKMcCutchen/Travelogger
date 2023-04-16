import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string;

  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(this.currentTheme);
  }

  toggleTheme(): void {
    if (this.currentTheme === 'light-mode') {
      this.setDarkMode();
    } else {
      this.setLightMode();
    }
  }

  private setLightMode(): void {
    document.body.classList.replace('dark-mode', 'light-mode');
    this.currentTheme = 'light-mode';
    localStorage.setItem('theme', this.currentTheme);
  }

  private setDarkMode(): void {
    document.body.classList.replace('light-mode', 'dark-mode');
    this.currentTheme = 'dark-mode';
    localStorage.setItem('theme', this.currentTheme);
  }
}
