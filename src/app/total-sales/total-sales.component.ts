import { Component } from '@angular/core';
import { Customer } from '../customer';
import CUSTOMERS from '../mock-customers';
import { CustomersComponent } from '../customers/customers.component';

@Component({
  selector: 'app-total-sales',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.css']
})
export class TotalSalesComponent {
  customers = CUSTOMERS;

  constructor() {

  }

// Find the highest sales week dynamically
findHighestSalesWeek(month: number): number {
  const weeklySales: number[] = [0, 0, 0, 0, 0]; // Initialize weekly sales array
  this.customers.forEach((customer) => {
    const orderDate = customer.dateAndTime;
    if (orderDate.getMonth() === month) {
      const orderWeek = this.getWeekNumber(orderDate);
      const total = this.calculateTotal(customer);
      weeklySales[orderWeek - 1] += total; // Accumulate total sales for each week
    }
  });
  // Find the week with the highest sales
  const highestSales = Math.max(...weeklySales);
  return weeklySales.indexOf(highestSales) + 1; // Adding 1 to get the actual week number
}

// analyze the upcoming feed amount to order for the upcoming week depending on the sales
findFeedToOrderForWeek(weekNumber: number, month: number): number {
  let totalSales = 0;
  if (month >= 0 && month <= 11) {
    for (const customer of this.customers) {
      const orderDate = customer.dateAndTime;
      const orderWeek = this.getWeekNumber(orderDate);

      if (orderWeek === weekNumber && orderDate.getMonth() === month) {
        // add all the week and divide it by 4
        totalSales += this.calculateTotal(customer);
        totalSales /= 31;
      }
    }
  }
  return totalSales;
}


    calculateTotal(customer: Customer): number {
      let total = 0;
    
      if (customer.items?.item1) {
        total += customer.items.item1.price * customer.items.item1.quantity;
      }
    
      if (customer.items?.item2) {
        total += customer.items.item2.price * customer.items.item2.quantity;
      }
    
      if (customer.items?.item3) {
        total += customer.items.item3.price * customer.items.item3.quantity;
      }
    
      if (customer.items?.item4) {
        total += customer.items.item4.price * customer.items.item4.quantity;
      }
    
      if (customer.items?.item5) {
        total += customer.items.item5.price * customer.items.item5.quantity;
      }

      // create function to comput total of pets
      if (customer.pets) {
        total += customer.pets.price * customer.pets.quantity;
      }
    
      return total;
    }

    getWeekNumber(date: Date): number {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      const startOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
  
      // Calculate the week number as 1 to 4 based on the day of the month
      return Math.floor((d.getDate() - 1) / 7) + 1;
    }
  
  

    getTotalForWeek(weekNumber: number, month: number): number {
      let totalSales = 0;
  
      // Ensure that the input month is valid (between 0 and 11)
      if (month >= 0 && month <= 11) {
        // Iterate through the CUSTOMERS array
        for (const customer of this.customers) {
          const orderDate = customer.dateAndTime;
          const orderWeek = this.getWeekNumber(orderDate);
  
          // Check if the order falls within the specified week and month
          if (orderWeek === weekNumber && orderDate.getMonth() === month) {
            // Calculate the sales for that order and add it to the total
            totalSales += this.calculateTotal(customer);
            // You can add more items and their prices if needed
          }
        }
      }
  
      return totalSales;
    }


    getTotalForMonth(day: number, month: number): number {
      let total = 0;
    
      // Ensure that the input month is valid (between 0 and 11)
      if (month >= 0 && month <= 11) {
        // Iterate through the customers and filter by the specified day of the month and month
        const customersOnDay = this.customers.filter((customer) => {
          const orderDate = customer.dateAndTime;
          return orderDate.getDate() === day && orderDate.getMonth() === month;
        });
    
        // Calculate the total for each customer on the specified day in the specified month
        customersOnDay.forEach((customer) => {
          total += this.calculateTotal(customer);
        });
      }
    
      return total;
    }
    
    getTotalForHourInDay(hour: number, day: number, month: number): number {
      let total = 0;
    
      // Ensure that the input month is valid (between 0 and 11)
      if (month >= 0 && month <= 11) {
        // Iterate through the customers and filter by the specified hour, day, and month
        const customersOnHourInDay = this.customers.filter((customer) => {
          const orderDate = customer.dateAndTime;
          return orderDate.getDate() === day && orderDate.getMonth() === month && orderDate.getHours() === hour;
        });
    
        // Calculate the total for each customer on the specified hour, day, and month
        customersOnHourInDay.forEach((customer) => {
          total += this.calculateTotal(customer);
        });
      }
    
      return total;
    } 

    // CHARTS
     
    chartOptionsWeekly = {
      title: {
        text: "October Weekly Sales"
      },
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      axisY: {
      includeZero: true,
      valueFormatString: "₱#,##0"
      },
      data: [{
      type: "column", //change type to bar, line, area, pie, etc
      yValueFormatString: "₱#,##0",
      color: "#01b8aa",
      dataPoints: [
        { label: "Week 1", y: this.getTotalForWeek(1, 9) }, // Assuming month = 9 (October)
        { label: "Week 2", y: this.getTotalForWeek(2, 9) },
        { label: "Week 3", y: this.getTotalForWeek(3, 9) },
        { label: "Week 4", y: this.getTotalForWeek(4, 9) },
        { label: "Week 5", y: this.getTotalForWeek(5, 9) }
      ]
      }]
    }

