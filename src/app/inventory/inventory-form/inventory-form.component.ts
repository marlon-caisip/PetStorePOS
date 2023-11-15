import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { Inventory } from 'src/app/inventory';
import { INVENTORY } from 'src/app/mock-inventory';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inventory-form',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, FormsModule],
  templateUrl: './inventory-form.component.html',
  styleUrl: './inventory-form.component.css'
})
export class InventoryFormComponent {

  constructor(public dialog: MatDialog) {
    
  }
  
  inventories = INVENTORY;

  newInventory: Inventory = {
    name: '',
      brand: '',
      breed: '',
      weight: '',
      type: '',
      age: 0,
      color: '',
      owner: '',
      price: 0,
      history: [
        { date: new Date('0000-00-00'), quantity: 0 }
      ]
  };

  addToInventory() {
    // Add validation logic if needed
    this.inventories.push(this.newInventory);
    // Reset the form or initialize a new customer for the next entry
    this.newInventory = {
      name: '',
      brand: '',
      breed: '',
      weight: '',
      type: '',
      age: 0,
      color: '',
      owner: '',
      price: 0,
      history: [
        { date: new Date('0000-00-00'), quantity: 0 }
      ]
    }
  }
  
  cancelDialog() {
    const dialogRef = this.dialog.closeAll();

    dialogRef;
  }

  submitForm() {
    // input validation, I required values for the interface Inventory except those with ?
    // refer to inventory.ts for more information

    if (this.newInventory.name === '') {
      alert('Please enter a name');
    } else if (this.newInventory.price === 0) {
      alert('Please enter a price');
    } else if (this.newInventory.name !== '' && this.newInventory.price !== 0 && this.newInventory.history[0].quantity !== 0 && this.newInventory.history[0].date !== new Date('0000-00-00')) {
      this.addToInventory();
      this.cancelDialog();
    } 

    // loop the history, since its an array and then check if the form have values

    for (let i = 0; i <this.newInventory.history.length; i++) {
      if (this.newInventory.history[0].quantity === 0) {
        alert('Please enter a quantity');
      } else if (this.newInventory.history[0].date === new Date('0000-00-00')) {
        alert('Please enter a date');
      }
    }
  }



}
