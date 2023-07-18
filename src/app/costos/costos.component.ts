import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

interface Item {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.scss']
})
export class CostosComponent {
toggleLista() {
throw new Error('Method not implemented.');
}
  items: Item[] = [
    { nombre: 'Item 1', costo: '$10' },
    { nombre: 'Item 2', costo: '$20' },
    { nombre: 'Item 3', costo: '$30' }
  ];
mostrarLista: any;
}
