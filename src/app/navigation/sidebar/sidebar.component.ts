import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { filter, takeUntil } from 'rxjs/operators';
import { SubscriptionCloserComponent } from '@core/models/subscription-closer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent extends SubscriptionCloserComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    super();
  }

  @ViewChild(MatDrawer) drawer: MatDrawer;

  ngOnInit(): void {
    this.listenForRouteChange();
  }

  listenForRouteChange(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => this.drawer.close());
  }

}
