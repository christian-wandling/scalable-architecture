import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormControl } from '@angular/forms';
import { SubscriptionCloserComponent } from '@core/models/subscription-closer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent extends SubscriptionCloserComponent implements OnInit {

  readonly ctrl: FormControl = this.fb.control('');

  @Output() readonly value: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly fb: FormBuilder,
  ) {
    super();
  }

  ngOnInit(): void {
  }

  listenForChange(): void {
    this.ctrl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(250),
        filter(term => !!term.length)
      )
      .subscribe(term => this.value.emit(term));
  }

}
