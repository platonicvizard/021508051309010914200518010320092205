import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IWeapon } from '../models/i-weapon';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  private baseUrl = environment.baseUrl; // URL to web api
  private weaponsPath = `${this.baseUrl}${environment.weapons.basePath}`;

  constructor(private http: HttpClient) {}

  /** GET weapons from the server */
  getWeapons(): Observable<IWeapon[]> {
    return this.http.get<IWeapon[]>(this.weaponsPath).pipe(
      tap(_ => this.log('fetched weapons')),
      catchError(this.handleError<IWeapon[]>('getWeapons', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`weapon-service: ${message}`);
  }
}
