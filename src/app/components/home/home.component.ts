import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
