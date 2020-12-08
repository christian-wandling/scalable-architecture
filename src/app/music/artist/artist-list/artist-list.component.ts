import { Component, OnInit } from '@angular/core';
import { appConfig } from '@config/app.config';
import { ArtistFacade } from '@music/artist/artist.facade';
import { Observable } from 'rxjs';
import { ArtistViewModel } from '@music/artist/models/artist.model';
import { Router } from '@angular/router';
import { TableDef } from '@shared/model/table-def';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: [ './artist-list.component.scss' ]
})
export class ArtistListComponent implements OnInit {
  readonly tableDef: TableDef = appConfig.music.artist.tableDef;

  readonly artists$: Observable<Array<ArtistViewModel>> = this.facade.artists$;

  constructor(
    private readonly facade: ArtistFacade,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
  }

  searchArtists(term: string): void {
    this.facade.searchArtists(term);
  }

  goToDetails(id: string): void {
    this.router.navigate([ './', 'music', 'artist', id ]);
  }

}
