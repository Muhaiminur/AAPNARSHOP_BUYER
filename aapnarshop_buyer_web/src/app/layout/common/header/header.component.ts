import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuItemInterface } from './menu-item-interface';
import { SignerComponent } from './../../seperate/signer/signer.component';
import { LanguageService } from './../../../services/shared/language/language.service';
import { AuthService } from './../../../services/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLang: any;
  isSticky: boolean = false;
  isLogged: boolean = false;

  menuItems: MenuItemInterface[] = [    
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      routing: '/home'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      routing: '/dashboard'
    },
    {
      label: 'Shopping History',
      icon: 'shopping_basket',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      routing: '/history'
    },
    {
      label: 'Notification',
      icon: 'notifications',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      routing: '/notice'
    },
    {
      label: 'Profile',
      icon: 'person',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      routing: '/profile'
    },
    {
      label: 'Settings',
      icon: 'settings',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      routing: '/settings'
    },
    {
      label: 'Logout',
      icon: 'login',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      routing: '/logout'
    }
  ];

  constructor(
    private dialog: MatDialog,
    private languageService: LanguageService,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.isLogged = this.authService.currentUserId() ? true : false;
    this.currentLang = this.languageService.getCurrentLanguage();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 64;
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignerComponent);
    /*
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }

  langToggle(): void {
   this.languageService.setCurrentLanguage();
  }

}
