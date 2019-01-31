import { Sort } from './sort';
import { Pageable } from './pageable';
import { WeatherModel } from './weather';

export interface PageResponse {
    content: WeatherModel[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}