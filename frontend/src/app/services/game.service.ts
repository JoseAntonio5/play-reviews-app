import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Game } from '../Game';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiURL = 'http://localhost:3000/api/games/';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiURL);
  }

  getGameDetails(game: Game): Observable<Game> {
    const url = `${this.apiURL}/${game._id}`;
    return this.http.get<Game>(url);
  }

}