import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from '../_models/activity';
import { IApiData } from '../_models/iapidata';
import { ActivityService } from '../_services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  aSubscription: Subscription;
  testActivities: Activity[]= [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {

    this.aSubscription = this.activityService.getActivities().subscribe(data => {

    let activitydata = data as IApiData;
    //  console.log(activitydata);

    activitydata.data.forEach(element => {
      this.testActivities.push(element);
    });

    //  console.log(this.testActivities);

    this.testActivities.forEach(element => {
      // console.log(element.description.body);
    });





    }, error => {
      console.log(error);
    });

    }

    ngOnDestroy(){
      this.aSubscription.unsubscribe();
    }


}
