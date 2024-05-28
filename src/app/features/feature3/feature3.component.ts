import { Component } from '@angular/core';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { MResultBoxComponent } from '../../m-framework/m-result-box/m-result-box.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MFormUlaComponent } from '../../m-framework/m-form-ula/m-form-ula.component';
@Component({
  selector: 'app-feature3',
  standalone: true,
  imports: [MContainerComponent, MResultBoxComponent, FormsModule, CommonModule, MFormUlaComponent ],
  templateUrl: './feature3.component.html',
  styleUrl: './feature3.component.css',
})
export class Feature3Component {
  input1: number;
  input2: number;
  input3: number;
  input4: number;
  calculationResultA: number;
  calculationResultB: number;
  constructor() {
    this.input1 = 0;
    this.input2 = 0;
    this.input3 = 0;
    this.input4 = 0;
    this.calculationResultA = 0;
    this.calculationResultB = 0;
  }
  calc_event() {
    this.calculationResultA = this.input1 * this.input2;
  }
  calc_auto() {
    this.calculationResultB = this.input3 + this.input4;
  }
  getCondition(value: number) {
    if (value >= 0 && value < 50) {
      return 'normal';
    } else if (value >= 50 && value <= 75) {
      return 'warning';
    } else if (value >= 75 && value <= 100) {
      return 'success';
    } else {
      return 'error';
    }
  }
}
