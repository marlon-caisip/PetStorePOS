import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {

  // This is the array of inventory records for the chart

  inventoryRecords: any[]; // This should contain your actual inventory records.

  // comment test

  constructor() {
    // Simulated past days' inventory records
    this.inventoryRecords = [
      {
        name: 'Cat Food',
        brand: 'Whiskas',
        weight: '3kg',
        type: 'Dry Food',
        price: 20.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 50 },
          { date: new Date('2023-11-02'), quantity: 55 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Dog Treats',
        brand: 'Milk-Bone',
        type: 'Biscuits',
        price: 15.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 30 },
          { date: new Date('2023-11-02'), quantity: 32 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Dog Leash',
        brand: 'Flexi',
        type: 'Retractable',
        price: 20.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 15 },
          { date: new Date('2023-11-02'), quantity: 18 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Fish Tank',
        brand: 'Aqueon',
        type: 'Glass Aquarium',
        price: 100.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 5 },
          { date: new Date('2023-11-02'), quantity: 6 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Fish Food',
        brand: 'Tetra',
        type: 'Flakes',
        price: 10.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 40 },
          { date: new Date('2023-11-02'), quantity: 45 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Bird Cage',
        brand: 'Prevue Hendryx',
        type: 'Round Roof',
        price: 50.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 10 },
          { date: new Date('2023-11-02'), quantity: 12 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Hamster Wheel',
        brand: 'Kaytee',
        type: 'Exercise Wheel',
        price: 15.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 25 },
          { date: new Date('2023-11-02'), quantity: 28 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Hamster Bedding',
        brand: 'Carefresh',
        type: 'Natural Paper',
        price: 5.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 40 },
          { date: new Date('2023-11-02'), quantity: 45 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Reptile Terrarium',
        brand: 'Exo Terra',
        type: 'Glass Terrarium',
        price: 150.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 3 },
          { date: new Date('2023-11-02'), quantity: 4 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Small Animal Cage',
        brand: 'Ferplast',
        type: 'Hamster Habitat',
        price: 60.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 8 },
          { date: new Date('2023-11-02'), quantity: 10 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Small Animal Food',
        brand: 'Oxbow',
        type: 'Essentials',
        price: 20.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 20 },
          { date: new Date('2023-11-02'), quantity: 22 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Cat Scratching Post',
        brand: 'Go Pet Club',
        type: 'Cat Tree',
        price: 60.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 10 },
          { date: new Date('2023-11-02'), quantity: 12 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Dog House',
        brand: 'Suncast',
        type: 'Outdoor Dog House',
        price: 120.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 5 },
          { date: new Date('2023-11-02'), quantity: 6 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Ferret Cage',
        brand: 'Kaytee',
        type: 'Multi-Level Cage',
        price: 70.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 8 },
          { date: new Date('2023-11-02'), quantity: 9 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Ferret Food',
        brand: 'Marshall',
        type: 'Premium Diet',
        price: 15.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 25 },
          { date: new Date('2023-11-02'), quantity: 28 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Cat Litter',
        brand: 'Arm & Hammer',
        type: 'Clumping',
        price: 10.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 35 },
          { date: new Date('2023-11-02'), quantity: 40 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Cat Toys',
        brand: 'SmartyKat',
        type: 'Feather Whirl',
        price: 8.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 50 },
          { date: new Date('2023-11-02'), quantity: 55 },
          // Add more quantity history with dates
        ]
      },
      {
        name: 'Cat Bed',
        brand: 'Frisco',
        type: 'Round',
        price: 15.00,
        history: [
          { date: new Date('2023-11-01'), quantity: 15 },
          { date: new Date('2023-11-02'), quantity: 18 },
          // Add more quantity history with dates
        ]
      },
      // Continue adding the remaining products
    ];
  }

}
