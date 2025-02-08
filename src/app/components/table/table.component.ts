import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modules/product.model';
import { Observable, combineLatest, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatIcon, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'category', 'details'];
  products!: Observable<Product[]>;
  filteredProducts!: Observable<Product[]>;
  searchControl = new FormControl();

  constructor(private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = combineLatest([
      this.products,
      this.searchControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([products, searchValue]) => this.filterProducts(products, searchValue))
    );
  }

  filterProducts(products: Product[], searchValue: string): Product[] {
    if (!searchValue.trim()) {
      return products;
    }
    const filterValue = searchValue.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(filterValue));
  }

  openAddItemModal() {
    const dialogRef = this.dialog.open(AddItemModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.products = this.productService.getProducts();
        this.filteredProducts = combineLatest([
          this.products,
          this.searchControl.valueChanges.pipe(startWith(''))
        ]).pipe(
          map(([products, searchValue]) => this.filterProducts(products, searchValue))
        );
      }
    });
  }

  openDetailsModal(productId: number) {
    this.products.subscribe(products => {
      const product = products.find(p => p.id === productId);
      const dialogRef = this.dialog.open(DetailsModalComponent, {
        data: product
      });
    });
  }
}
