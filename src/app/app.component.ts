import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

interface Item {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class appComponent {
  items: Item[] = [
    { nombre: 'Item 1', costo: '$10' },
    { nombre: 'Item 2', costo: '$20' },
    { nombre: 'Item 3', costo: '$30' }
  ];

  mostrarLista: boolean = true;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
