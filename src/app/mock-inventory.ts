import { Inventory } from './inventory';

export const INVENTORY: Inventory[] = [
  {
    name: 'Cat Food',
    brand: 'Whiskas',
    weight: '3kg',
    type: 'Dry Food',
    price: 20.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 50 },
      { date: new Date('2023-11-02'), quantity: 55 },
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
  {
    name: 'Fluffy',
    breed: 'Persian Cat',
    age: 3,
    color: 'White',
    owner: 'Alice',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 2 },
      { date: new Date('2023-11-02'), quantity: 3 },
      // Add more quantity history with dates
    ]
  },
  {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 2,
    color: 'Golden',
    owner: 'Bob',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 1 },
      { date: new Date('2023-11-02'), quantity: 2 },
      // Add more quantity history with dates
    ]
  },
  {
    name: 'Tweety',
    breed: 'Budgerigar',
    age: 1,
    color: 'Blue and Yellow',
    owner: 'Charlie',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 50 },
      { date: new Date('2023-11-02'), quantity: 60 },
      // Add more quantity history with dates
    ]
  },
  {
    name: 'Mittens',
    breed: 'Maine Coon',
    age: 5,
    color: 'Tabby',
    owner: 'Grace',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 2 },
      { date: new Date('2023-11-02'), quantity: 3 },
      // Add more quantity history with dates
    ]
  },
  {
    name: 'Rocky',
    breed: 'German Shepherd',
    age: 4,
    color: 'Sable',
    owner: 'Harry',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 1 },
      { date: new Date('2023-11-02'), quantity: 2 },
      // Add more quantity history with dates
    ]
  },
  {
    name: 'Polly',
    breed: 'Parrotlet',
    age: 1,
    color: 'Green',
    owner: 'Ivy',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 20 },
      { date: new Date('2023-11-02'), quantity: 25 },
      // Add more quantity history with dates
    ]
  },
  {
    name: 'Simba',
    breed: 'Lionhead Rabbit',
    age: 2,
    color: 'Agouti',
    owner: 'Jack',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 4 },
      { date: new Date('2023-11-02'), quantity: 5 },
      // Add more quantity history with dates
    ]
  },
  {
    name: 'Shadow',
    breed: 'Labrador Retriever',
    age: 3,
    color: 'Chocolate',
    owner: 'Kim',
    price: 1000.00,
    history: [
      { date: new Date('2023-11-01'), quantity: 3 },
      { date: new Date('2023-11-02'), quantity: 4 },
      // Add more quantity history with dates
    ]
  },
];