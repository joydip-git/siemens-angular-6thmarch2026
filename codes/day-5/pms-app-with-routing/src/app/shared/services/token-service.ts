import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
    private tokenStore: WritableSignal<string | null> = signal(null)

    saveToken(token: string) {
        console.log(token);
        this.tokenStore.set(token)
    }
    getToken(): string | null {
        return this.tokenStore()
    }

    removeToken() {
        this.tokenStore.set(null)
        console.log(this.tokenStore());
    }
}