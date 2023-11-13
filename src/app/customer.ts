export interface Customer {
    id: number;
    name: string;
    orderNumber: number;
    dateAndTime: Date;
    items: {
      item1: {
        name: string;
        brand: string;
        weight?: string;
        type?: string;
        color?: string;
        price: number;
        quantity: number;
      };
      item2?: {
        name: string;
        brand: string;
        weight?: string;
        type?: string;
        color?: string;
        price: number;
        quantity: number;
      };
      item3?: {
        name: string;
        brand: string;
        weight?: string;
        type?: string;
        color?: string;
        price: number;
        quantity: number;
      };
      item4?: {
        name: string;
        brand: string;
        weight?: string;
        type?: string;
        color?: string;
        price: number;
        quantity: number;
      };
      item5?: {
        name: string;
        brand: string;
        weight?: string;
        type?: string;
        color?: string;
        price: number;
        quantity: number;
      };
      vouchers?: number; // An optional property for vouchers
    };
    pet?: {
      petName: string;
      
    }
    total: number;
  }
