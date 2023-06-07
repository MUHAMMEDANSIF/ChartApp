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
  selector: 'bh-lineChart',
  templateUrl: './lineChart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class lineChartComponent {
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
      this.sd_NkEMslfE88TTE1oe(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_NkEMslfE88TTE1oe(bh) {
    try {
      bh = this.sd_kZ3cNHBFPu7TptVH(bh);
      //appendnew_next_sd_NkEMslfE88TTE1oe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NkEMslfE88TTE1oe');
    }
  }

  mychartclick(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_ZMkVp0OBEXzjEMEc(bh);
      //appendnew_next_mychartclick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DEMpfv1tGBweMKHb');
    }
  }

  //appendnew_flow_lineChartComponent_start

  sd_kZ3cNHBFPu7TptVH(bh) {
    try {
      const page = this.page;
      page.lineChartData = [
        {
          data: [65, 59, 80, 81, 56, 55, 40, 10, 20, 30, 40, 50],
          label: 'Series A',
        },
        {
          data: [28, 48, 40, 19, 86, 25, 90, 11, 23, 31, 42, 51],
          label: 'Series B',
        },
        {
          data: [18, 45, 75, 9, 100, 26, 40, 12, 24, 32, 43, 52],
          label: 'Series C',
        },
        {
          data: [15, 42, 76, 7, 105, 25, 40, 12, 24, 32, 43, 52],
          label: 'Series D',
        },
        {
          data: [19, 48, 77, 5, 103, 27, 40, 12, 24, 32, 43, 52],
          label: 'Series E',
        },
        {
          data: [28, 47, 40, 19, 86, 28, 90, 11, 23, 31, 42, 51],
          label: 'Series F',
        },
        {
          data: [25, 46, 42, 15, 85, 27, 90, 11, 23, 31, 42, 51],
          label: 'Series G',
        },
      ];
      page.lineChartLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'nov',
        'dec',
      ];

      bh = this.sd_KWACfrWTFn886CPr(bh);
      //appendnew_next_sd_kZ3cNHBFPu7TptVH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kZ3cNHBFPu7TptVH');
    }
  }

  sd_KWACfrWTFn886CPr(bh) {
    try {
      this.page.lineChartData = this.page.lineChartData;
      this.page.lineChartLabels = this.page.lineChartLabels;

      //appendnew_next_sd_KWACfrWTFn886CPr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KWACfrWTFn886CPr');
    }
  }

  sd_ZMkVp0OBEXzjEMEc(bh) {
    try {
      const page = this.page;
      alert('chart clicked');

      //appendnew_next_sd_ZMkVp0OBEXzjEMEc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZMkVp0OBEXzjEMEc');
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
  //appendnew_flow_lineChartComponent_Catch
}
