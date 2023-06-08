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
  selector: 'bh-Gauge_Chart',
  templateUrl: './Gauge_Chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Gauge_ChartComponent {
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
      this.sd_IxhgHCtagaUZS3zT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IxhgHCtagaUZS3zT(bh) {
    try {
      bh = this.sd_V0pYuLqXfOShIM4x(bh);
      //appendnew_next_sd_IxhgHCtagaUZS3zT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IxhgHCtagaUZS3zT');
    }
  }

  //appendnew_flow_Gauge_ChartComponent_start

  async sd_V0pYuLqXfOShIM4x(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/gaugechart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.GaugeChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_PfeDh3oTdgunXcPY(bh);
      //appendnew_next_sd_V0pYuLqXfOShIM4x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V0pYuLqXfOShIM4x');
    }
  }

  sd_PfeDh3oTdgunXcPY(bh) {
    try {
      this.page.GaugeChartData = this.page.GaugeChartData;

      //appendnew_next_sd_PfeDh3oTdgunXcPY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PfeDh3oTdgunXcPY');
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
  //appendnew_flow_Gauge_ChartComponent_Catch
}
