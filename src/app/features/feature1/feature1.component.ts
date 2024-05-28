import { Component } from '@angular/core';
import { MCardComponent } from '../../m-framework/m-card/m-card.component';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { CommonModule } from '@angular/common';
class Advertisement {
  title: string;
  location: string;
  image: string;
  description: string;
  constructor(
    title: string,
    location: string,
    image: string,
    description: string
  ) {
    this.title = title;
    this.location = location;
    this.image = image;
    this.description = description;
  }
}

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [CommonModule,MContainerComponent,MCardComponent],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {
  adlist: Advertisement[];
  constructor(){
    this.adlist = [];
    let ad1 = new Advertisement(
      'Trip to Beach',
      'Egypt',
      'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg',
      "This simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    let ad2 = new Advertisement(
      'Trip to Another Beach',
      'Saudi Arabia',
      'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg',
      "This simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );

    let ad3 = new Advertisement(
      'Trip to a Third Beach',
      'Dubai',
      'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg',
      "This simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    this.adlist.push(ad1);
    this.adlist.push(ad2);
    this.adlist.push(ad3);
  }
}
