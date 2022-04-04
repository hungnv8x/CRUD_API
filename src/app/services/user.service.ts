import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.api_url + 'users');
  }

  delete(id): Observable<any> {
    return this.http.delete(environment.api_url + `users/${id}/delete`);
  }

  findById(id): Observable<any> {
    return this.http.get(environment.api_url + `users/${id}`);
  }

  update(data, id): Observable<any> {
    return this.http.put(environment.api_url + `users/${id}`, data);
  }

}
