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