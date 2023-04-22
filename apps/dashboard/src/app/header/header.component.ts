import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@sandbox/core-data';

@Component({
  selector: 'sandbox-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  darkMode = false;
  themeTitle = 'Dark';

  items = [
    {
      label: 'Home',
      routerLink: '/home',
    },
    {
      label: 'Create an Entry',
      routerLink: '/new-entry',
    },
    {
      label: 'Account',
      routerLink: '/account',
    },
    {
      label: 'Analytics',
      routerLink: '/analytics',
    },
    {
      label: 'Table View',
      routerLink: '/table',
    }
  ];

  isAuthenticated = false; // You can change this value to mock authentication status

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.darkMode = false;
    this.themeTitle = 'Dark';
  };

  toggleTheme() {
    this.themeService.toggleTheme();
    this.darkMode = !this.darkMode;
    console.log(this.darkMode);
    // if (!this.darkMode) {
    //   this.themeTitle = 'Light';
    // }
    // else {
    //   this.themeTitle = 'Dark';
    // }
    // If darkMode is false, change this.themeTitle to 'Light', else remain 'Dark'
    if (this.darkMode) {
      this.themeTitle = 'Light';
    } else {
      this.themeTitle = 'Dark';
    }
  }

  logout() {
    // Implement logout logic here
  }
}
