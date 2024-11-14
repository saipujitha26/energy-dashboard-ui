import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/user/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get<any>(this.loginUrl, { params }).pipe(
      tap((response) => {
        // Save token or user data in local storage if needed
        console.log('Response : ',response);
        localStorage.setItem('username', response.username);
        localStorage.setItem('userId', response.id);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('userId');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }
}
