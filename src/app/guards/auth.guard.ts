import { Injectable } from "@angular/core";
import { firstValueFrom, lastValueFrom } from "rxjs";
import { ApiService } from "../../api/api.service";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(
        private router: Router,
        private api: ApiService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}
    
    async canActivate(): Promise<boolean> {
        if (!isPlatformBrowser(this.platformId)) {
            return true;
        }
        
        const x_access_token = localStorage.getItem('x_access_token');
        console.log('AuthGuard - Checking authentication');
        console.log(x_access_token === null ? 'AuthGuard - No token found' : 'AuthGuard - Token found');
        console.log('AuthGuard - x_access_token:', x_access_token);
        if (!x_access_token) {
            console.log('AuthGuard - No token found, redirecting to auth');
            return false;
        }
        
        const isTokenValid = await this.api.verifyToken(x_access_token);
        if (!isTokenValid) {
            console.log('AuthGuard - Token invalid, redirecting to auth');
            return false;
        }

        return true;
    }
}