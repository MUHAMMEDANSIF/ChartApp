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
  selector: 'bh-Area_Chart',
  templateUrl: './Area_Chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Area_ChartComponent {
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
      this.sd_YrERgmPwnkSikp0E(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_YrERgmPwnkSikp0E(bh) {
    try {
      bh = this.sd_nEJnhHB8pyqJLtXX(bh);
      //appendnew_next_sd_YrERgmPwnkSikp0E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YrERgmPwnkSikp0E');
    }
  }

  //appendnew_flow_Area_ChartComponent_start

  sd_nEJnhHB8pyqJLtXX(bh) {
    try {
      bh = this.sd_Nc7MRxvRmnzUP04k(bh);
      //appendnew_next_sd_nEJnhHB8pyqJLtXX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nEJnhHB8pyqJLtXX');
    }
  }

  async sd_Nc7MRxvRmnzUP04k(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/areachart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.areaChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      //appendnew_next_sd_Nc7MRxvRmnzUP04k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Nc7MRxvRmnzUP04k');
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
  //appendnew_flow_Area_ChartComponent_Catch
}
