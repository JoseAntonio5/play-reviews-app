import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Comment } from '../Comment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiURL = 'http://localhost:3000/api/games/';

  constructor(private http: HttpClient) { }

  addComment(id: String | null, comment: Comment): Observable<Comment> {
    const url = `${this.apiURL}/${id}/comments`;
    return this.http.post<Comment>(url, comment, httpOptions);
  }

  deleteComment(id: string | undefined): Observable<Comment> {
    const url = `${this.apiURL}/comments/${id}`;
    return this.http.delete<Comment>(url);
  }

}
