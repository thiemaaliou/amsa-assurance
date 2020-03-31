import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Storage } from '@ionic/storage';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {
  passpeello: any;
  constructor(){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     if (request.url.endsWith("/login")) {
        // request = request.clone({
        //     setHeaders: {
        //         //"Content-Type":  "application/json",
        //         'Access-Control-Allow-Origin': '*' ,
        //     }
        //   });
    }else{
      let token = localStorage.getItem('access_token_ma');
      request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
    }
    return next.handle(request);
  }

}
