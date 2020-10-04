import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../models/user.models';
import { IPost } from 'src/app/modules/post/models/post.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }

  getUserPosts(id: string): Observable<IPost[]>{
    return this.http.get<IPost[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
