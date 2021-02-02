import { Component, OnInit } from '@angular/core';
import { EVENTS } from "./event-list";

@Component({
  selector: 'app-timeline',
  templateUrl: './event-line.component.html',
  styleUrls: ['./event-line.component.scss']
})
export class EventLineComponent implements OnInit {
  eventList = EVENTS;

  constructor() { }

  ngOnInit(): void {}
}
