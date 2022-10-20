import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// import http from 'http';
import mount from 'koa-mount';

/**  */
  export default class Application {
  /**  */
    constructor(config) {
      this.config = config.server;
    }

  /**  */
    launch() {
      const app = new Koa();
      app.use(bodyParser());

      const router = new Router();
      // router.all('/api/*', apiCall);
      app.use(serve(this.config.serve));

      // app.use( mount( '/', serve('./client') ) ) ;
      Object
        .entries(this.config.mount)
        .map(([key, value]) => app.use(mount(key, serve(value))));

      // app.use(router.middleware());

      app.use(router.routes());
      // app.use(router.allowedMethods());

      app.listen(this.config.http.port, () => {
        const location = `http://${this.config.host}:${this.config.http.port}`;
        console.log(`server running at ${location}`);
      });
    }
  }
