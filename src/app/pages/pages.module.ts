import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { EscritoresComponent } from "./escritores/escritores.component";
import { PueblosComponent } from "./pueblos/pueblos.component";
import { HeaderComponent } from "../components/header/header.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { DialogComponent } from "../components/dialog/dialog.component";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressRouterModule } from "@ngx-progressbar/router";

import { MatFormFieldModule,
         MatInputModule,
         MatTableModule,
         MatPaginatorModule,
         MatSelectModule,
         MatDialogModule,
        MatCheckboxModule } from "@angular/material";
import {
  NavigationStart,
  NavigationError,
  NavigationCancel,
  RouterModule,
  GuardsCheckEnd,
  NavigationEnd,
  GuardsCheckStart
} from "@angular/router";
import { CreatePueblosComponent } from "./pueblos/create-pueblos/create-pueblos.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ActividadesComponent } from './actividades/actividades.component';
import { ActividadesCreateComponent } from './actividades/actividades-create/actividades-create.component';
import { GastronomiaComponent } from "./gastronomia/gastronomia.component";
import { CreateGastronomiaComponent } from './gastronomia/create-gastronomia/create-gastronomia.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ActividadesListComponent } from './actividades/actividades-list/actividades-list.component';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

const PAGES_COMPONENTS = [
  PagesComponent,
  EscritoresComponent,
  PueblosComponent,
  DashboardComponent,
  HeaderComponent,
  SidebarComponent,
  CreatePueblosComponent,
  DialogComponent,
  ActividadesComponent,
  ActividadesCreateComponent,
  GastronomiaComponent,
  CreateGastronomiaComponent,
  ActividadesListComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule,
    NgProgressModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FusionChartsModule ,
    NgProgressRouterModule.withConfig({
      startEvents: [GuardsCheckStart, NavigationStart],
      completeEvents: [NavigationEnd, NavigationError, NavigationCancel],
      id: "progresBar"
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsbC9LhwM5QEi8xaJ26verzmC7832rQAo'
    })
  ],
  declarations: [...PAGES_COMPONENTS],
  providers: [],
  entryComponents: [
    DialogComponent
  ]
})
export class PagesModule {}
