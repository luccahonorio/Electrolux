import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Maquina de Lavar 1', price: 1.0079, category: 'Eletrodomestico'},
  {position: 2, name: 'Maquina de Lavar 2', price: 4.0026, category: 'Eletrodomestico'},
  {position: 3, name: 'Maquina de Lavar 3', price: 6.941, category: 'Eletrodomestico'},
  {position: 4, name: 'Maquina de Lavar 4', price: 9.0122, category: 'Eletrodomestico'},
  {position: 5, name: 'Maquina de Lavar 5', price: 10.811, category: 'Eletrodomestico'},
  {position: 6, name: 'Maquina de Lavar 6', price: 12.0107, category: 'Eletrodomestico'},
  {position: 7, name: 'Maquina de Lavar 7', price: 14.0067, category: 'Eletrodomestico'},
  {position: 8, name: 'Maquina de Lavar 8', price: 15.9994, category: 'Eletrodomestico'},
  {position: 9, name: 'Maquina de Lavar 9', price: 18.9984, category: 'Eletrodomestico'},
  {position: 10, name: 'Maquina de Lavar 10', price: 20.1797, category: 'Eletrodomestico'},
];

@Component({
  selector: 'app-table',
  imports: [MatTableModule,MatIcon],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'category', 'details'];
  dataSource = ELEMENT_DATA;
}
