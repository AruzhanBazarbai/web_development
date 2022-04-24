import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
/*
Interceptor-is a middleware that allow us to intercept incoming or outgoing HTTP requests using the HttpClient. 
They can handle both HttpRequest as well as HttpResponse.
!!!Before the back side all your requets can be configures in the  interceptor
*/
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //take the two arguments and return the request
        const token=localStorage.getItem('token'); //take the value of token from localStorage
        if(token){ //if token is existed
            const newReq=req.clone({ //we clone the request добавив туда хеадер Authorization и значение токена 
                headers: req.headers.append('Authorization',`JWT ${token}`)
            });
            return next.handle(newReq);//и отправляем измененный запрос беку  и нам откроется доступ к данным бекенда
        }
        
        return next.handle(req); //pass the request to back side without any changes
    }
}