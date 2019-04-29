import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string): Observable<UserModel> {
    return this.httpClient.post<UserModel>('/api/token', {email: email, password: password });
  }
}
