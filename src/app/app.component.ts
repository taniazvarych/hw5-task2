import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task2';
  cities:any;

  loadCities(){
    this.cities = [
      { id: 1, name: 'Lviv' },
      { id: 2, name: 'London' },
      { id: 3, name: 'Madrid' },
      { id: 4, name: 'New York' },
      { id: 5, name: 'Krakow' },
    ];
   }

   trackCity (index:number, city:any){
     return  city.id;
   }

   
}
