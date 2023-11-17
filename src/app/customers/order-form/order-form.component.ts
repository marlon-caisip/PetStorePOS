import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import CUSTOMERS from 'src/app/mock-customers';
import { Customer } from 'src/app/customer';
import { Inventory } from 'src/app/inventory';
import { INVENTORY } from 'src/app/mock-inventory';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor(public dialog: MatDialog) {
    this.itemControl.valueChanges.subscribe((value) => {
      console.log(value); // This will log the selected value from the dropdown
    });
  }

  customers = CUSTOMERS;
  inventories = INVENTORY;

  itemControl: FormControl = new FormControl(null, Validators.required);


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
    pets: {
      petName: '', petType: '', petBreed: '', petOwner: '', price: 0, quantity: 0
    },
    total: 0
  };

  cancelDialog() {
    const dialogRef = this.dialog.closeAll();

    dialogRef;
  }

  // this returns 0 value for pets // ERROR

  getQuantity(): number | null {
    if (this.newCustomer.items && this.newCustomer.items.item1) {
      return this.newCustomer.items.item1.quantity || null;
    } else if (this.newCustomer.pets) {
      return this.newCustomer.pets.quantity || null;
    }
    return null; // Or a default value if needed
  }
  
  setQuantity(value: number): void {
    if (this.newCustomer.items && this.newCustomer.items.item1) {
      this.newCustomer.items.item1.quantity = value;
    } else if (this.newCustomer.pets) {
      this.newCustomer.pets.quantity = value;
    }
  }
  

  submitForm() {
    const selectedItemName = this.itemControl.value;

    const selectedItem = this.inventories.find(item => item.name === selectedItemName);
    
        // Input validation
    if (this.newCustomer.name === '') {
      alert('Please enter a customer name');
      return;
    }
  
    // Check if the itemControl has a value
    if (!this.itemControl.value) {
      alert('Please select an item');
      return;
    }

    if (selectedItem) {
      if (this.newCustomer.items && 'brand' in selectedItem) {
        // item configuration
        console.log('items');
        const item1 = this.newCustomer.items.item1;
        item1.name = selectedItem.name;
        item1.price = selectedItem.price;
        item1.brand = selectedItem.brand;
        item1.color = selectedItem.color;
        item1.type = selectedItem.type;
        item1.weight = selectedItem.weight;
      } else if (this.newCustomer.pets && 'owner' in selectedItem) {
        // pet configuration
        console.log('pets');
        this.newCustomer.pets.petName = selectedItem.name;
        this.newCustomer.pets.petType = selectedItem.type;
        this.newCustomer.pets.petBreed = selectedItem.breed;
        this.newCustomer.pets.petOwner = selectedItem.owner;
        this.newCustomer.pets.price = selectedItem.price;

        console.log(this.newCustomer.pets.quantity);
        
      }

        // Auto-generate customer ID and order number
        const lastOrder = this.customers[this.customers.length - 1]; // Get the last order
        const newCustomerId = lastOrder ? lastOrder.id + 1 : 1; // Increment customer ID
        const newOrderNumber = lastOrder ? lastOrder.orderNumber + 1 : 1000; // Increment order number
      
        // Set the generated IDs in the new order
        this.newCustomer.id = newCustomerId;
        this.newCustomer.orderNumber = newOrderNumber;
  
          // Set the current date and time      
        // Push the newCustomer to the customers array (assuming customers is an array)
        this.customers.push(this.newCustomer);
        this.cancelDialog();    
      } else if (!selectedItem) {
        console.error('Not found');
        this.itemControl.setErrors({ notFound: true }); // Set error on itemControl
        return; // Prevent further execution if the item is not found
      }
      
      else {
        // Handle case where the selected item is not found in inventories
        console.error('Selected item not found in inventories');

        // show more error handling to show the error message
        this.itemControl.setErrors({ notFound: true });
      }
    }
}