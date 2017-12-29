import {
  Component,
  Input,
  Output,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  OnChanges
} from '@angular/core';
import {CarServiceService} from './car-service.service'
import {Car} from '../car';
import {CARS} from './mock-cars';
import {Message} from '../message';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  loading : boolean;
  cars : Car[];
  cols : any[];
  selectedCar : Car;
  dialogVisible : boolean;
  msgs : Message[];
  selectedCars : Car[];
  displayDialog : boolean;
  car : Car = new PrimeCar();
  newCar : boolean;

  constructor(private carService : CarServiceService) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    this.getCarsSmall();

    this.cols = [
      {
        field: 'vin',
        header: 'Vin',
        colspan: 1
      }, {
        field: 'year',
        header: 'Year',
        colspan: 1
      }, {
        field: 'brand',
        header: 'Brand',
        colspan: 1
      }, {
        field: 'color',
        header: 'Color',
        colspan: 1
      }, {
        field: 'lastYearProfit',
        header: 'Last Year',
        clolspan: 1
      }, {
        field: 'thisYearProfit',
        header: 'This Year',
        colspan: 1
      }
    ];
  }
  getCarsSmall() : void {
    this.cars = this
      .carService
      .getCarsSmall();
  }

  onRowSelect(event) {
    this.msgs = [];
    this
      .msgs
      .push({
        severity: 'info',
        summary: 'Car Selected',
        detail: event.data.Vin + ' - ' + event.data.brand
      })
  }

  onRowUnselect(event) {
    this.msgs = [];
    this
      .msgs
      .push({
        severity: 'info',
        summary: 'Car Selected',
        detail: event.data.Vin + ' - ' + event.data.brand
      })
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar) 
      cars.push(this.car);
    else 
      cars[this.findSelectedCarIndex()] = this.car;
    
    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.findSelectedCarIndex();
    this.cars = this
      .cars
      .filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
  }

  cloneCar(c : Car) : Car {
    let car = new PrimeCar();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex() : number {
    return this
      .cars
      .indexOf(this.selectedCar);
  }
}

class PrimeCar implements Car {

  constructor(public vin
    ?, public year
    ?, public brand
    ?, public color
    ?) {}
  }