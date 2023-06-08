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
export class Api {
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
    this.serviceName = 'Api';
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
      instance = new Api(
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
      //appendnew_flow_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Api');

    //appendnew_flow_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Api');

    this.app['get'](
      `${this.serviceBasePath}/ngx/piechart`,
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
          bh = await this.sd_xhGsAKQbzDUGSFD2(bh, parentSpanInst);
          //appendnew_next_sd_pP6PSoZEQJ2Z5EJx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pP6PSoZEQJ2Z5EJx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ngx/linechart`,
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
          bh = await this.sd_zT9rZTkcAWdsKprK(bh, parentSpanInst);
          //appendnew_next_sd_3fiYYPNr61a8Ky5g
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3fiYYPNr61a8Ky5g');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ngx/areachart`,
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
          bh = await this.sd_4huHshH0W5phbSYZ(bh, parentSpanInst);
          //appendnew_next_sd_gK8gOfb1AmwVQb9m
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gK8gOfb1AmwVQb9m');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ngx/verticalchart`,
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
          bh = await this.sd_Wo71usdLp3qXwBEQ(bh, parentSpanInst);
          //appendnew_next_sd_POSTUDOZvGmy4K3u
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_POSTUDOZvGmy4K3u');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ngx/verticalbarchart`,
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
          bh = await this.sd_XIumeugTmAt56pxS(bh, parentSpanInst);
          //appendnew_next_sd_gDsV4vxxr4r36bi0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gDsV4vxxr4r36bi0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ngx/gaugechart`,
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
          bh = await this.sd_wbb0vVJLqyRBXh7Q(bh, parentSpanInst);
          //appendnew_next_sd_nrTcn5MLMdIYQUS5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nrTcn5MLMdIYQUS5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ngx/horizontalbarchart`,
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
          bh = await this.sd_5KVduqr5HYzmGfTY(bh, parentSpanInst);
          //appendnew_next_sd_4FhThTxMzofOuVrI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4FhThTxMzofOuVrI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ngx/bubblechart`,
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
          bh = await this.sd_zdyoz0isMcohDzpf(bh, parentSpanInst);
          //appendnew_next_sd_ygIHtturegoBrJKu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ygIHtturegoBrJKu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Api_HttpIn
  }
  //   service flows_Api

  //appendnew_flow_Api_start

  async sd_xhGsAKQbzDUGSFD2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xhGsAKQbzDUGSFD2',
      parentSpanInst
    );
    try {
      bh.local.data = [
        { name: 'Germany', value: 40632 },
        { name: 'United States', value: 50000 },
        { name: 'France', value: 36745 },
        { name: 'Spain', value: 33000 },
        { name: 'Italy', value: 35800 },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cLrOCniQUEoafNji(bh, parentSpanInst);
      //appendnew_next_sd_xhGsAKQbzDUGSFD2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xhGsAKQbzDUGSFD2',
        spanInst,
        'sd_xhGsAKQbzDUGSFD2'
      );
    }
  }

  async sd_cLrOCniQUEoafNji(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cLrOCniQUEoafNji');
    }
  }

  async sd_zT9rZTkcAWdsKprK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zT9rZTkcAWdsKprK',
      parentSpanInst
    );
    try {
      bh.local.data = [
        {
          name: 'Germany',
          series: [
            { value: 4168, name: 2010 },
            { value: 4529, name: 2011 },
            { value: 6575, name: 2012 },
          ],
        },
        {
          name: 'USA',
          series: [
            { value: 5481, name: 2010 },
            { value: 5881, name: 2011 },
            { value: 3860, name: 2012 },
          ],
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FBz3S8pcavi0M8pu(bh, parentSpanInst);
      //appendnew_next_sd_zT9rZTkcAWdsKprK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zT9rZTkcAWdsKprK',
        spanInst,
        'sd_zT9rZTkcAWdsKprK'
      );
    }
  }

  async sd_FBz3S8pcavi0M8pu(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FBz3S8pcavi0M8pu');
    }
  }

  async sd_4huHshH0W5phbSYZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4huHshH0W5phbSYZ',
      parentSpanInst
    );
    try {
      bh.local.data = [
        {
          name: 'Grenada',
          series: [
            { value: 5465, name: 2010 },
            { value: 2201, name: 2011 },
            { value: 5129, name: 2012 },
            { value: 2129, name: 2013 },
          ],
        },
        {
          name: 'Congo',
          series: [
            { value: 2629, name: 2010 },
            { value: 3415, name: 2011 },
            { value: 5994, name: 2012 },
            { value: 2994, name: 2013 },
          ],
        },

        {
          name: 'Thailand',
          series: [
            { value: 4168, name: 2010 },
            { value: 4529, name: 2011 },
            { value: 6575, name: 2012 },
            { value: 3575, name: 2013 },
          ],
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_z6inxmsqpu0iJBOn(bh, parentSpanInst);
      //appendnew_next_sd_4huHshH0W5phbSYZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4huHshH0W5phbSYZ',
        spanInst,
        'sd_4huHshH0W5phbSYZ'
      );
    }
  }

  async sd_z6inxmsqpu0iJBOn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z6inxmsqpu0iJBOn');
    }
  }

  async sd_Wo71usdLp3qXwBEQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wo71usdLp3qXwBEQ',
      parentSpanInst
    );
    try {
      bh.local.data = [
        {
          name: 'Germany',
          series: [
            { name: '2010', value: 40632 },
            { name: '2000', value: 36953 },
            { name: '1990', value: 31476 },
          ],
        },
        {
          name: 'United States',
          series: [
            { name: '2010', value: 49737 },
            { name: '2000', value: 45986 },
            { name: '1990', value: 37060 },
          ],
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uFoJNppwL9a0MjeU(bh, parentSpanInst);
      //appendnew_next_sd_Wo71usdLp3qXwBEQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wo71usdLp3qXwBEQ',
        spanInst,
        'sd_Wo71usdLp3qXwBEQ'
      );
    }
  }

  async sd_uFoJNppwL9a0MjeU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uFoJNppwL9a0MjeU');
    }
  }

  async sd_XIumeugTmAt56pxS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XIumeugTmAt56pxS',
      parentSpanInst
    );
    try {
      bh.local.data = [
        {
          name: 'Germany',
          series: [
            { name: '2010', value: 40632 },
            { name: '2000', value: 36953 },
            { name: '1990', value: 31476 },
          ],
        },
        {
          name: 'United States',
          series: [
            { name: '2010', value: 49737 },
            { name: '2000', value: 45986 },
            { name: '1990', value: 37060 },
          ],
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_W7XScDmWaBInYFFD(bh, parentSpanInst);
      //appendnew_next_sd_XIumeugTmAt56pxS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XIumeugTmAt56pxS',
        spanInst,
        'sd_XIumeugTmAt56pxS'
      );
    }
  }

  async sd_W7XScDmWaBInYFFD(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W7XScDmWaBInYFFD');
    }
  }

  async sd_wbb0vVJLqyRBXh7Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wbb0vVJLqyRBXh7Q',
      parentSpanInst
    );
    try {
      bh.local.data = [
        { name: 'Germany', value: 400 },
        { name: 'United States', value: 730 },
        { name: 'France', value: 675 },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_z9hqzv5vHOCgcLRH(bh, parentSpanInst);
      //appendnew_next_sd_wbb0vVJLqyRBXh7Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wbb0vVJLqyRBXh7Q',
        spanInst,
        'sd_wbb0vVJLqyRBXh7Q'
      );
    }
  }

  async sd_z9hqzv5vHOCgcLRH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z9hqzv5vHOCgcLRH');
    }
  }

  async sd_5KVduqr5HYzmGfTY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5KVduqr5HYzmGfTY',
      parentSpanInst
    );
    try {
      bh.local.data = [
        { name: 'Germany', value: 40632 },
        { name: 'United States', value: 50000 },
        { name: 'France', value: 36745 },
        { name: 'United Kingdom', value: 36240 },
        { name: 'Spain', value: 33000 },
        { name: 'Italy', value: 35800 },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UMAUZYOP5Uv92EDz(bh, parentSpanInst);
      //appendnew_next_sd_5KVduqr5HYzmGfTY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5KVduqr5HYzmGfTY',
        spanInst,
        'sd_5KVduqr5HYzmGfTY'
      );
    }
  }

  async sd_UMAUZYOP5Uv92EDz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UMAUZYOP5Uv92EDz');
    }
  }

  async sd_zdyoz0isMcohDzpf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zdyoz0isMcohDzpf',
      parentSpanInst
    );
    try {
      bh.local.data = [
        {
          name: 'USA',
          series: [
            {
              name: '2010',
              x: 197,
              y: 75,
              r: 310,
            },
            {
              name: '2000',
              x: 201,
              y: 20,
              r: 283,
            },
            {
              name: '1990',
              x: 270,
              y: 30,
              r: 253,
            },
          ],
        },
        {
          name: 'France',
          series: [
            {
              name: '2010',
              x: 367,
              y: 81.4,
              r: 63,
            },
            {
              name: '2000',
              x: 347,
              y: 79.1,
              r: 59.4,
            },
            {
              name: '1990',
              x: 294,
              y: 77.2,
              r: 56.9,
            },
          ],
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AIfTQaqMPwwzaLJf(bh, parentSpanInst);
      //appendnew_next_sd_zdyoz0isMcohDzpf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zdyoz0isMcohDzpf',
        spanInst,
        'sd_zdyoz0isMcohDzpf'
      );
    }
  }

  async sd_AIfTQaqMPwwzaLJf(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AIfTQaqMPwwzaLJf');
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
  //appendnew_flow_Api_Catch
}
