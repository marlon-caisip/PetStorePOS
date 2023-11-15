import { Component } from '@angular/core';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  standalone: true,
  imports: [InventoryListComponent, 
    CanvasJSAngularChartsModule]
})
export class InventoryComponent {
  // display the past days record of inventory - static
  // calculate all the total products to order for the upcoming week (batch order) - dynamic (pure computation)
  // analyze the highest week of sales and conclude it as the most visited week of the month - dyanamic (pure computation)

// 1.  Total sales per Day, Week and month. - check
// 2. Total amount of PET FOOD TO ORDER for the upcoming week.
// 3. Inventory movement
// 4. Determine which day of the week had the most number of people visiting the
// store



constructor(public dialog: MatDialog) {

}


openDialog() {
  this.dialog.open(InventoryFormComponent);
}




  // import child component Inventory List, and use it to display for the chart

  // chartOptions = {
  //   animationEnabled: true,
  //   exportEnabled: true,
  //   title:{
  //     text: "Product Inventory",
  //     fontFamily: "Poppins"
  //   },
  //   axisX:{
  //     title: "Quarter",
  //     reversed: true
  //   },
  //   axisY:{
  //     title: "Sales",
  //     prefix: "₱",
  //     suffix: "",
  //     includeZero: true
  //   },
  //   toolTip:  {
  //     shared: true
  //   },
  //   data: [{
  //     type: "stackedBar",
  //     name: "Cat Food Whiskas",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###",
  //     color: "#edae49",
  //     dataPoints: [
  //       {  y: 42, label: "W1"},
  //       {  y: 53, label: "W2" },
  //       {  y: 47, label: "W3" },
  //       {  y: 60, label: "W4" }
  //     ]
  //   }, {
  //     type: "stackedBar",
  //     name: "Product B",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###",
  //     color: "#df7c52",
  //     dataPoints: [
  //       {  y: 48, label: "W1"},
  //       {  y: 62, label: "W2" },
  //       {  y: 55, label: "W3" },
  //       {  y: 74, label: "W4" }
  //     ]
  //   }, {
  //     type: "stackedBar",
  //     name: "Product C",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###",
  //     color: "#d1495b",
  //     dataPoints: [
  //       {  y: 46, label: "W1"},
  //       {  y: 60, label: "W2" },
  //       {  y: 58, label: "W3" },
  //       {  y: 70, label: "W4" }
  //     ]
  //   }, {
  //     type: "stackedBar",
  //     name: "Product D",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###",
  //     color: "#9d5568",
  //     dataPoints: [
  //       {  y: 32, label: "W1"},
  //       {  y: 45, label: "W2" },
  //       {  y: 54, label: "W3" },
  //       {  y: 46, label: "W4" }
  //     ]
  //   }, {
  //     type: "stackedBar",
  //     name: "Product D",
  //     showInLegend: "true",
  //     yValueFormatString: "#,###",
  //     color: "#9d5568",
  //     dataPoints: [
  //       {  y: 32, label: "W1"},
  //       {  y: 45, label: "W2" },
  //       {  y: 54, label: "W3" },
  //       {  y: 46, label: "W4" }
  //     ]
  //   }
  // ]
  // }	

}
