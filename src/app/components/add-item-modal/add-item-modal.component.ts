import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-item-modal',
  imports: [MatButtonModule,FormsModule,],
  templateUrl: './add-item-modal.component.html',
  styleUrl: './add-item-modal.component.css'
})
export class AddItemModalComponent {
  name='';
  price: number |null = null;
  category='';
  color='';
  description='';
  constructor(private productService: ProductService,public dialogRef: MatDialogRef<AddItemModalComponent>) {}

  closeModal() {
    this.dialogRef.close();
  }

  createProduct() {
    if(!this.name || !this.price || !this.category || !this.color || !this.description) {}

    
    this.productService.createProduct({name: this.name, price: this.price ?? 0, category: this.category, color: this.color, description:this.description})
    .subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  isFormValid(): boolean {
    return this.name.trim() !== '' && this.price !== null && this.category.trim() !== '' && this.color.trim() !== '' && this.description.trim() !== '';
  }
}
