import { Component, Input, OnInit } from '@angular/core';
import { Driving } from '../driving.model';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {
  @Input() rentedDriving: Driving | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}