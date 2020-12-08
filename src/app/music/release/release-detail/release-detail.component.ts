import { Component, OnInit } from '@angular/core';
import { ReleaseFacade } from '@music/release/release.facade';
import { Observable } from 'rxjs';
import { ReleaseViewModel } from '@music/release/models/release.model';
import { ArtistViewModel } from '@music/artist/models/artist.model';

@Component({
  selector: 'app-release-detail',
  templateUrl: './release-detail.component.html',
  styleUrls: [ './release-detail.component.scss' ]
})
export class ReleaseDetailComponent implements OnInit {

  readonly release$: Observable<ReleaseViewModel> = this.facade.selectedRelease$;
  readonly artist$: Observable<ArtistViewModel> = this.facade.selectedArtist$;

  constructor(
    private readonly facade: ReleaseFacade
  ) {
  }

  ngOnInit(): void {
  }

}
