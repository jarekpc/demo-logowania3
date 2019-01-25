import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public logIn(user: User){
    // let headers = new Headers();
    // headers.append('Accept', 'application/json')
    // var base64Credential: string = btoa( user.username+ ':' + user.password);
    // headers.append("Authorization", "Basic " + base64Credential);
    //
    // const httpOptions = {
      let headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '+btoa( user.username+ ':' + user.password)
      });

    return this.http.get(AppComponent.API_URL+"/account/login" ,  {headers: headers}).
     pipe(map((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response;//.json().principal;// the returned user object is a principal object
      if (user) {
        // store user details  in local storage to keep user logged in between page refreshes
        console.log("Zalogowales sie!");
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    }));

  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{}).pipe(
      map((response: Response) => {
        localStorage.removeItem('currentUser');
      }));

  }
}
