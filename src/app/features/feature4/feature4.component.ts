import { Component, OnInit } from '@angular/core';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { MSearchButtonComponent } from '../../m-framework/m-search-button/m-search-button.component';
import { MTableComponent } from '../../m-framework/m-table/m-table.component';
import { Router } from '@angular/router';
import { Car } from '../../data/Car';

@Component({
  selector: 'app-feature4',
  standalone: true,
  imports: [MSearchButtonComponent, MTableComponent, MContainerComponent, CommonModule],
  templateUrl: './feature4.component.html',
  styleUrl: './feature4.component.css',
})
export class Feature4Component {

  listOfCars: Car[];
  filterTerm: string = "";
  constructor(private router: Router) {
    this.listOfCars = [];
    let car1 = new Car(1, "Nissan", "Altima", 2020);
    let car2 = new Car(2, "Toyota", "Camry", 2023);
    let car3 = new Car(3, "Toyota", "Corolla", 2021);
    this.listOfCars.push(car1);
    this.listOfCars.push(car2);
    this.listOfCars.push(car3);
  }


  navigateToDetails(carId: number){
    const index = this.listOfCars.findIndex(obj => obj.id === carId);    
    this.router.navigate(['details'], 
          { queryParams: 
            { details: JSON.stringify(this.listOfCars[index]) } 
          });
  }
}
