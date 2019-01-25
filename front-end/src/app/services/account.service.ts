import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/account/register',user).pipe(
      map(resp=>resp));
  }
}
