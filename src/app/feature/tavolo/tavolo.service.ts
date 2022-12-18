import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Tavolo } from 'src/app/model/tavolo';

@Injectable({
  providedIn: 'root'
})
export class TavoloService {

  private apiServer:string = "http://localhost:8080/api/tavolo";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }

  getRegisti():Observable<Tavolo>{
    return this._http.get<Tavolo>(this.apiServer);
  }

  createRegista(tavoloInput:Tavolo):Observable<Tavolo>{
    return this._http.post<Tavolo>(this.apiServer, tavoloInput, this.httpOptions).pipe(
      catchError(this.handleError<Tavolo>('createTavolo'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
