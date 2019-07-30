import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PlanATripPage } from "./plan-a-trip.page";
import { PlanATrip2Page } from "./plan-a-trip2/plan-a-trip2.page";

const routes: Routes = [
  {
    path: "",
    component: PlanATripPage,
    children: [
      { path: "", redirectTo: "2", pathMatch: "full" },
      { path: "2/:id1", component: PlanATrip2Page },
      {
        path: "accomodation/:id1/:id2",
        loadChildren:
          "./accomodation/accomodation.module#AccomodationPageModule"
      },
      {
        path: "details/:id1/:id2",
        loadChildren: "./details/details.module#DetailsPageModule"
      },
      {
        path: "transport/:id1/:id2",
        loadChildren: "./transport/transport.module#TransportPageModule"
      },
      {
        path: "activities/:id1/:id2",
        loadChildren: "./activities/activities.module#ActivitiesPageModule"
      },
      {
        path: "decide/:id1",
        loadChildren: "./decide/decide.module#DecidePageModule"
      },
      {
        path: "view-itenrary/:id1",
        loadChildren:
          "./view-itenrary/view-itenrary.module#ViewItenraryPageModule"
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanATripRoutingModule {}
