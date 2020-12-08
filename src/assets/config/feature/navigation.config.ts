import { NavigationItem } from '@shared/model/navigation-item';

const items: Array<NavigationItem> = [
  new NavigationItem(
    'books',
    'book',
    'Books',
    'library_books'
  ),
  new NavigationItem(
    'music',
    'music',
    'Music',
    'headset'
  )
];

export const navigationConfig = {
  items
};
