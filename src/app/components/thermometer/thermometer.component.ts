import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input()featureName:string;
  @Input()featurePercent:number;

  @Input()featurePercentStr:string;
  @Input()featureColor:string;
  widthStr:string;
  ariaStr:string;
  constructor() { }

  ngOnInit() {
this.widthStr="width: "+this.featurePercentStr;
//this.ariaStr=
  }

}
