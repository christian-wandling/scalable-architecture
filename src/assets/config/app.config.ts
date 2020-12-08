import { bookConfig } from './feature/book.config';
import { navigationConfig } from './feature/navigation.config';
import { dateConfig } from '@config/feature/date.config';
import { musicConfig } from '@config/feature/music.config';

export const appConfig = {
  date: dateConfig,
  book: bookConfig,
  navigation: navigationConfig,
  music: musicConfig
};
