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
  selector: 'bh-Pie_Chart',
  templateUrl: './Pie_Chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Pie_ChartComponent {
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
      this.sd_J7WjWzE7i7i0fRRz(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_J7WjWzE7i7i0fRRz(bh) {
    try {
      bh = this.sd_vNIdKfwsCLJZ3KiA(bh);
      //appendnew_next_sd_J7WjWzE7i7i0fRRz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J7WjWzE7i7i0fRRz');
    }
  }

  //appendnew_flow_Pie_ChartComponent_start

  sd_vNIdKfwsCLJZ3KiA(bh) {
    try {
      bh = this.sd_ZrT9Cu3ABeLvUzEm(bh);
      //appendnew_next_sd_vNIdKfwsCLJZ3KiA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vNIdKfwsCLJZ3KiA');
    }
  }

  async sd_ZrT9Cu3ABeLvUzEm(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/piechart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.pieChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      //appendnew_next_sd_ZrT9Cu3ABeLvUzEm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZrT9Cu3ABeLvUzEm');
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
  //appendnew_flow_Pie_ChartComponent_Catch
}
