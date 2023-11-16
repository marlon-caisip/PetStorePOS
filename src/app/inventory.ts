// some of this are optional since I include either items or pet in the form

// you can also check the inventory-list.component on how I optionally showed the tags

export interface Inventory {
    name: string;
    brand?: string;
    breed?: string;
    weight?: string; 
    type?: string;
    age?: number;
    color?: string;
    owner?: string;
    price: number;
    history: InventoryHistory[];
  }
  
  export interface InventoryHistory {
    date: Date;
    quantity: number;
  }  

  

//   <!-- The user can just skip some fields since the thing to be added can be pet or an -->

// <div class="container">
//   <h2 mat-dialogue-title>Add Order</h2>
//   <mat-dialog-content class="mat-typography">
//     <form (ngSubmit)="submitForm()">
//       <span>Customer Name: </span>
//       <input
//         type="text"
//         name="ItemName"
//         id="ItemName"
//         [(ngModel)]="newCustomer.name"
//         required
//       />
//       <br />

//       <br />

//       <!-- content for drop down -->

//       <mat-form-field>
//         <mat-label>Select Item</mat-label>
//         <mat-select required>
//           <mat-option *ngFor="let item of inventories" [value]="item.name">
//             {{ item.name }}
//           </mat-option>
//         </mat-select>
//         <mat-error *ngIf="itemControl.hasError('required')">
//           Please choose an item
//         </mat-error>
//       </mat-form-field>

//       <!-- content for drop down -->

//       <!-- create a button that will optionally create a select item and quantity when clicked -->

//       <br />

//       <span>Quantity: </span>
//       <input
//         type="number"
//         name="Quantity"
//         id="Quantity"
//         [ngModel]="getQuantity()"
//         (ngModelChange)="setQuantity($event)"
//         required
//       />

//       <br />
//       <br />
//       <button>Submit</button>
//       <button id="cancel" (click)="cancelDialog()">Cancel</button>
//     </form>
//   </mat-dialog-content>
// </div>

// <!-- keep only one order, that's enough -->
