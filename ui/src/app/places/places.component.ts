import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IApiData } from '../_models/iapidata';
import { Place } from '../_models/place';
import { PlaceService } from '../_services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  pSubscription: Subscription;
  places: Place[] = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.pSubscription = this.placeService.getPlaceData().subscribe(data => {
      let placedata = data as IApiData;
      //  console.log(placedata);
      placedata.data.forEach(element => {
        this.places.push(element);
      });

      }, error => {
        console.log(error);
      });
      }

      ngOnDestroy(){
        this.pSubscription.unsubscribe();
      }


}
