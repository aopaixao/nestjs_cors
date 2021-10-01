import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** /
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
  });
  /**/

  /**  / 
  const whitelist = ['example.com', 'api.example.com'];
  app.enableCors({
    origin: function (origin, callback) {
      console.log('origin: ' + origin);
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      } 
    },
  });  
  /**/

  /**/
  app.use(function (req, res, next) {
    //console.log('headers: ' + JSON.stringify(req.headers));
    console.log('headers.x-forwarded-for: ' + req.headers["x-forwarded-for"]);
    console.log('headers.origin: ' + req.headers.origin);
    console.log('headers.host: ' + req.headers.host);
    req.headers.origin = req.headers.origin || req.headers.host;
    next();
  });
  /**/

  await app.listen(3000);
} 
bootstrap();
