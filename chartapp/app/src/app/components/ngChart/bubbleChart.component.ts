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
  selector: 'bh-bubbleChart',
  templateUrl: './bubbleChart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bubbleChartComponent {
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
      this.sd_xHC6VHcwo3Cf3Av1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xHC6VHcwo3Cf3Av1(bh) {
    try {
      bh = this.sd_Le8ucVzwQyqEocUk(bh);
      //appendnew_next_sd_xHC6VHcwo3Cf3Av1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xHC6VHcwo3Cf3Av1');
    }
  }

  //appendnew_flow_bubbleChartComponent_start

  sd_Le8ucVzwQyqEocUk(bh) {
    try {
      const page = this.page;
      page.bubbleChartData = [
        {
          label: ['Deer Population'],
          data: [
            { x: 100, y: 5, r: 10 },
            { x: 70, y: 30, r: 20 },
            { x: 53, y: 5, r: 10 },
            { x: 80, y: 52, r: 20 },
          ],
        },
      ];
      page.bubbleChartLabels = ['Deer Population'];

      page.bubbleChartColors = [
        {
          backgroundColor: '#ff0000',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        },
      ];

      bh = this.sd_mkShER5EA4zhwGnE(bh);
      //appendnew_next_sd_Le8ucVzwQyqEocUk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Le8ucVzwQyqEocUk');
    }
  }

  sd_mkShER5EA4zhwGnE(bh) {
    try {
      this.page.bubbleChartLabels = this.page.bubbleChartLabels;
      this.page.bubbleChartColors = this.page.bubbleChartColors;
      this.page.bubbleChartData = this.page.bubbleChartData;

      //appendnew_next_sd_mkShER5EA4zhwGnE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mkShER5EA4zhwGnE');
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
  //appendnew_flow_bubbleChartComponent_Catch
}
