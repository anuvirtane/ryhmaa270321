
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

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eSubscription = this.eventService.getEvents().subscribe(data => {
      let eventdata = data as IApiData;

      eventdata.data.forEach(element => {
        this.testEvents.push(element);
      });

      this.testEvents.forEach(element => {

      });
    }, error => {
      console.log(error);
    });

  }

  ngOnDestroy() {
    this.eSubscription.unsubscribe();
  }

}
