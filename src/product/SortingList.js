import { sortBy } from 'lodash';

export const SORTS = {
    NONE: list => list,
    PRICE: list => sortBy(list, 'price'),
};
