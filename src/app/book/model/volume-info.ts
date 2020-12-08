import { IndustryIdentifier } from './industry-identifier';

export interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: Array<string>;
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: Array<IndustryIdentifier>;
  readingModes: { [ index: string ]: boolean };
  pageCount: number;
  printType: string;
  categories: Array<string>;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: { [ index: string ]: boolean };
  imageLinks: { [ index: string ]: string };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}
