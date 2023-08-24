import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driving } from '../driving.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  drivingList: Driving[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDrivingList();
  }

  fetchDrivingList() {
    const url = 'https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi';
    this.http.get<Driving[]>(url).subscribe(data => {
      this.drivingList = data;
    });
  }

  rentDriving(driving: Driving) {
    console.log('Mezzo noleggiato:', driving);
  }
}
