import { Component } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sortedData: any[] = [];
  // Array from january to december 
  monthArray = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];

  // Data from API 
  data = [
    { year: 2013, month: 'FEBRUARY' },
    { year: 2013, month: 'JANUARY' },
    { year: 2013, month: 'MARCH' },
    { year: 2013, month: 'APRIL' },
  ];

  ngOnInit() {
    this.sortedData = _.orderBy(
      this.data,
      [(datas: any) => datas.year, 
    (user: any) => this.monthArray.indexOf(user.month)],
      ['asc', 
       'desc']
    );
    console.log(this.sortedData);

    // this.sortedData = _.orderBy(
    //   this.data,
    //   [(user: any) => this.monthArray.indexOf(user.month)],
    //   [ 'asc']
    // );
    // console.log(this.sortedData);
  }
}
