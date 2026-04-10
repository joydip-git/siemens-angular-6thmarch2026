import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../shared/models/api-response';
import { AUTH_API_URL } from '../../config/constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient)

    loginUser(user: User) {
        return this.http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user)
    }

    registerUser(user: User) {
        return this.http.post<ApiResponse<User>>(`${AUTH_API_URL}/register`, user)
    }
}