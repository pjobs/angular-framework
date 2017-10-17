import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../afw/services/framework-config.service';
import { MenuService } from '../afw/services/menu.sevice';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private frameworkConfigService: FrameworkConfigService,
              private menuService: MenuService){
    let config:FrameworkConfigSettings = {
      socialIcons:[
        { imageFile: 'assets/social-facebook.png',alt:'Facebook', link:'http://www.facebook.com'},
        { imageFile: 'assets/social-google-plus.png',alt:'Google Plus', link:'http://www.google.com'},
        { imageFile: 'assets/social-twitter.png',alt:'Twitter', link:'http://www.twitter.com'},
        { imageFile: 'assets/social-linkedin.png',alt:'LinkedIn', link:'http://www.linkedin.com'},
      ],
      showLanguageSelector:false,
      showUserControls:true,
      showStatusBar:true,
      showStatusBarBreakpoint:800
    };
    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;
  }

}
