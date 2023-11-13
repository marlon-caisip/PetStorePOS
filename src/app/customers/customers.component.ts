// refer to "https://www.telerik.com/blogs/sorting-filtering-grouping-aggregating-data-angular" for more sorting function 

import { Component, Input, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { CUSTOMERS } from '../mock-customers';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  customers = CUSTOMERS;
  containerStyle: { [key: string]: string } = {};

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

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



}
  const newCustomer: Customer = {
    {
      id: 1,
      name: "John Pakistani",
      orderNumber: 1021,
      dateAndTime: new Date ("October 1, 2023 09:00:00"),
      items: {
        item1: {
          name: "Cat Food",
          brand: "Whiskas",
          weight: "3kg",
          type: "Dry Food",
          price: 20.00,
          quantity: 2,
        },
        vouchers: 0,
      },
      total: 0,
    },
  }