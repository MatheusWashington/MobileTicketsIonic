import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonList,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonList,
    IonItem
  ],
})
export class Tab2Page {

  senhaAtual = 'Nenhuma';
  proximaSenha = 'SG001';

  fila = [
    'SG001',
    'SP001',
    'SE001',
    'SG002'
  ];

  historico: string[] = [];

  chamarProxima() {
    if (this.fila.length > 0) {
      this.senhaAtual = this.fila.shift()!;
      this.proximaSenha =
        this.fila.length > 0 ? this.fila[0] : 'Sem fila';

      this.historico.unshift(this.senhaAtual);
    }
  }

  finalizarAtendimento() {
    this.senhaAtual = 'Nenhuma';
  }
}