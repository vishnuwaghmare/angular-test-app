import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

type EntityArrayResponseType = HttpResponse<any[]>;
@Injectable({
  providedIn: 'root'
})
export class AppService  {

  loginUrl = "http://api.iwovs.com:3000/API/login";
  employeeURL = "http://api.iwovs.com:4000/API"
  constructor(protected http: HttpClient) {
  }

  login(userCredential: any): Observable<{}> {
    return this.http.post(this.loginUrl , userCredential);
  }

  getEmployees(): Observable<EntityArrayResponseType> {
    return this.http.get<any[]>(this.employeeURL, { observe: 'response' });
  }
}

