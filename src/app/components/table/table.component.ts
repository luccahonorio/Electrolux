import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modules/product.model';

@Component({
  selector: 'app-table',
  imports: [MatTableModule,MatIcon,MatInputModule,MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  products: Product[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  displayedColumns: string[] = ['position', 'name', 'price', 'category', 'details'];
  dataSource = this.products;
}
