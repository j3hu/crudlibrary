import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LibroService {

  private url = 'http://localhost:8000/api/libros';

  constructor(private http: HttpClient) {
  }

  getLibros(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  addLibro(libro: Object): Observable<Object> {
    return this.http.post(`${this.url}`, libro);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}

