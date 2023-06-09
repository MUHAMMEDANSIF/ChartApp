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
  selector: 'bh-Hoizontal_Bar_Chart',
  templateUrl: './Hoizontal_Bar_Chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Hoizontal_Bar_ChartComponent {
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
      this.sd_yk0bKsWMmInAv4HS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yk0bKsWMmInAv4HS(bh) {
    try {
      bh = this.sd_elJuP7kQDJ5SM0Tq(bh);
      //appendnew_next_sd_yk0bKsWMmInAv4HS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yk0bKsWMmInAv4HS');
    }
  }

  //appendnew_flow_Hoizontal_Bar_ChartComponent_start

  async sd_elJuP7kQDJ5SM0Tq(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/horizontalbarchart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.horizontalbarChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_tq0PKzgdfsSHpqVu(bh);
      //appendnew_next_sd_elJuP7kQDJ5SM0Tq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_elJuP7kQDJ5SM0Tq');
    }
  }

  sd_tq0PKzgdfsSHpqVu(bh) {
    try {
      this.page.horizontalbarChartData = this.page.horizontalbarChartData;

      //appendnew_next_sd_tq0PKzgdfsSHpqVu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tq0PKzgdfsSHpqVu');
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
  //appendnew_flow_Hoizontal_Bar_ChartComponent_Catch
}
