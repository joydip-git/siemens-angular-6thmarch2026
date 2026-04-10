// import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

// export class AuthGuard implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//         throw new Error("Method not implemented.");
//     }

// }

import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "../token-service";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {

    const tokenSvc = inject(TokenService)
    const router = inject(Router)

    const token = tokenSvc.getToken()
    if (token === null) {
        router.navigate(['/login'], {
            queryParams: {
                returnUrl: state.url
            }
        })
        return false
    }
    else
        return true
}