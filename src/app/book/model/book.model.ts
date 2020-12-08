import { VolumeInfo } from './volume-info';
import { IndustryIdentifier } from '@book/model/industry-identifier';

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export class BookViewModel {

  constructor(
    public id: string,
    public authors: Array<string>,
    public title: string,
    public publisher: string,
    public publishedDate: string,
    public imgSrc: string,
    public description: string,
    public pageCount: number,
    public language: string,
    public industryIdentifiers: Array<IndustryIdentifier>,
  ) {
  }
}

export const createBookViewModel = (book: Book) => new BookViewModel(
  book.id,
  book.volumeInfo?.authors || [ 'Unknown' ],
  book.volumeInfo?.title || 'Unknown',
  book.volumeInfo?.publisher || 'Unknown',
  book.volumeInfo?.publishedDate,
  book.volumeInfo?.imageLinks?.thumbnail || '',
  book.volumeInfo?.description,
  book.volumeInfo?.pageCount,
  book.volumeInfo?.language,
  book.volumeInfo?.industryIdentifiers || []
);

