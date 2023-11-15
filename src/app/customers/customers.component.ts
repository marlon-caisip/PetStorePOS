// refer to "https://www.telerik.com/blogs/sorting-filtering-grouping-aggregating-data-angular" for more sorting function 

import { Component, Input, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { CUSTOMERS } from '../mock-customers';
import { Customer } from '../customer';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderFormComponent } from './order-form/order-form.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  customers = CUSTOMERS;

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


  containerStyle: { [key: string]: string } = {};

  constructor(private elementRef: ElementRef, private renderer: Renderer2, public dialog: MatDialog) {}

  ngOnInit() {
    this.calculateGridColumns();
  }

  calculateGridColumns() {
    const containerWidth = this.elementRef.nativeElement.offsetWidth;
    const minColumnWidth = 410; // Adjust as needed
    const numColumns = Math.floor(containerWidth / minColumnWidth);


    const gridTemplateColumns = `repeat(${numColumns}, minmax(${minColumnWidth}px, 1fr))`;

    this.containerStyle = {
      'display': 'grid',
      'grid-template-columns': gridTemplateColumns,
      'overflow': 'hidden', // Prevent them from overflowing
      'white-space': 'normal', // Reset the white-space override
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculateGridColumns();
  }


  // customer sorting function

  sortCustomersByDate() {
    this.customers.sort((a, b) => {
      return <any>new Date(a.dateAndTime) - <any>new Date(b.dateAndTime);
    });
  }

  sortCustomersByName() {
    this.customers.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  sortCustomersByOrderID() {
    this.customers.sort((a, b) => {
      return a.id - b.id;
    });
  }

  // use boolean functions for disabled and enabled buttons
  byNameisEnable = false;
  byOrderIDisEnable = true; // OrderID sorted by default
  byDateisEnable = false;

  sortCustomersBy(type: string) {
    if (type === 'name') {
      this.sortCustomersByName();
      this.byNameisEnable = true;
      this.byOrderIDisEnable = false;
      this.byDateisEnable = false;
    } else if (type === 'OrderID') {
      this.sortCustomersByOrderID();
      this.byNameisEnable = false;
      this.byOrderIDisEnable = true;
      this.byDateisEnable = false;
    } else if (type === 'date') {
      this.sortCustomersByDate();
      this.byNameisEnable = false;
      this.byOrderIDisEnable = false;
      this.byDateisEnable = true;
    }
  }

  // calculates and displays the total for each customer's order
  calculateTotal(customer: Customer): number {
    let total = 0;
  
    if (customer.items.item1) {
      total += customer.items.item1.price * customer.items.item1.quantity;
    }
  
    if (customer.items.item2) {
      total += customer.items.item2.price * customer.items.item2.quantity;
    }
  
    if (customer.items.item3) {
      total += customer.items.item3.price * customer.items.item3.quantity;
    }
  
    if (customer.items.item4) {
      total += customer.items.item4.price * customer.items.item4.quantity;
    }
  
    if (customer.items.item5) {
      total += customer.items.item5.price * customer.items.item5.quantity;
    }
  
    // Add voucher amount if available
    if (customer.items.vouchers) {
      total -= customer.items.vouchers;
    }
  
    return total;
  }

  openDialog() {
    const dialogRef = this.dialog.open(OrderFormComponent);
    dialogRef;
  }

}
