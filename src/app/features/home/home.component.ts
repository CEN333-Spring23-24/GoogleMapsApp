import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { MMapComponent } from '../../m-framework/m-map/m-map.component';


//@ts-ignore
declare var google; // Forward Declaration 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MContainerComponent,CommonModule,FormsModule,MMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  lat: number; 
  lng: number; 
  map: any; 
  constructor(){
    this.lat = 0; 
    this.lng = 0; 
  }
  drawMarker(latitude: number, longitude: number){
    const marker = new google.maps.Marker({
      map: this.map,
      position: {lat: latitude, lng: longitude},

    });

  }
  drawCircle(latitude: number, longitude: number, radius: number, changable: boolean){
    const circle = new google.maps.Circle({
      map: this.map, 
      center: {lat: latitude, lng: longitude},
      radius: radius,
      editable: changable
    });
  }

  loadLocation1(){
    this.lat = 53; 
    this.lng = 23; 
    this.map.setCenter({lat:this.lat, lng:this.lng});
    // ADD CODE to Draw a marker at the center of this location 1
    this.drawMarker(this.lat, this.lng);
  }
  loadLocation2(){
    this.lat = 23; 
    this.lng = 53; 
    this.map.setCenter({lat:this.lat, lng:this.lng});
    // add code to draw a circle of radius 100 in this location. The circle is editable
    this.drawCircle(this.lat, this.lng, 100, true);
  }

  randomLocations(){
    navigator.geolocation.getCurrentPosition((data)=>{
      let centerlat = data.coords.latitude;
      let centerlng = data.coords.longitude;
      this.map.setCenter({lat:centerlat, lng:centerlng}); 
      let list = this.generateRandomLocations(centerlat, centerlng, 10, 5);
      for (let i = 0 ; i < list.length; i++)
          this.drawMarker(list[i].lat,list[i].lng);
      this.drawCircle(centerlat, centerlng, 2500, true);
    });
  }
  // On right click, add a circle to where the user clicks, and on left click add a marker. 

  // Load several locations from a locally stored list and display them with markers. First and last locations have circles. 

  drawCircleOnClickLocation(){
    google.maps.event.addListener(
      this.map,
      'dbclick',        //rightclick
      (event: any)=>{
        event.latlng.lng();
        event.latlng.lat(); 
      }
    );
  }

  getMapInstance(map: any)
  {
    this.map = map; 
  }

  generateRandomLocations(latitude: number, longitude: number, 
                          locationsNumber: number, maxRadius: number)
  {
    const locations: { lat: number, lng: number }[] = [];
    for (let i = 0; i < locationsNumber; i++) {
      const latOffset = latitude +  ((Math.random()-0.5) * maxRadius * 1/110.32);
      const lngOffset = longitude + ((Math.random()-0.5) * maxRadius * 1/110.32);
      locations.push({ lat: latOffset, lng: lngOffset });
    }
    return locations; 
  }
}
 