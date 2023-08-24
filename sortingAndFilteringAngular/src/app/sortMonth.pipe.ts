import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortMonth"
})
export class SortMonthPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value);
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    value.sort(function(a:any, b:any) {
      return (
        months.indexOf(a.key) -
        months.indexOf(b.key)
      );
    });
    return value;
  }
}