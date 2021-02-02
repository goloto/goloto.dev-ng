import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LinksComponent } from './links/links.component';
import { EventLineComponent } from './event-line/event-line.component';


@NgModule({
  declarations: [
    MainComponent,
    PersonalInfoComponent,
    LinksComponent,
    EventLineComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
