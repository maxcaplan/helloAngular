import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero';

@Pipe({
  name: 'sortHeroes',
})
export class SortHeroesPipe implements PipeTransform {
  transform(value: Hero[], arg: 'alpha' | 'id'): Hero[] {
    if (!value) {
      return value;
    }

    if (arg === 'alpha') {
      return value.sort((a, b) => {
        let comparison = 0;

        if (a.name > b.name) comparison = 1;
        else if (a.name < b.name) comparison = -1;
        return comparison;
      });
    } else if (arg === 'id') {
      return value.sort((a, b) => {
        let comparison = 0;

        if (a.id > b.id) comparison = 1;
        else if (a.id < b.id) comparison = -1;
        return comparison;
      });
    } else {
      return value;
    }
  }
}
