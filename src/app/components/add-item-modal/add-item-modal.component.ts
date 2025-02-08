import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-modal',
  imports: [MatButtonModule,FormsModule,],
  templateUrl: './add-item-modal.component.html',
  styleUrl: './add-item-modal.component.css'
})
export class AddItemModalComponent {
  name='';
  price='';
  category='';
  color='';
  constructor(public dialogRef: MatDialogRef<AddItemModalComponent>) {}

  closeModal() {
    this.dialogRef.close();
  }

}
