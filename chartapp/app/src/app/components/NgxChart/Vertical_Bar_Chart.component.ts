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
  selector: 'bh-Vertical_Bar_Chart',
  templateUrl: './Vertical_Bar_Chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Vertical_Bar_ChartComponent {
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
      this.sd_iwpR7vEEu4x7uHCT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iwpR7vEEu4x7uHCT(bh) {
    try {
      bh = this.sd_J0sbhWgMjdAfgUkL(bh);
      //appendnew_next_sd_iwpR7vEEu4x7uHCT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iwpR7vEEu4x7uHCT');
    }
  }

  //appendnew_flow_Vertical_Bar_ChartComponent_start

  async sd_J0sbhWgMjdAfgUkL(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/verticalchart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.sverticalbarChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_tLbPKl4YVzZ5mad6(bh);
      //appendnew_next_sd_J0sbhWgMjdAfgUkL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J0sbhWgMjdAfgUkL');
    }
  }

  sd_tLbPKl4YVzZ5mad6(bh) {
    try {
      this.page.sverticalbarChartData = this.page.sverticalbarChartData;

      //appendnew_next_sd_tLbPKl4YVzZ5mad6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tLbPKl4YVzZ5mad6');
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
  //appendnew_flow_Vertical_Bar_ChartComponent_Catch
}
