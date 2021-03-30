import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventService } from '../_services/event.service';

import { EventsComponent } from './events.component';

class MockEventService {
   meta: {
  count: string;
  next: string;
};
data: [   {

  id: string;
  name: {
    fi: string;
    en: string;
    sv: string;
    zh: string
  };
  source_type: {};
  info_url: string;
modified_at: string;
  location: {
    lat: {};
    lon: {};
    address: {
      street_address: string;
      postal_code: string;
      locality: string
    }
  };
  description: {
    intro: string;
    body: string;
    images: [
      {
        url: string;
        copyright_holder: string;
        license_type: {}
      }
    ]
  };
  tags: [
    {
      id: string;
      name: string
    }
  ];
  event_dates: {
    starting_day: string;
    ending_day: string;
    additional_description: [
      {
        langCode: string;
        text: string
      }
    ]
  }
}
]}

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let eventService: EventService;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ EventsComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        EventsComponent,
        { provide: EventService, useClass: MockEventService }
      ]
    }).compileComponents();
    // inject both the component and the dependent service.
      component = TestBed.inject(EventsComponent);
      eventService = TestBed.inject(EventService);
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(EventsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should not have eventData after construction', () => {
    expect(component.testEvents).toBeUndefined();
  });




});
