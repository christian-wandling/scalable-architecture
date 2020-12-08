import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '@shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ SidebarComponent, NavigationMenuComponent ],
  exports: [
    SidebarComponent
  ],
  imports: [
    SharedModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class NavigationModule {
}
