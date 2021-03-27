import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { EventService } from '../_services/event.service';
import { LocationService } from '../_services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit{
  zoom = 16
  center: google.maps.LatLngLiteral = { lat: 29,
    lng: 60,}
  options: google.maps.MapOptions = {

    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  }
  markers = []
  infoContent = ''
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow



  constructor(
    private eventService: EventService,
    private locationService: LocationService
    ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {

      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });




  }

  consoleLogLocation() {

    console.log("nappia painettu");
    console.log(this.center);
  }

  ngAfterViewInit() {



    // console.log("trying to get events");
    this.filterEvents();

  }

  filterEvents() {

  }





  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  click(event: google.maps.MouseEvent) {
    console.log(event)
  }



  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
      label: {
        color: 'black',
        text: 'Olet tässä ',
      },
      title: 'Olet tässä',
      options: { animation: google.maps.Animation.DROP },
      map: this.map
    })

  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }





}



