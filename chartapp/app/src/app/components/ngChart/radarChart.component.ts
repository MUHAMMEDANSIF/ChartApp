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
  selector: 'bh-radarChart',
  templateUrl: './radarChart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class radarChartComponent {
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
      this.sd_BfOkdbvKeKtEoLuw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_BfOkdbvKeKtEoLuw(bh) {
    try {
      bh = this.sd_7nsBZoqB2J4WfGE1(bh);
      //appendnew_next_sd_BfOkdbvKeKtEoLuw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BfOkdbvKeKtEoLuw');
    }
  }

  //appendnew_flow_radarChartComponent_start

  sd_7nsBZoqB2J4WfGE1(bh) {
    try {
      const page = this.page;
      page.radarChartData = [
        {
          data: [300, 500, 100],
        },
      ];

      page.radarChartLabels = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
      ];

      page.radarChartOptions = {
        responsive: true,
      };

      bh = this.sd_KE3WZHpB8SONS1sB(bh);
      //appendnew_next_sd_7nsBZoqB2J4WfGE1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7nsBZoqB2J4WfGE1');
    }
  }

  sd_KE3WZHpB8SONS1sB(bh) {
    try {
      //appendnew_next_sd_KE3WZHpB8SONS1sB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KE3WZHpB8SONS1sB');
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
  //appendnew_flow_radarChartComponent_Catch
}
