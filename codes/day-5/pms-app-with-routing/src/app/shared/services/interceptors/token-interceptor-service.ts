import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../token-service";

/*
export class TokenInterceptorService implements HttpInterceptor {
    private tokenSvc = inject(TokenService)

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const token = this.tokenSvc.getToken()
        // if (token != null) {
        const clonedReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzU4MTEzNjYsImV4cCI6MTc3NTgxMjU2Nn0.KDQ147uktiXLbMi5qxhKZotSObDX8Yd0n6UamIfuhzk`)
        })
        return next.handle(clonedReq)
        // }
        // else
        //     return next.handle(req)
    }
}
    */
export const TokenInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

    const tokenSvc = inject(TokenService)
    const token = tokenSvc.getToken()
    console.log('in interceptor: ' + token);
    if (token !== null) {
        const clonedReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })
        return next(clonedReq)
    }
    else
        return next(req)
}