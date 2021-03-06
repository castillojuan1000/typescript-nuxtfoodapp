export interface Restaurant {
  name: string;
  deliveryTime: number;
  meal: string[];
  rating: number;
  freeDelivery: boolean;
  id: string;
  menu: Item[];
}

export interface Item {
  item: string;
  img: string;
  price: number;
  id: string;
  options?: string[];
  addOns: string[];
  description: string;
}


export interface FormOutput {
  id: string;
  item: string;
  count: number;
  options?: string;
  addOns: string[];
  combinedPrice: number;
}
