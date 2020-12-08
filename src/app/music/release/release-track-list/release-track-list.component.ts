import { Component, Input, OnInit } from '@angular/core';
import { TrackViewModel } from '@music/release/models/track';
import { TableDef } from '@shared/model/table-def';
import { appConfig } from '@config/app.config';

@Component({
  selector: 'app-release-track-list',
  templateUrl: './release-track-list.component.html',
  styleUrls: [ './release-track-list.component.scss' ]
})
export class ReleaseTrackListComponent implements OnInit {
  readonly tableDef: TableDef = appConfig.music.track.tableDef;

  @Input() tracks: Array<TrackViewModel> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
