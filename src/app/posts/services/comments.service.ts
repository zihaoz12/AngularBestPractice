import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Comment } from '../interface/commentsAPI.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  getCommentsByPostId(id): Observable<Comment[]> {
    const url = this.baseUrl + '/comments?postId=' + id;
    return this.http.get<Comment[]>(url);
  }
}
