import { PropType } from '@shared/enum/prop-type.enum';
import { TableDef } from '@shared/model/table-def';

const basePath = 'https://www.googleapis.com/books/v1';

const tableDef: TableDef = {
  colDefs: [
    { key: 'authors', label: 'Authors', type: PropType.StringArray },
    { key: 'title', label: 'Title' },
    { key: 'publisher', label: 'Publisher' },
    { key: 'publishDate', label: 'Date', type: PropType.Date },
  ]
};

export const bookConfig = {
  basePath,
  tableDef
};
