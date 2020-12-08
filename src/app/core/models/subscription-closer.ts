import { Subject } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({ template: '' })
export abstract class SubscriptionCloserComponent implements OnDestroy {
  destroy$: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
