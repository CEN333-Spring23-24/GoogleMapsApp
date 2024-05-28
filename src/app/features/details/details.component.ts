import { Component, OnInit } from '@angular/core';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { MCardComponent } from '../../m-framework/m-card/m-card.component';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../data/Car';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MCardComponent, MContainerComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  car: Car | null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.car = null;
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
    const carString = params.get('details');
      if(carString)
      this.car = JSON.parse(carString);
    });
  }
  get carModel(): string {
    return this.car?.model ?? '';
  }
  get carMake(): string {
    return this.car?.make ?? '';
  }
 

}
