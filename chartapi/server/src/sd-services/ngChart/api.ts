let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
//append_imports_end
export class api {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'api';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new api(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: api');

    //appendnew_flow_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: api');

    this.app['get'](
      `${this.serviceBasePath}/ng/linechart`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_k9TwhR0Vg3OlIMxO(bh, parentSpanInst);
          //appendnew_next_sd_0GQLOCDTJ3Czt3Ae
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0GQLOCDTJ3Czt3Ae');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ng/piechart`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Zvaf0kV620dynGyK(bh, parentSpanInst);
          //appendnew_next_sd_YOxy0VSkCyvXEk87
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YOxy0VSkCyvXEk87');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ng/barchart`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Jyj244zLXDatz2hR(bh, parentSpanInst);
          //appendnew_next_sd_txLHHxyNJdZTBvAg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_txLHHxyNJdZTBvAg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ng/doughnutchart`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Bq6FsVyvE9pelz5U(bh, parentSpanInst);
          //appendnew_next_sd_PdpKYNtkppS9bhtO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PdpKYNtkppS9bhtO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ng/polarchart`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_5WV0yllZ1wTup3Qy(bh, parentSpanInst);
          //appendnew_next_sd_lJaClgmKTL9OlH2C
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lJaClgmKTL9OlH2C');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ng/bubblechart`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_wRe0rjkBdkcTDetv(bh, parentSpanInst);
          //appendnew_next_sd_mHJFx0eg9IwZB75y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mHJFx0eg9IwZB75y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ng/radarchart`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_xyWfzXGDxQ45EA8m(bh, parentSpanInst);
          //appendnew_next_sd_WDBGNfc8Yh3tiOz2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WDBGNfc8Yh3tiOz2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_api_HttpIn
  }
  //   service flows_api

  //appendnew_flow_api_start

  async sd_k9TwhR0Vg3OlIMxO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k9TwhR0Vg3OlIMxO',
      parentSpanInst
    );
    try {
      bh.local.data = {
        key: [
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
        ],
        label: [
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
        ],
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_La81gXM2tsgFtnFc(bh, parentSpanInst);
      //appendnew_next_sd_k9TwhR0Vg3OlIMxO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k9TwhR0Vg3OlIMxO',
        spanInst,
        'sd_k9TwhR0Vg3OlIMxO'
      );
    }
  }

  async sd_La81gXM2tsgFtnFc(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_La81gXM2tsgFtnFc');
    }
  }

  async sd_Zvaf0kV620dynGyK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Zvaf0kV620dynGyK',
      parentSpanInst
    );
    try {
      bh.local.data = {
        data: [{ data: [300, 500, 100] }],
        labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
        options: {
          responsive: true,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZYOqrUe1Q5qsPWvy(bh, parentSpanInst);
      //appendnew_next_sd_Zvaf0kV620dynGyK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zvaf0kV620dynGyK',
        spanInst,
        'sd_Zvaf0kV620dynGyK'
      );
    }
  }

  async sd_ZYOqrUe1Q5qsPWvy(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZYOqrUe1Q5qsPWvy');
    }
  }

  async sd_Jyj244zLXDatz2hR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jyj244zLXDatz2hR',
      parentSpanInst
    );
    try {
      bh.local.data = {
        data: [
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ],
        label: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_GmzXlAzEy8CwMwNA(bh, parentSpanInst);
      //appendnew_next_sd_Jyj244zLXDatz2hR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jyj244zLXDatz2hR',
        spanInst,
        'sd_Jyj244zLXDatz2hR'
      );
    }
  }

  async sd_GmzXlAzEy8CwMwNA(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GmzXlAzEy8CwMwNA');
    }
  }

  async sd_Bq6FsVyvE9pelz5U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bq6FsVyvE9pelz5U',
      parentSpanInst
    );
    try {
      bh.local.data = {
        data: [
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ],
        label: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_t3zPyGvp9uFgPF2e(bh, parentSpanInst);
      //appendnew_next_sd_Bq6FsVyvE9pelz5U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bq6FsVyvE9pelz5U',
        spanInst,
        'sd_Bq6FsVyvE9pelz5U'
      );
    }
  }

  async sd_t3zPyGvp9uFgPF2e(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t3zPyGvp9uFgPF2e');
    }
  }

  async sd_5WV0yllZ1wTup3Qy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5WV0yllZ1wTup3Qy',
      parentSpanInst
    );
    try {
      bh.local.data = {
        data: [{ data: [300, 500, 100] }],
        labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
        options: {
          responsive: true,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_bwagBSHJ0rSWxGfN(bh, parentSpanInst);
      //appendnew_next_sd_5WV0yllZ1wTup3Qy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5WV0yllZ1wTup3Qy',
        spanInst,
        'sd_5WV0yllZ1wTup3Qy'
      );
    }
  }

  async sd_bwagBSHJ0rSWxGfN(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bwagBSHJ0rSWxGfN');
    }
  }

  async sd_wRe0rjkBdkcTDetv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wRe0rjkBdkcTDetv',
      parentSpanInst
    );
    try {
      bh.local.data = {
        data: [
          { x: 100, y: 5, r: 10 },
          { x: 70, y: 30, r: 20 },
          { x: 53, y: 5, r: 10 },
          { x: 80, y: 52, r: 20 },
        ],
        labels: ['Deer Population'],
        colors: [
          {
            backgroundColor: '#ff0000',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          },
        ],
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TB0qbIJBVi2MPCqR(bh, parentSpanInst);
      //appendnew_next_sd_wRe0rjkBdkcTDetv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wRe0rjkBdkcTDetv',
        spanInst,
        'sd_wRe0rjkBdkcTDetv'
      );
    }
  }

  async sd_TB0qbIJBVi2MPCqR(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TB0qbIJBVi2MPCqR');
    }
  }

  async sd_xyWfzXGDxQ45EA8m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xyWfzXGDxQ45EA8m',
      parentSpanInst
    );
    try {
      bh.local.data = {
        key: [
          {
            data: [25, 11, 8, 9, 18, 29],
          },
        ],
        labels: ([] = [
          'Emergency & Casualty',
          'Labor Ward',
          'Endoscopy Ward',
          'Coronary Ward',
          'Surgical Ward',
          'General Ward',
        ]),
        options: {
          responsive: true,
        },
      };
      console.log(bh.local.data);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xNQso6GC1gglLlG1(bh, parentSpanInst);
      //appendnew_next_sd_xyWfzXGDxQ45EA8m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xyWfzXGDxQ45EA8m',
        spanInst,
        'sd_xyWfzXGDxQ45EA8m'
      );
    }
  }

  async sd_xNQso6GC1gglLlG1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xNQso6GC1gglLlG1');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_api_Catch
}
