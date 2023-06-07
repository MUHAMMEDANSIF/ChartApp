import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-bubbleChartComponent
import { bubbleChartComponent } from '../components/ngChart/bubbleChart.component';
//CORE_REFERENCE_IMPORT-radarChartComponent
import { radarChartComponent } from '../components/ngChart/radarChart.component';
//CORE_REFERENCE_IMPORT-polarChartComponent
import { polarChartComponent } from '../components/ngChart/polarChart.component';
//CORE_REFERENCE_IMPORT-doughnutChartComponent
import { doughnutChartComponent } from '../components/ngChart/doughnutChart.component';
//CORE_REFERENCE_IMPORT-pieChartComponent
import { pieChartComponent } from '../components/ngChart/pieChart.component';
//CORE_REFERENCE_IMPORT-barChartComponent
import { barChartComponent } from '../components/ngChart/barChart.component';
//CORE_REFERENCE_IMPORT-lineChartComponent
import { lineChartComponent } from '../components/ngChart/lineChart.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/Home/Home.component';
//CORE_REFERENCE_IMPORT-Hoizontal_Bar_ChartComponent
import { Hoizontal_Bar_ChartComponent } from '../components/NgxChart/Hoizontal_Bar_Chart.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-bubbleChartComponent
  bubbleChartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-radarChartComponent
  radarChartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-polarChartComponent
  polarChartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-doughnutChartComponent
  doughnutChartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pieChartComponent
  pieChartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-barChartComponent
  barChartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-lineChartComponent
  lineChartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Hoizontal_Bar_ChartComponent
  Hoizontal_Bar_ChartComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      { path: 'HoizontalBarChart', component: Hoizontal_Bar_ChartComponent },
      { path: 'line', component: lineChartComponent },
      { path: 'bar', component: barChartComponent },
      { path: 'pie', component: pieChartComponent },
      { path: 'doughnut', component: doughnutChartComponent },
      { path: 'polar', component: polarChartComponent },
      { path: 'radar', component: radarChartComponent },
      { path: 'bubble', component: bubbleChartComponent },
    ],
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
