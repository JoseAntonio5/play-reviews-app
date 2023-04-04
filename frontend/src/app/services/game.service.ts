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

  getGameDetails(id: string | null): Observable<Game> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Game>(url);
  }

  deleteGame(id: string | null): Observable<Game> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<Game>(url);
  }

  addGame(game: Game) {
    return this.http.post<Game>(this.apiURL, game, httpOptions);
  }

}