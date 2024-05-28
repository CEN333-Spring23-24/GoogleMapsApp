import { Component } from '@angular/core';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { MCardComponent } from '../../m-framework/m-card/m-card.component';
import { MAnalogOutputComponent } from '../../m-framework/m-analog-output/m-analog-output.component';

@Component({
  selector: 'app-feature5',
  standalone: true,
  imports: [MContainerComponent,MCardComponent,MAnalogOutputComponent],
  templateUrl: './feature5.component.html',
  styleUrl: './feature5.component.css'
})
export class Feature5Component {
 level:string;
 constructor()
 {
  this.level = "0"; 
  setInterval(()=> {this.level = (+this.level + 1) % 100+""; console.log(this.level)},100);
 }
}
