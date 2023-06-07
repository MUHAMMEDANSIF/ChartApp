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
  selector: 'bh-doughnutChart',
  templateUrl: './doughnutChart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class doughnutChartComponent {
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
      this.sd_OvBd1hzU9avRaYbp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_OvBd1hzU9avRaYbp(bh) {
    try {
      bh = this.sd_Ir8FKXz9QQMqfgRc(bh);
      //appendnew_next_sd_OvBd1hzU9avRaYbp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OvBd1hzU9avRaYbp');
    }
  }

  //appendnew_flow_doughnutChartComponent_start

  sd_Ir8FKXz9QQMqfgRc(bh) {
    try {
      const page = this.page;
      page.doughnutChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      ];

      page.doughnutChartLabels = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
      ];

      bh = this.sd_bo5Xa9CyP2oB5RxD(bh);
      //appendnew_next_sd_Ir8FKXz9QQMqfgRc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ir8FKXz9QQMqfgRc');
    }
  }

  sd_bo5Xa9CyP2oB5RxD(bh) {
    try {
      //appendnew_next_sd_bo5Xa9CyP2oB5RxD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bo5Xa9CyP2oB5RxD');
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
  //appendnew_flow_doughnutChartComponent_Catch
}
