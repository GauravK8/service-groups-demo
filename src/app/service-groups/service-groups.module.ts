import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceGroupsComponent } from './service-groups.component';
import { ServiceGroupsRoutingModule } from './service-groups-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../core/services/data.service';


@NgModule({
  declarations: [ServiceGroupsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ServiceGroupsRoutingModule
  ],
  providers: [DataService]
})
export class ServiceGroupsModule { }
