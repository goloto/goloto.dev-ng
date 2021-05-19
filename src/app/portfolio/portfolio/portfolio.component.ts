import { Component, OnInit } from '@angular/core';
import { RedbeeProjects } from "../redbee-projects";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = RedbeeProjects;

  constructor() { }

  ngOnInit(): void {
  }

}
