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
  selector: 'bh-pieChart',
  templateUrl: './pieChart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pieChartComponent {
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
      this.sd_LSxQXZGchLz4LZNp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_LSxQXZGchLz4LZNp(bh) {
    try {
      bh = this.sd_wwQ1A7RUVhP70BFb(bh);
      //appendnew_next_sd_LSxQXZGchLz4LZNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LSxQXZGchLz4LZNp');
    }
  }

  //appendnew_flow_pieChartComponent_start

  async sd_wwQ1A7RUVhP70BFb(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ng/piechart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.pieChartData = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_WlpuGpzoM2DHyKgn(bh);
      //appendnew_next_sd_wwQ1A7RUVhP70BFb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wwQ1A7RUVhP70BFb');
    }
  }

  sd_WlpuGpzoM2DHyKgn(bh) {
    try {
      const page = this.page; // page.pieChartData = [{
      //   data:[300, 500, 100]}
      //                ];

      // page.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];

      // page.pieChartOptions = {
      //   responsive: true
      // }
      page.pieChartData = bh.local.pieChartData.data;
      page.pieChartLabel = bh.local.pieChartData.labels;
      page.pieChartOptions = bh.local.pieChartData.options;

      bh = this.sd_bbtia8aVUFTRIwvs(bh);
      //appendnew_next_sd_WlpuGpzoM2DHyKgn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WlpuGpzoM2DHyKgn');
    }
  }

  sd_bbtia8aVUFTRIwvs(bh) {
    try {
      this.page.pieChartLabels = this.page.pieChartLabels;
      this.page.pieChartOptions = this.page.pieChartOptions;
      this.page.pieChartData = this.page.pieChartData;

      //appendnew_next_sd_bbtia8aVUFTRIwvs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bbtia8aVUFTRIwvs');
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
  //appendnew_flow_pieChartComponent_Catch
}
