import { ProductGroup } from './productGroup.entity';
import { PRODUCT_REPOSITORY } from '../../core/constants';

export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: ProductGroup,
  },
];
