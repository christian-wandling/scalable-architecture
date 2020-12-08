import { Injectable } from '@angular/core';
import { normalize, schema } from 'normalizr';

@Injectable()
export class BookNormalizrService {

  constructor() {
  }

  private readonly book = new schema.Entity('books');

  normalizeBooks(data: any): any {
    return normalize(
      data,
      new schema.Object({
        items: [ this.book ]
      })
    );
  }

  normalizeBook(data: any): any {
    return normalize(
      data,
      this.book
    );
  }
}
