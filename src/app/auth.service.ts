import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dataUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post(this.dataUrl, userData);
  }

  login(email: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.dataUrl}?email=${email}&password=${password}`);
  }
  forgotPassword(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.dataUrl}?email=${email}`);
  }
}
