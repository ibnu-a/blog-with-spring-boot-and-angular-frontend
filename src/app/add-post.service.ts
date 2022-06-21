import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpCLient: HttpClient) { }

  addPost(postPayload: PostPayload){
    return this.httpCLient.post('http://localhost:8080/api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpCLient.get<Array<PostPayload>>('http://localhost:8080/api/posts/all');
  }

  getPost(permaLink: Number): Observable<PostPayload>{
    return this.httpCLient.get<PostPayload>('http://localhost:8080/api/posts/get/'+ permaLink);
  }
}
