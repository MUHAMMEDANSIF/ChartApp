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
  selector: 'bh-Stacked_Horizontal_Bar',
  templateUrl: './Stacked_Horizontal_Bar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Stacked_Horizontal_BarComponent {
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
      this.sd_zKifHtNFqNfSl9Kq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zKifHtNFqNfSl9Kq(bh) {
    try {
      bh = this.sd_69B76XtSiDzrdkOG(bh);
      //appendnew_next_sd_zKifHtNFqNfSl9Kq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zKifHtNFqNfSl9Kq');
    }
  }

  //appendnew_flow_Stacked_Horizontal_BarComponent_start

  sd_69B76XtSiDzrdkOG(bh) {
    try {
      const page = this.page;
      page.horizontalbarChartData = [
        { name: 'Germany', value: 40632 },
        { name: 'United States', value: 50000 },
        { name: 'France', value: 36745 },
        { name: 'United Kingdom', value: 36240 },
        { name: 'Spain', value: 33000 },
        { name: 'Italy', value: 35800 },
      ];

      bh = this.sd_NG6FXp4qyKNmCpWj(bh);
      //appendnew_next_sd_69B76XtSiDzrdkOG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_69B76XtSiDzrdkOG');
    }
  }

  sd_NG6FXp4qyKNmCpWj(bh) {
    try {
      this.page.horizontalbarChartData = this.page.horizontalbarChartData;

      //appendnew_next_sd_NG6FXp4qyKNmCpWj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NG6FXp4qyKNmCpWj');
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
  //appendnew_flow_Stacked_Horizontal_BarComponent_Catch
}
