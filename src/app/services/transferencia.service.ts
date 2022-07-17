import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/models/transferencias.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: any): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
