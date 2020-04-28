import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServiceGroupsRoutes } from './service-groups.route';

@NgModule({
  imports: [RouterModule.forChild(ServiceGroupsRoutes)],
  exports: [RouterModule]
})
export class ServiceGroupsRoutingModule { }
