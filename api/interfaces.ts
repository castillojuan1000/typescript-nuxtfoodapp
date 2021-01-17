export interface Restaurants {
  name: string;
  deliveryTime: number;
  meal: string[];
  rating: number;
  freeDelivery: boolean;
  id: string;
  menu: Menu[];
}

interface Menu {
  item: string;
  img: string;
  price: number;
  id: string;
  options: string[];
  addOns: string[];
  description: string;
}
