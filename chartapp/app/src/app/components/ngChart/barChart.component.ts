/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-barChart',
  templateUrl: './barChart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class barChartComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_AcdXr1pyt1GrhUre(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AcdXr1pyt1GrhUre(bh) {
    try {
      bh = this.sd_wx9BxQei03qC5QvY(bh);
      //appendnew_next_sd_AcdXr1pyt1GrhUre
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AcdXr1pyt1GrhUre');
    }
  }

  //appendnew_flow_barChartComponent_start

  sd_wx9BxQei03qC5QvY(bh) {
    try {
      const page = this.page;
      page.barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      ];

      page.barChartLabels = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
      ];

      bh = this.sd_rPQVZTJFmxVWWiMO(bh);
      //appendnew_next_sd_wx9BxQei03qC5QvY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wx9BxQei03qC5QvY');
    }
  }

  sd_rPQVZTJFmxVWWiMO(bh) {
    try {
      this.page.barChartLabels = this.page.barChartLabels;
      this.page.barChartData = this.page.barChartData;

      //appendnew_next_sd_rPQVZTJFmxVWWiMO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rPQVZTJFmxVWWiMO');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_barChartComponent_Catch
}
