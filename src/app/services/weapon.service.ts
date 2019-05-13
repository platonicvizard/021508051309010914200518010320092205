import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IWeapon } from '../models/i-weapon';
import { environment } from 'src/environments/environment';
import { IAttachment } from '../models/i-attachment';
import { IAmmunition } from '../models/i-ammunition';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  private baseUrl = environment.baseUrl; // URL to web api
  private weaponsPath = `${this.baseUrl}${environment.weapons.basePath}`;
  private ammunitionPath = `${this.baseUrl}${environment.ammunition.basePath}`;
  private attachmentsPath = `${this.baseUrl}${
    environment.attachments.basePath
  }`;

  constructor(private http: HttpClient) {}

  /** GET weapons from the server */
  getWeapons(): Observable<IWeapon[]> {
    return this.http.get<IWeapon[]>(this.weaponsPath).pipe(
      tap(_ => this.log('fetched weapons')),
      catchError(this.handleError<IWeapon[]>('getWeapons', []))
    );
  }

  /** GET ammunition from the server */
  getAmmunition(): Observable<IAmmunition[]> {
    return this.http.get<IAmmunition[]>(this.ammunitionPath).pipe(
      tap(_ => this.log('fetched ammunition')),
      catchError(this.handleError<IAmmunition[]>('getAmmunition', []))
    );
  }

  /** GET attachments from the server */
  getAttachments(): Observable<IAttachment[]> {
    return this.http.get<IAttachment[]>(this.attachmentsPath).pipe(
      tap(_ => this.log('fetched attachments')),
      catchError(this.handleError<IAttachment[]>('getAttachments', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
