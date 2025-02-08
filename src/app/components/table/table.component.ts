import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modules/product.model';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@Component({
  selector: 'app-table',
  imports: [MatTableModule,MatIcon,MatInputModule,MatButtonModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'category', 'details'];
  products = new Observable<Product[]>();
  id = '';
  constructor(private productService: ProductService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  openAddItemModal() {
    const dialogRef = this.dialog.open(AddItemModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProducts(); 
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
