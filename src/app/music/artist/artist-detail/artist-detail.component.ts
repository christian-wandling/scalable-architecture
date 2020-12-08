import { Component, OnInit } from '@angular/core';
import { ArtistFacade } from '@music/artist/artist.facade';
import { Observable } from 'rxjs';
import { ArtistViewModel } from '@music/artist/models/artist.model';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: [ './artist-detail.component.scss' ]
})
export class ArtistDetailComponent implements OnInit {

  readonly artist$: Observable<ArtistViewModel> = this.facade.selected$;

  constructor(
    private readonly facade: ArtistFacade
  ) {
  }

  ngOnInit(): void {

  }
}
