import { PropType } from '@shared/enum/prop-type.enum';

export interface PropertyDef {
  key: string;
  label?: string;
  type?: PropType;
  accessorFn?: any;
}
