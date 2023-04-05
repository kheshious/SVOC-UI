import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortDataService {

  constructor() { }

  sortASCBy<T, V>(objMapper: (obj: T) => V): (obj1: T, obj2: T) => number {
    return function(obj1: T, obj2: T): number {
      let element1 = objMapper(obj1);
      let element2 = objMapper(obj2);
      if(element1 > element2) return 1;
      if(element1 < element2) return -1;
      return 0;
    };
  }

  sortDESCBy<T, V>(objMapper: (obj: T) => V): (obj1: T, obj2: T) => number {
    return function(obj1: T, obj2: T): number {
      let element1 = objMapper(obj1);
      let element2 = objMapper(obj2);
      if(element1 < element2) return 1;
      if(element1 > element2) return -1;
      return 0;
    };
  }
}
