import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }

  findById(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.http.get<Categoria>(url);
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url=`${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  update(categoria: Categoria): Observable<void> {
    const url = `${this.baseUrl}/categorias/${categoria.id!}`
    return this.http.put<void>(url, categoria);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url);
  }

  mensagem(string: String): void {
    this._snack.open(`${string}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2000
    })
  }
}
