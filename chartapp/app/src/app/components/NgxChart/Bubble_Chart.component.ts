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
  selector: 'bh-Bubble_Chart',
  templateUrl: './Bubble_Chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Bubble_ChartComponent {
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
      this.sd_zSIRJX4pjlOXtigo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zSIRJX4pjlOXtigo(bh) {
    try {
      bh = this.sd_xRc7xGuzOsp0HoRp(bh);
      //appendnew_next_sd_zSIRJX4pjlOXtigo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zSIRJX4pjlOXtigo');
    }
  }

  //appendnew_flow_Bubble_ChartComponent_start

  async sd_xRc7xGuzOsp0HoRp(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/bubblechart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.bubbleChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_ajJnjLSZdjluSTbJ(bh);
      //appendnew_next_sd_xRc7xGuzOsp0HoRp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xRc7xGuzOsp0HoRp');
    }
  }

  sd_ajJnjLSZdjluSTbJ(bh) {
    try {
      //appendnew_next_sd_ajJnjLSZdjluSTbJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ajJnjLSZdjluSTbJ');
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
  //appendnew_flow_Bubble_ChartComponent_Catch
}
