import { Injectable } from '@angular/core';

import { Car } from '../car'
import {CARS} from './mock-cars'

@Injectable()
export class CarServiceService {

  constructor() { }

  getCarsSmall(): Car[] {
   return CARS;
}

}
