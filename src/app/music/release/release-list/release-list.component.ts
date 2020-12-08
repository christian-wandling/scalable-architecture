import { Component, OnInit } from '@angular/core';
import { appConfig } from '@config/app.config';
import { ReleaseFacade } from '@music/release/release.facade';
import { Observable } from 'rxjs';
import { ReleaseViewModel } from '@music/release/models/release.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TableDef } from '@shared/model/table-def';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: [ './release-list.component.scss' ]
})
export class ReleaseListComponent implements OnInit {
  readonly tableDef: TableDef = appConfig.music.release.tableDef;

  readonly releases$: Observable<Array<ReleaseViewModel>> = this.facade.releasesOfSelectedArtist$;

  constructor(
    private readonly facade: ReleaseFacade,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  goToDetails(id: string): void {
    this.router.navigate([ 'release', id ], { relativeTo: this.route });
  }

}
