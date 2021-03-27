
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEvent } from '../_models/event';
import { IApiData } from '../_models/iapidata';

import { Place } from '../_models/place';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit, OnDestroy {
  eSubscription: Subscription;

  testEvents: IEvent[] = [];


  eventlist:Place[] = [{
    id: '00001',
    name:{
        fi:	'Sijanti',
        en:	'Sijanti',
        sv:	'Sijanti',
        zh:	'Sijanti',
        },
    source_type:
    {
    },
    info_url: 'info',
    modified_at: 'info',
    location:
    {
        lat: 	{
        },
        lon:	{
        },
        address: {
            street_address:	'info',
            postal_code:	'info',
            locality:	'info',
        }
    },
    description: {
        intro:	'info',
        body:	'info',
        images: [{
            url:	'info',
            copyright_holder:	'info',
            license_type:
        {} }],
    },
    tags:[ {
        id: 'info',
        name:	'info',
        }],
    opening_hours: {
        hours:	[{
            weekday_id:	1,
            opens:	{
                hours:	1,
                minutes:	1,
                seconds:	1,
                },
            closes:	{
                hours:	1,
                minutes:	1,
                seconds:	1,
                },
            open24h:	true,
            }],
        openinghours_exception:	'info',
        },}

];


constructor(private eventService: EventService) { }

ngOnInit(): void {

this.eSubscription = this.eventService.getEvents().subscribe(data => {

let eventdata = data as IApiData;
console.log(eventdata);

eventdata.data.forEach(element => {
  this.testEvents.push(element);
});

console.log(this.testEvents);

this.testEvents.forEach(element => {
  console.log(element.description.body);
});





}, error => {
  console.log(error);
});

}

ngOnDestroy(){
  this.eSubscription.unsubscribe();
}

}

