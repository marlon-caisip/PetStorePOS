import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import CUSTOMERS from 'src/app/mock-customers';
import { Customer } from 'src/app/customer';
import { Inventory } from 'src/app/inventory';
import { INVENTORY } from 'src/app/mock-inventory';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomersComponent } from '../customers.component';


@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css',

})
export class OrderFormComponent {

  constructor(public dialog: MatDialog) {}

  customers = CUSTOMERS;
  inventories = INVENTORY;

  itemControl = new FormControl<Inventory | null>(null, Validators.required);

  newCustomer: Customer = {
    id: 0,
    name: '',
    orderNumber: 0,
    dateAndTime: new Date(),
    items: {
      item1: { name: '', brand: '', price: 0, quantity: 0 },
      item2: { name: '', brand: '', price: 0, quantity: 0 },
      item3: { name: '', brand: '', price: 0, quantity: 0 },
      item4: { name: '', brand: '', price: 0, quantity: 0 },
      item5: { name: '', brand: '', price: 0, quantity: 0 },
    },
    total: 0
  };

  addOrder() {
    // Add validation logic if needed
    this.customers.push(this.newCustomer);
    // Reset the form or initialize a new customer for the next entry
    this.newCustomer = {
      id: 0,
      name: '',
      orderNumber: 0,
      dateAndTime: new Date(),
      items: {
        item1: { name: '', brand: '', price: 0, quantity: 0 },
        item2: { name: '', brand: '', price: 0, quantity: 0 },
        item3: { name: '', brand: '', price: 0, quantity: 0 },
        item4: { name: '', brand: '', price: 0, quantity: 0 },
        item5: { name: '', brand: '', price: 0, quantity: 0 },
      },
      total: 0
    };
  }

  cancelDialog() {
    const dialogRef = this.dialog.closeAll();

    dialogRef;
  }

  submitForm() {
    // input validation, I required values for the interface Inventory except those with ?
    // refer to inventory.ts for more information

    

    // loop the history, since its an array and then check if the form have values

    
  }

  calculateTotal(inventory: Inventory) {
    let total = 0;
  
    // compute the total amount of order per item and quantity
    
    // I might need to create another function to calculate for order, since order and inventory computation are different
    
    return total;
  }
  
  
  
}
