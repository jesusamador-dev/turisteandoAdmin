import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EscritoresComponent } from "./escritores/escritores.component";
import { AuthGuard } from '../services/guard/auth.guard';
import { PueblosComponent } from "./pueblos/pueblos.component";
import { CreatePueblosComponent } from "./pueblos/create-pueblos/create-pueblos.component";
import { ActividadesComponent } from "./actividades/actividades.component";
import { ActividadesCreateComponent } from './actividades/actividades-create/actividades-create.component';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { CreateGastronomiaComponent } from './gastronomia/create-gastronomia/create-gastronomia.component';
import { ActividadesListComponent } from './actividades/actividades-list/actividades-list.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
        canActivate: [AuthGuard]
      },
      {
        path: "escritores",
        component: EscritoresComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pueblos",
        component: PueblosComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pueblos/create",
        component: CreatePueblosComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pueblos/actividades/:id",
        component: ActividadesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pueblos/actividades/:id/create",
        component: ActividadesCreateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pueblos/gastronomia/:id",
        component: GastronomiaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pueblos/gastronomia/:id/create",
        component: CreateGastronomiaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "actividades",
        component: ActividadesListComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}