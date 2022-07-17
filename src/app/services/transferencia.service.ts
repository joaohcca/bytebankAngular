import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);

    this.listaTransferencias.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
