import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '@shared/model/navigation-item';
import { appConfig } from '@config/app.config';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  readonly navigationItems: Array<NavigationItem> = appConfig.navigation.items;

  constructor() { }

  ngOnInit(): void {
  }

}
