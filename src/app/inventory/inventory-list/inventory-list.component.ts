import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inventory } from 'src/app/inventory';
import { INVENTORY } from 'src/app/mock-inventory';
 


@Component({
  selector: 'inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventories = INVENTORY;

// DEPRECATED FUNCTION

// Function to update inventory history
// updateInventoryHistory(recordIndex: number, quantityBought: number) {
//   // Ensure the recordIndex is within bounds
//   if (recordIndex >= 0 && recordIndex < this.inventories.length) {
//     // Get the last history entry
//     const lastHistory = this.inventories[recordIndex].history[this.inventories[recordIndex].history.length - 1];

//     // Calculate the new quantity by subtracting the quantity bought
//     const newQuantity = lastHistory.quantity - quantityBought;

//     // Push a new history entry into the existing array
//     const newDate = new Date(); // You can set a specific date if needed
//     this.inventories[recordIndex].history.push({ date: newDate, quantity: newQuantity });
//   } else {
//     console.error('Invalid record index');
//   }
// }



}
