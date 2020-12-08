import { PropType } from '@shared/enum/prop-type.enum';

const basePath = 'https://musicbrainz.org/ws/2';

const artistConfig = {
  tableDef: {
    colDefs: [
      { key: 'id', label: 'Id' },
      { key: 'name', label: 'Name' },
      { key: 'origin', label: 'Origin' },
      { key: 'tags', label: 'Tags', type: PropType.StringArray },
    ]
  }
};

const releaseConfig = {
  tableDef: {
    colDefs: [
      { key: 'id', label: 'Id' },
      { key: 'title', label: 'Title' },
      { key: 'date', label: 'Date', type: PropType.Date }
    ]
  }
};

const trackConfig = {
  tableDef: {
    colDefs: [
      { key: 'trackNumber', label: 'No.'},
      { key: 'title', label: 'Title' },
      { key: 'length', label: 'Duration'},
    ]
  }
};


export const musicConfig = {
  basePath,
  artist: artistConfig,
  release: releaseConfig,
  track: trackConfig
};

