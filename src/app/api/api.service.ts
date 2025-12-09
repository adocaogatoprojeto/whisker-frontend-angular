import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map } from "rxjs";
import environment from "../../shared/enviroments/enviroment.local";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private token: string | null = null;

    private getToken(): string | null {
        this.token = localStorage.getItem('token');
        return this.token;
    }

    constructor(
        private http: HttpClient,
    ) { }

    getBaseUrl(): string {
        return environment.apiUrl;
    }

    getV1<T = any>(endpoint: string, extraHeaders?: { }, noAuth = true): Promise<T> {
        const url = `${this.getBaseUrl()}/${endpoint}`;
        const token = this.getToken();
        const headers: Record<string, string> = {
            ...extraHeaders
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return firstValueFrom(this.http.get<T>(url, { headers }).pipe(map((res: T) => res)));
    }

    postV1<T = any>(endpoint: string, body: any, extraHeaders?: {}, noAuth = true): Promise<T> {
        const url = `${this.getBaseUrl()}/${endpoint}`;
        const token = this.getToken();
        const headers: Record<string, string> = {
            ...extraHeaders
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return firstValueFrom(this.http.post<T>(url, body, { headers }).pipe(map((res: T) => res)));
    }

    patchV1<T = any>(endpoint: string, body: any, extraHeaders?: {}, noAuth = true): Promise<T> {
        const url = `${this.getBaseUrl()}/${endpoint}`;
        const token = this.getToken();
        const headers: Record<string, string> = {
            ...extraHeaders
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return firstValueFrom(this.http.patch<T>(url, body, { headers }).pipe(map((res: T) => res)));
    }

    putV1<T = any>(endpoint: string, body: any, extraHeaders?: {}, noAuth = true): Promise<T> {
        const url = `${this.getBaseUrl()}/${endpoint}`;
        const token = this.getToken();
        const headers: Record<string, string> = {
            ...extraHeaders
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return firstValueFrom(this.http.put<T>(url, body, { headers }).pipe(map((res: T) => res)));
    }

    deleteV1<T = any>(endpoint: string, extraHeaders?: {}, noAuth = true): Promise<T> {
        const url = `${this.getBaseUrl()}/${endpoint}`;
        const token = this.getToken();
        const headers: Record<string, string> = {
            ...extraHeaders
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return firstValueFrom(this.http.delete<T>(url, { headers }).pipe(map((res: T) => res)));
    }
}