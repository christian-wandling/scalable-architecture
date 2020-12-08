import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PropertyDef } from '@shared/model/property-def';
import { PropType } from '@shared/enum/prop-type.enum';
import { appConfig } from '@config/app.config';
import { TableDef } from '@shared/model/table-def';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
  readonly dateFormat = appConfig.date.pipeDefault;
  readonly PropType = PropType;

  @Input() tableDef: TableDef;
  readonly dataSource: MatTableDataSource<object> = new MatTableDataSource<object>([]);

  @Input() set data(data: Array<object>) {
    this.dataSource.data = data;
  }

  @Output() readonly select: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
