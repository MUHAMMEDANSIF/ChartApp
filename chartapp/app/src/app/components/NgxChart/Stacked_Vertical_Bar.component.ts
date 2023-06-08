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
  selector: 'bh-Stacked_Vertical_Bar',
  templateUrl: './Stacked_Vertical_Bar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Stacked_Vertical_BarComponent {
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
      this.sd_e41y2nv5cijsrxOn(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_e41y2nv5cijsrxOn(bh) {
    try {
      bh = this.sd_G7u3K6NIWU7G84Up(bh);
      //appendnew_next_sd_e41y2nv5cijsrxOn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e41y2nv5cijsrxOn');
    }
  }

  //appendnew_flow_Stacked_Vertical_BarComponent_start

  async sd_G7u3K6NIWU7G84Up(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/ngx/verticalbarchart',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.sverticalbarChartData = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_a5evIKPSKvti5NJ6(bh);
      //appendnew_next_sd_G7u3K6NIWU7G84Up
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G7u3K6NIWU7G84Up');
    }
  }

  sd_a5evIKPSKvti5NJ6(bh) {
    try {
      const page = this.page; // page.sverticalbarChartData =  [
      //   {
      //     "name": "Germany",
      //     "series": [{"name": "2010","value": 40632},
      //       {"name": "2000","value": 36953},
      //       {"name": "1990","value": 31476} ]},
      //   {
      //     "name": "United States",
      //     "series": [{"name": "2010","value": 49737},
      //       {"name": "2000","value": 45986},
      //       {"name": "1990","value": 37060}]},

      // ];

      console.log(page.sverticalbarChartData);

      bh = this.sd_OKnP2cTNHBjrG2ls(bh);
      //appendnew_next_sd_a5evIKPSKvti5NJ6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a5evIKPSKvti5NJ6');
    }
  }

  sd_OKnP2cTNHBjrG2ls(bh) {
    try {
      this.page.sverticalbarChartData = this.page.sverticalbarChartData;

      //appendnew_next_sd_OKnP2cTNHBjrG2ls
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OKnP2cTNHBjrG2ls');
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
  //appendnew_flow_Stacked_Vertical_BarComponent_Catch
}
