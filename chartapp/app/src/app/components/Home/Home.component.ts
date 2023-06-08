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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
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
      this.sd_6LaDk8CFfM0wFpOL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6LaDk8CFfM0wFpOL(bh) {
    try {
      bh = this.sd_7NOw7MzT2p4e8v78(bh);
      //appendnew_next_sd_6LaDk8CFfM0wFpOL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6LaDk8CFfM0wFpOL');
    }
  }

  ngChart(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_mYc8zquOsXJF2LNA(bh);
      //appendnew_next_ngChart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1JAdF2U1ElrtXLM1');
    }
  }

  ngxChart(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_nEeCQ3O656wDGW27(bh);
      //appendnew_next_ngxChart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rqGzBE7WlFWHoKjl');
    }
  }

  sd_zq8SW4VuuAPSxuur(value: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};

      bh = this.sd_has2Vm20CBMlolaM(bh);
      //appendnew_next_sd_zq8SW4VuuAPSxuur
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zq8SW4VuuAPSxuur');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_7NOw7MzT2p4e8v78(bh) {
    try {
      bh = this.sd_cD8aFynettfc9CeB(bh);
      //appendnew_next_sd_7NOw7MzT2p4e8v78
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7NOw7MzT2p4e8v78');
    }
  }

  sd_cD8aFynettfc9CeB(bh) {
    try {
      //appendnew_next_sd_cD8aFynettfc9CeB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cD8aFynettfc9CeB');
    }
  }

  sd_mYc8zquOsXJF2LNA(bh) {
    try {
      const page = this.page;
      page.data = [
        { value: 'line', viewValue: 'line' },
        { value: 'bar', viewValue: 'bar' },
        { value: 'pie', viewValue: 'pie' },
        { value: 'doughnut', viewValue: 'doughnut' },
        { value: 'bubble', viewValue: 'bubble' },
        { value: 'radar', viewValue: 'radar' },
        { value: 'polar', viewValue: 'polar' },
      ];

      //appendnew_next_sd_mYc8zquOsXJF2LNA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mYc8zquOsXJF2LNA');
    }
  }

  sd_nEeCQ3O656wDGW27(bh) {
    try {
      const page = this.page;
      page.data = [
        { value: 'HoizontalBarChart', viewValue: 'HoizontalBarChart' },
        { value: 'PieChart', viewValue: 'Pie Chart' },
        { value: 'LineChart', viewValue: 'LineChart' },
        { value: 'VerticalBar', viewValue: 'VerticalBar' },
        { value: 'AreaChart', viewValue: 'AreaChart' },
        { value: 'GaugeChart', viewValue: 'GaugeChart' },
        { value: 'StackedHorizontal', viewValue: 'StackedHorizontal' },
        { value: 'StackedVerticalBar', viewValue: 'StackedVerticalBar' },
        { value: 'BubbleChart', viewValue: 'BubbleChart' },
      ];

      //appendnew_next_sd_nEeCQ3O656wDGW27
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nEeCQ3O656wDGW27');
    }
  }

  sd_has2Vm20CBMlolaM(bh) {
    try {
      const page = this.page;
      bh.local.path = `/Home/${bh.input.value.value}`;

      console.log(bh.input.value);

      bh = this.sd_KKovNedOeZPfCauF(bh);
      //appendnew_next_sd_has2Vm20CBMlolaM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_has2Vm20CBMlolaM');
    }
  }

  async sd_KKovNedOeZPfCauF(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.local.path);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_KKovNedOeZPfCauF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KKovNedOeZPfCauF');
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
  //appendnew_flow_HomeComponent_Catch
}
