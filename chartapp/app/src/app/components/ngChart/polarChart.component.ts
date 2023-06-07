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
  selector: 'bh-polarChart',
  templateUrl: './polarChart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class polarChartComponent {
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
      this.sd_AF0207Zi7YUEZp8B(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AF0207Zi7YUEZp8B(bh) {
    try {
      bh = this.sd_Bitduw3SEH9VDMLU(bh);
      //appendnew_next_sd_AF0207Zi7YUEZp8B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AF0207Zi7YUEZp8B');
    }
  }

  //appendnew_flow_polarChartComponent_start

  sd_Bitduw3SEH9VDMLU(bh) {
    try {
      const page = this.page;
      page.polarareaChartData = [
        {
          data: [300, 500, 100],
        },
      ];

      page.polarareaChartLabels = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
      ];

      page.polarareaChartOptions = {
        responsive: true,
      };

      bh = this.sd_YIwj35oUup1QMvsk(bh);
      //appendnew_next_sd_Bitduw3SEH9VDMLU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bitduw3SEH9VDMLU');
    }
  }

  sd_YIwj35oUup1QMvsk(bh) {
    try {
      this.page.polarareaChartLabels = this.page.polarareaChartLabels;
      this.page.polarareaChartOptions = this.page.polarareaChartOptions;
      this.page.polarareaChartData = this.page.polarareaChartData;

      //appendnew_next_sd_YIwj35oUup1QMvsk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YIwj35oUup1QMvsk');
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
  //appendnew_flow_polarChartComponent_Catch
}
