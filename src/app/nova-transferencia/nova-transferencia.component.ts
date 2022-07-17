import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/models/transferencias.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number | string;

  constructor(private service: TransferenciaService) { }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitido: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(valorEmitido)
      .subscribe(result => {
        console.log(result);
        this.limparCampos();
      }, (error) => console.log(error))
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