    chartOptionsDaily = {
      title: {
        text: "Daily Sales"
      },
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      axisY: {
      includeZero: true,
      valueFormatString: "₱#,##0"
      },
      data: [{
      type: "column", //change type to bar, line, area, pie, etc
      yValueFormatString: "₱#,##0",
      color: "#01b8aa",
      dataPoints: [
          { label: "00:00:00", y: this.getTotalForHourInDay(0, 1, 9) },
          { label: "01:00:00", y: this.getTotalForHourInDay(1, 1, 9) },
          { label: "02:00:00", y: this.getTotalForHourInDay(2, 1, 9) },
          { label: "03:00:00", y: this.getTotalForHourInDay(3, 1, 9) },
          { label: "04:00:00", y: this.getTotalForHourInDay(4, 1, 9) },
          { label: "05:00:00", y: this.getTotalForHourInDay(5, 1, 9) },
          { label: "06:00:00", y: this.getTotalForHourInDay(6, 1, 9) },
          { label: "07:00:00", y: this.getTotalForHourInDay(7, 1, 9) },
          { label: "08:00:00", y: this.getTotalForHourInDay(8, 1, 9) },
          { label: "09:00:00", y: this.getTotalForHourInDay(9, 1, 9) },
          { label: "10:00:00", y: this.getTotalForHourInDay(10, 1, 9) },
          { label: "11:00:00", y: this.getTotalForHourInDay(11, 1, 9) },
          { label: "12:00:00", y: this.getTotalForHourInDay(12, 1, 9) },
          { label: "13:00:00", y: this.getTotalForHourInDay(13, 1, 9) },
          { label: "14:00:00", y: this.getTotalForHourInDay(14, 1, 9) },
          { label: "15:00:00", y: this.getTotalForHourInDay(15, 1, 9) },
          { label: "16:00:00", y: this.getTotalForHourInDay(16, 1, 9) },
          { label: "17:00:00", y: this.getTotalForHourInDay(17, 1, 9) },
          { label: "18:00:00", y: this.getTotalForHourInDay(18, 1, 9) },
          { label: "19:00:00", y: this.getTotalForHourInDay(19, 1, 9) },
          { label: "20:00:00", y: this.getTotalForHourInDay(20, 1, 9) },
          { label: "21:00:00", y: this.getTotalForHourInDay(21, 1, 9) },
          { label: "22:00:00", y: this.getTotalForHourInDay(22, 1, 9) },
          { label: "23:00:00", y: this.getTotalForHourInDay(23, 1, 9) },
          { label: "24:00:00", y: this.getTotalForHourInDay(24, 1, 9) },
        ]
      }]
    }
  
    chartOptionsMonthlyy = {
      title: {
        text: "October Sales Data"
      },
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      axisY: {
      includeZero: true,
      valueFormatString: "₱#,##0"
      },
      data: [{
      type: "column", //change type to bar, line, area, pie, etc
      yValueFormatString: "₱#,##0",
      color: "#01b8aa",
      dataPoints: [
          { label: "1", y: this.getTotalForMonth(1, 9) },
          { label: "2", y: this.getTotalForMonth(2, 9) },
          { label: "3", y: this.getTotalForMonth(3, 9) },
          { label: "4", y: this.getTotalForMonth(4, 9) },
          { label: "5", y: this.getTotalForMonth(5, 9) },
          { label: "6", y: this.getTotalForMonth(6, 9) },
          { label: "7", y: this.getTotalForMonth(7, 9) },
          { label: "8", y: this.getTotalForMonth(8, 9) },
          { label: "9", y: this.getTotalForMonth(9, 9) },
          { label: "10", y: this.getTotalForMonth(10, 9) },
          { label: "11", y: this.getTotalForMonth(11, 9) },
          { label: "12", y: this.getTotalForMonth(12, 9) },
          { label: "13", y: this.getTotalForMonth(13, 9) },
          { label: "14", y: this.getTotalForMonth(14, 9) },
          { label: "15", y: this.getTotalForMonth(15, 9) },
          { label: "16", y: this.getTotalForMonth(16, 9) },
          { label: "17", y: this.getTotalForMonth(17, 9) },
          { label: "18", y: this.getTotalForMonth(18, 9) },
          { label: "19", y: this.getTotalForMonth(19, 9) },
          { label: "20", y: this.getTotalForMonth(20, 9) },
          { label: "21", y: this.getTotalForMonth(21, 9) },
          { label: "22", y: this.getTotalForMonth(22, 9) },
          { label: "23", y: this.getTotalForMonth(23, 9) },
          { label: "24", y: this.getTotalForMonth(24, 9) },
          { label: "25", y: this.getTotalForMonth(25, 9) },
          { label: "26", y: this.getTotalForMonth(26, 9) },
          { label: "27", y: this.getTotalForMonth(27, 9) },
          { label: "28", y: this.getTotalForMonth(28, 9) },
          { label: "29", y: this.getTotalForMonth(29, 9) },
          { label: "30", y: this.getTotalForMonth(30, 9) }
        ]
      }]
    }
}
