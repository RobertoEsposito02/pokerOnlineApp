import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, of } from 'rxjs';
import { Utente } from 'src/app/model/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedSubject$: BehaviorSubject<Utente | null> = new BehaviorSubject<Utente | null>(null);
  
  private apiServer = 'http://localhost:8080/api/auth';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }
  
  login(loginForm:Utente):Observable<Utente>{
    //this.setUserLogged(loginForm);
    return this._http.post<{'jwt-token': string}>(this.apiServer + "/login", JSON.stringify(loginForm), this.httpOptions).
    pipe(switchMap(res => of({ username: loginForm.username, token: res['jwt-token']})));
  }

  setUserLogged(user:Utente | null){
    this.userLoggedSubject$.next(user);
  }

  getUserLogged():Observable<Utente | null>{
    return this.userLoggedSubject$.asObservable();
  }

  isLogged():boolean{
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false
  }

  getUserToken():string | null{
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null
  }

  logout(){
    this.setUserLogged(null)
  }
}
