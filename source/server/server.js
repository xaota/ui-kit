import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import http from 'http';
// import mount from 'koa-mount';

const app = new Koa();
app.use(bodyParser());

const router = new Router();

router.all('/api/*', apiCall);

// app.use(_.routes());
app.use(serve('./client'));
// app.use( mount( '/', serve('./client') ) ) ;
// app.use(router.middleware());

app.use(router.routes());
// app.use(router.allowedMethods());
app.listen(3000);

async function apiCall(ctx, next) {
  // console.log(ctx);
  //
  const options = {
    host: 'localhost',
    port: 5000,
    method: ctx.method,
    path: ctx.path,
    headers: ctx.headers
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8"
    // }
  };
  const res = await https_req(options, ctx.request.body);
  ctx.body = res;
}

function https_req (options, body = null) {
  return new Promise(resolve => {
    let result = '';

    const request = http.request(options, res => {
      // res.setEncoding('utf8')
      res.on('data', chunk => {
        result += chunk;
      })
      res.on('end', body => {
        resolve(result);
      })
    });
    if (body) request.write(JSON.stringify(body));
    request.end();
  })
}
