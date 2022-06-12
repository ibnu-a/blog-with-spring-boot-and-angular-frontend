import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { map, Observable } from 'rxjs';
import { JwtAutResponse } from './jwt-auth-response';
import { LoginPayload } from './login-payload';
import { RegsiterPayload } from './register-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  register (registerPayload: RegsiterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }

  login (loginPayload: LoginPayload): Observable<boolean>{
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }
}
