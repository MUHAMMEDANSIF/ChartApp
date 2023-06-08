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
  selector: 'bh-Line_Chart',
  templateUrl: './Line_Chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Line_ChartComponent {
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
      this.sd_AlcFXWWkdVWbutWI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AlcFXWWkdVWbutWI(bh) {
    try {
      bh = this.sd_7QbU97R08x0u1KfA(bh);
      //appendnew_next_sd_AlcFXWWkdVWbutWI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AlcFXWWkdVWbutWI');
    }
  }

  //appendnew_flow_Line_ChartComponent_start

  async sd_7QbU97R08x0u1KfA(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/linechart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.lineChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_tmWcBJYyF7BFV7kq(bh);
      //appendnew_next_sd_7QbU97R08x0u1KfA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7QbU97R08x0u1KfA');
    }
  }

  sd_tmWcBJYyF7BFV7kq(bh) {
    try {
      this.page.lineChartData = this.page.lineChartData;

      //appendnew_next_sd_tmWcBJYyF7BFV7kq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tmWcBJYyF7BFV7kq');
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
  //appendnew_flow_Line_ChartComponent_Catch
}
