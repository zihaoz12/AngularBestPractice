import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Post } from '../interface/postsAPI.interface';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const url = this.baseUrl + '/posts';
    return this.http.get<Post[]>(url)
    .pipe(map( res => res as Post[]), catchError( err => throwError( new Error(err)))
    )
    ;
  }

}
